export const loggerConfig = {
    development: {
      level:"debug",
      redact:['POSTGRES_URI'],
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname',
        },
      },
    },
    production: true,
    test: false,
}

