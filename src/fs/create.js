import { writeFile } from 'fs/promises';
import { ERROR_MSG, FILES_PATH } from './constants.js';
import { exists, getAbsUrl } from './utils.js';

const create = async () => {
  const FILE_NAME = 'fresh.txt';
  const CONTENT = 'I am fresh and young';
  const url = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);

  if (await exists(url)) {
    throw Error(ERROR_MSG);
  } else {
    await writeFile(url, CONTENT);
  }
};

await create();