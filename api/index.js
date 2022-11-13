const winston = require("winston");
const { randomUUID } = require("crypto");

const logger = winston.createLogger({
  levels: winston.config.syslog.levels,
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
  ],
});

const AVALIABLE_STATUS_CODE = [
  200, 201, 202, 204, 400, 401, 403, 404, 409, 500,
];
const AVALIABLE_METHODS = ["GET", "POST", "PUT", "DELETE"];
const AVALIABLE_ROUTES = ["/users", "/auth", "/products", "/orders"];

const randomDuration = () => Math.floor(Math.random() * 5e4) + 500;
Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

setInterval(() => {
  for (let i = 0; i < 10; i++) {
    const statusCode = AVALIABLE_STATUS_CODE.random();
    logger.log({
      level: statusCode >= 400 ? "error" : "info",
      requestId: randomUUID(),
      statusCode: statusCode,
      method: AVALIABLE_METHODS.random(),
      route: AVALIABLE_ROUTES.random(),
      duration: randomDuration(),
    });
  }
}, 500);
