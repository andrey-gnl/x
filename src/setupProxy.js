const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/api-client',
    createProxyMiddleware({
      target: 'https://livescore-api.com',
      changeOrigin: true,
    })
  );
  app.use(
    '/v1',
    createProxyMiddleware({
      target: 'https://digital-api.uefa.com/',
      changeOrigin: true,
    })
  );
};