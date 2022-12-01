import { readdir } from 'fs/promises';
import { getAbsUrl, exists } from './utils.js';
import { FILES_PATH, ERROR_MSG } from './constants.js';

const list = async () => {
  const originalFolderUrl = getAbsUrl(FILES_PATH);

  if (await exists(originalFolderUrl)) {
    console.log(await readdir(originalFolderUrl));
  } else {
    throw Error(ERROR_MSG);
  }};

await list();