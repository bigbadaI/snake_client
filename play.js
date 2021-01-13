


/**
 * Establishes connection with the game server
 */

const { setupInput } = require('./input');
const { connect } = require('./client');
console.log('Connecting ...');
const conn = connect();
setupInput(conn);