module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3308352f715183d3f420a140a8986e8b'),
  },
});
