module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "mysql"),
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 3312),
      database: env("DATABASE_NAME", "tpec"),
      user: env("DATABASE_USERNAME", "tpec_admin"),
      password: env("DATABASE_PASSWORD", "acb@123"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
