import { stat, writeFile } from 'fs/promises';

const create = async () => {
  const FILE_NAME = 'fresh.txt';
  const FILE_PATH = 'files';
  const CONTENT = 'I am fresh and young';
  const ERROR_MSG = 'FS operation failed';

  const url = new URL(`${FILE_PATH}/${FILE_NAME}`, import.meta.url);
  const exists = async (path) => !!await stat(path).catch(() => false);

  if (await exists(url)) {
    throw Error(ERROR_MSG);
  } else {
    await writeFile(url, CONTENT);
  }
};

await create();