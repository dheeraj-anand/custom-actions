const core = require('@actions/core');

try {
  const nameToGreet = core.getInput('who-to-greet');
  const time = new Date().toTimeString();
  const message = `Hello, ${nameToGreet}! The current time is ${time}`;
  console.log(message);
  core.setOutput('greeting-message', message);
} catch (error) {
  core.setFailed(error.message);
}