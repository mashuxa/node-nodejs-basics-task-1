import { createWriteStream } from 'fs';

const write = async () => {
  const FILE_PATH = './files/fileToWrite.txt';
  const fileUrl = new URL(FILE_PATH, import.meta.url);
  const writableStream = new createWriteStream(fileUrl);

  process.stdin.on('data', chunk => writableStream.write(chunk));
};

await write();