import React from "react";
import styled from "styled-components";

import {
  GITHUB_AUTH_CODE_SERVER,
  CLIENT_ID,
  CALLBACK_URL,
} from "../oauthInfo/oauth";

const Login = () => {
  const AUTHORIZATION_CODE_URL = `${GITHUB_AUTH_CODE_SERVER}?client_id=${CLIENT_ID}&redirect_url=${CALLBACK_URL}`;
  const fetchAuthCode = () => {
    console.log("AUTHORIZATION_CODE_URL: ", AUTHORIZATION_CODE_URL);
    window.location.assign(AUTHORIZATION_CODE_URL);
  };

  return (
    <LoginPage>
      <Title>로그인이 필요합니다.</Title>
      <GithubLoginBtn onClick={fetchAuthCode}>
        Login with github OAuth
      </GithubLoginBtn>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  width: 300px;
  height: 500px;
`;

const Title = styled.div`
  width: 100%;
  text-align: center;
  font-size: 24px;
`;

const GithubLoginBtn = styled.button`
  width: 100%;
  height: 50px;

  border-radius: 10px;

  color: white;
  background-color: hsl(210, 8%, 20%);

  &:hover {
    cursor: pointer;
  }
`;

export default Login;
