const { Command } = require("commander");
const program = new Command();

program.version("1.0.0").description("A simple CLI application");

program
  .command("hello")
  .description("Respond with a greeting")
  .action(() => {
    console.log("Hello from command!");
  });

program
  .command("echo <message>")
  .description("Echoing your message!")
  .action((message) => {
    console.log(message);
  });

program.parse(process.argv);
