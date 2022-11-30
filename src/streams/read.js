import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

const read = async () => {
  const FILE_PATH = './files/fileToRead.txt';
  const fileUrl = new URL(FILE_PATH, import.meta.url);

  await pipeline(createReadStream(fileUrl), process.stdout);
};

await read();