import { createHash } from 'crypto';
import { readFile } from 'fs/promises';

const calculateHash = async () => {
  const FILE_PATH = './files/fileToCalculateHashFor.txt';
  const ALGORITHM = 'sha256';
  const ENCODING = 'hex';
  const fileUrl = new URL(FILE_PATH, import.meta.url);

  const content = await readFile(fileUrl);
  const data = createHash(ALGORITHM).update(content);

  console.warn(data.digest(ENCODING));
};

await calculateHash();