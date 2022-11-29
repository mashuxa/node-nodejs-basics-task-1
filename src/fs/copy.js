import { readdir, copyFile, mkdir } from 'fs/promises';
import { exists, getAbsUrl } from './utils.js';
import { ERROR_MSG } from './constants.js';

const copy = async () => {
  const ORIGINAL_FOLDER_PATH = 'files';
  const COPY_FOLDER_PATH = 'files_copy';
  const originalFolderUrl = getAbsUrl(ORIGINAL_FOLDER_PATH);
  const copyFolderUrl = getAbsUrl(COPY_FOLDER_PATH);

  if (await exists(copyFolderUrl) || !(await exists(originalFolderUrl))) {
    throw Error(ERROR_MSG);
  } else {
    const [files] = await Promise.all([readdir(originalFolderUrl), mkdir(copyFolderUrl)]);
    const promises = files.map((fileName) =>
      copyFile(getAbsUrl(`${ORIGINAL_FOLDER_PATH}/${fileName}`), getAbsUrl(`${COPY_FOLDER_PATH}/${fileName}`)));

    await Promise.all(promises);
   }
};

copy();