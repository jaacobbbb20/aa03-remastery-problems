/*
    Write a function r2d2Speaks that takes in a series of 0s and 1s.
    The function should console.log a 'beep' for a 0 followed by a pause of 400 ms and a 'boop' for a 1 followed by 800 ms.

    let code = [0, 1, 1, 0];
    r2d2Speaks(code);
        print 'beep'
        pause for 400ms
        print 'boop'
        pause for 800ms
        print 'boop'
        pause for 800ms
        print 'beep'
        pause for 400ms
*/

function r2d2Speaks(code) {
// Start with setting the delay to 0
  let delay = 0;
// Go over each element inside of the code array
  code.forEach(value => {
// Determine the message and delay
    const message = value === 0 ? 'beep' : 'boop';
    const messageDelay = value === 0 ? 400 : 800;
// Use setTimeout to spit out the message after the delay
    setTimeout(() => {
    }, messageDelay);
    console.log(message);
// Update the delay for the following message
    delay += messageDelay;
  });
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = r2d2Speaks;
} catch (e) {
  module.exports = null;
}
