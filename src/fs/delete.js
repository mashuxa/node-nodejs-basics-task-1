import { rm } from 'fs/promises';
import { exists, getAbsUrl } from './utils.js';
import { FILES_PATH, ERROR_MSG } from './constants.js';

const remove = async () => {
  const FILE_NAME = 'fileToRemove.txt';
  const fileUrl = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);

  if (await exists(fileUrl)) {
    await rm(fileUrl);
  } else {
    throw Error(ERROR_MSG);
  }
};

await remove();