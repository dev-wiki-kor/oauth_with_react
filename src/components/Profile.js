import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { GITHUB_API_SERVER } from "../oauthInfo/oauth";

const Profile = () => {
  const location = useLocation();
  const [userName, setUserName] = useState();

  useEffect(() => {
    const fetchGithubUser = () => {
      const accessToken = location.state;

      return fetch(GITHUB_API_SERVER, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          Accept: "application/json",
        },
      });
    };

    fetchGithubUser()
      .then((response) => {
        console.log("login res:", response);

        console.log("login res:", response.text);

        console.log("login res:", response.json);
        return response.json();
      })
      .then(({ login }) => setUserName(login))
      .catch((err) => console.log(err));
  });

  return <div>로그인 된 사용자 : {userName ?? "로딩중.."}</div>;
};

export default Profile;
