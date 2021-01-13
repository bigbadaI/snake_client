const net = require('net');

/**
 * Establishes connection with the game server
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
};
const handleUserInput = function(stdin) {
  if (stdin === '\u0003') {
    process.exit();
  }
  return stdin;
};


const connect = require('./client');
console.log('Connecting ...');
connect();