// 1-stdin.js

// Display the welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up a listener for the 'readable' event on stdin
process.stdin.on('readable', () => {
  // Read the input data
  const data = process.stdin.read();

  // If data is received, process it
  if (data) {
    // Remove any trailing newline or carriage return characters
    const name = data.toString().trim();
    // Display the user's name
    process.stdout.write(`Your name is: ${name}\n`);
  }
});

// Set up a listener for the 'end' event on stdin
process.stdin.on('end', () => {
  // Display the closing message
  process.stdout.write('This important software is now closing\n');
});
