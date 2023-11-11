import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import { GITHUB_API_SERVER } from "../oauthInfo/oauth";

const Profile = () => {
  const location = useLocation();
  const [userId, setUserId] = useState();

  useEffect(() => {
    const updateUserInfo = () => {
      const accessToken = location.accessToken;
      setUserId(location.userId);
    };

    return updateUserInfo();
  }, []);

  return <div>로그인 된 사용자 : {userId ?? "로딩중.."}</div>;
};

export default Profile;
