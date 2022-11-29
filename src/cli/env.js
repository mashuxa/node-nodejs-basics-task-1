const parseEnv = () => {
  const PREFIX = 'RSS_';
  const rssVariables = Object.entries(process.env).reduce((acc, [key, value]) =>
    key.startsWith(PREFIX) ? [...acc, `${key}=${value}`] : acc, []).join('; ');

  console.log(rssVariables);
};

parseEnv();