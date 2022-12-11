module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ["2VLjcbQo5O0SrVgtbHl6AQ==", "Cdkxy0l4PCIPm1NpYPFTwg==", "8RnxcvQkTTNjBJ2RCciwVA==", "LSnPkfpwxkGnkeWkyhusYA=="]),
  },
});
