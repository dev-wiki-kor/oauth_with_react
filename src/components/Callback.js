import React, { useEffect, useState } from "react";

import {
  CLIENT_ID,
  CLIENT_SECRETS,
  GITHUB_AUTH_TOKEN_SERVER,
} from "../oauthInfo/oauth";
import { useNavigate } from "react-router-dom";
const Callback = () => {
  const navigate = useNavigate();
  const [isCalled, setIsCalled] = useState(false);

  useEffect(() => {
    const fetchAccessToken = () => {
      if (isCalled === true) {
        return;
      }

      setIsCalled(true);
      const location = new URL(window.location.href);
      const code = location.searchParams.get("code");
      const TRY_LOGIN_URI = `http://localhost:8080/account/github/handleLogin?code=${code}`;

      return fetch(TRY_LOGIN_URI, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials:"include"
      });
    };

    fetchAccessToken()
      .then((response) => response.json())
      .then((data) => {
        if (data.uniqueGithubId == null) throw "예외 : 아이디 없음";
        navigate("/profile", {
          state: {
            accessToken: data.accessToken,
            userId: data.uniqueGithubId,
          },
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return <div>로딩중 ...</div>;
};

export default Callback;
