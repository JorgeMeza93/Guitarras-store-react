module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cdes1mhgp3juhhucrodg-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_0btu'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', '9F4049f4LT2SA9IbQAzIrUgP8PV6ntqB'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
