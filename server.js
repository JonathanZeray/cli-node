const { Command } = require("commander");
const program = new Command();

program.version("1.0.0").description("My own CLI");

program
  .command("hello")
  .description("Responds with a greeting, add '-n <your name>'")
  .option("-n, --name <type>", "Add your name")
  .action((user) => {
    const name = user.name ? user.name : "world";
    console.log(`Hello, ${name}!`);
  });

program
  .command("echo <message>")
  .description("Echoing your message!")
  .action((message) => {
    console.log(message);
  });

program.parse(process.argv);
