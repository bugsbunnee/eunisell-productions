import winston from 'winston';

import 'dotenv/config';
import 'winston-daily-rotate-file';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.json(),
    winston.format.colorize(),
    winston.format.prettyPrint(),
    winston.format.timestamp({ format: 'YYYY-MM-DDTHH:mm:ss.SSS' }),
    winston.format.printf((info) => `[${info.timestamp}]:[${info.level}]:[${info.message}]`)
  ),
  defaultMeta: { service: 'app' },
  transports: [],
});

if (process.env.VERCEL) {
  const consoleTransport = new winston.transports.Console({
    format: winston.format.combine(winston.format.json(), winston.format.colorize()),
  });

  logger.add(consoleTransport);
} else {
  const fileRotationTransport = new winston.transports.DailyRotateFile({
    level: 'info',
    filename: `src/logs/app-%DATE%.log`,
    datePattern: 'YYYY-MM-DD',
    zippedArchive: true,
    maxSize: '20m',
    maxFiles: '14d',
  });

  logger.add(fileRotationTransport);
}

process.on('unhandledRejection', (ex) => {
  throw ex;
});

process.on('uncaughtException', (ex) => {
  logger.error('Caught exception: ' + ex);
});

export default logger;
