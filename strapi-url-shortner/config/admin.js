module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'f0eea1be584f0fd410f27c553bb843ee'),
  },
});
