const core = require("@actions/core");
const { exec } = require("child_process");

const image_version = core.getInput("image_version");
const port = core.getInput("port");

const command = `sudo docker run -d -p ${port}:${port} mongo:${image_version}`;

console.log("Executing the following command: ");
console.log(command);

dir = exec(command, function(err, stdout, stderr) {
  if (err) {
    core.setFailed(err.message);
  }
});
