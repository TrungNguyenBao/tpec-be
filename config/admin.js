module.exports = ({ env }) => ({
  auth: {
    secret: env("ADMIN_JWT_SECRET", "Ix0qGQBJZqo3srhcnB35Ug=="),
  },
  apiToken: {
    salt: env("API_TOKEN_SALT", "2ufs+hScxsSazGZGKoBWfQ=="),
  },
  watchIgnoreFiles: ["**/config/sync/**"],
});
