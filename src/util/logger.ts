import pino from "pino";

const pinoOption = {
  name: "scaffolding-node",
  level: "info",
  messageKey: "message",
  formatters: {
    level: (label: string) => {
      return { level: label.toUpperCase() };
    },
  },
  timestamp: () => `,"timestamp":"${new Date(Date.now()).toISOString()}"`,
};

export const logger = pino(pinoOption);
