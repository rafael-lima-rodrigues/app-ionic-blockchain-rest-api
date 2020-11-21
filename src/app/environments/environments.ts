export const env = {
  production: false,
  protocol: "http",
  host: "localhost",
  port: "8080",
  url: (path: string) => {
    return `${env.protocol}://${env.host}:${env.port}/${path}`;
  }
};
