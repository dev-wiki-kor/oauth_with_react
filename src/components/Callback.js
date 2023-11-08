import React, { useEffect } from "react";

import {
  CLIENT_ID,
  CLIENT_SECRETS,
  GITHUB_AUTH_TOKEN_SERVER,
} from "../oauthInfo/oauth";
import { useNavigate } from "react-router-dom";
const Callback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAccessToken = () => {
      const location = new URL(window.location.href);
      const code = location.searchParams.get("code");
      const ACCESS_TOKEN_URL = `${GITHUB_AUTH_TOKEN_SERVER}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRETS}&code=${code}`;

      return fetch(ACCESS_TOKEN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
    };

    fetchAccessToken()
      .then((response) => response.json())
      .then((data) => {
        navigate("/profile", { state: data.access_token });
      })
      .catch((err) => console.log(err));
  });

  return <div>로딩중 ...</div>;
};

export default Callback;
