import { readFile } from 'fs/promises';
import { exists, getAbsUrl } from './utils.js';
import { ERROR_MSG, FILES_PATH } from './constants.js';

const read = async () => {
  const FILE_NAME = 'fileToRead.txt';
  const BUFFER_ENCODING = 'utf8';
  const fileUrl = getAbsUrl(`${FILES_PATH}/${FILE_NAME}`);
  
  if (await exists(fileUrl)) {
    const content = await readFile(fileUrl, BUFFER_ENCODING);

    console.warn(content);
  } else {
    throw Error(ERROR_MSG);
  }
};

await read();