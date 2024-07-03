// setupProxy.js
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api', // Your API endpoint path that needs to be proxied
    createProxyMiddleware({
      target: 'https://data.accentapi.com',
      changeOrigin: true,
      secure: false,
    })
  );
};
