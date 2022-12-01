import { fork } from 'child_process';

const spawnChildProcess = async (args) => {
  const SCRIPT_PATH = './files/script.js';
  const scriptUrl = new URL(SCRIPT_PATH, import.meta.url);
  const childProcess = fork(scriptUrl, args, { silent: true });

  process.stdin.pipe(childProcess.stdin);
  childProcess.stdout.pipe(process.stdout)

  childProcess.stdout.on('data', chunk => {
     process.stdout.write(`Received from child process: ${chunk}`)
  });
};

spawnChildProcess();