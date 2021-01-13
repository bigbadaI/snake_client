let connection;//this is our persistent variable

const setupInput = function(conn) {
  connection = conn; //conn saved into connection, because using it later
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key)
   
  );
 
  const handleUserInput = function(char) {
    if (char === '\u0003') {
      process.exit();
    }
    let theseKeys = "";
    if (char === 'w') {
      theseKeys = 'Move: up';
    }
    if (char === 'a') {
      theseKeys = 'Move: left';
    }
    if (char === "s") {
      theseKeys = 'Move: down';
    }
    if (char === 'd') {
      theseKeys = 'Move: right';
    }
    if (char === 't') {
      theseKeys = "Say: Move Buddy!!";
    }
   
    connection.write(theseKeys);
  };
  return stdin;
};

module.exports = {
  setupInput,
};