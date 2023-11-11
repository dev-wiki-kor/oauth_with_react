const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/login", {
      target: "https://github.com",
      changeOrigin: true,
      logLevel: "debug",
    })
  );

  app.use(
    createProxyMiddleware("/user", {
      target: "https://api.github.com",
      changeOrigin: true,
      logLevel: "debug",
    })
  );

  app.use(
    "/api", //proxy가 필요한 path parameter
    createProxyMiddleware({
      target: "http://localhost:8080", //타겟이 되는 api url
      changeOrigin: true, // 서버 구성에 따른 호스트 헤더 변경 여부 설정
      logLevel: "debug",
    })
  );
};
