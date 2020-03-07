const defaultConfig = {
  port: process.env.PORT || 8888,
};

const env = process.env.NODE_ENV || 'development';

const envs = {
  production: {},
  development: {},
  staging: {},
};

export default { ...defaultConfig, ...envs[env] };
