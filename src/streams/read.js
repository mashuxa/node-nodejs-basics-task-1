import { createReadStream } from 'fs';

const read = async () => {
  const FILE_PATH = './files/fileToRead.txt';
  const fileUrl = new URL(FILE_PATH, import.meta.url);

  new createReadStream(fileUrl).pipe(process.stdout);
};

await read();