import { Composer } from "grammy";
import { helpCommand } from "./help.command";
let commandsComposer = new Composer();

let commands: any[] = [{ name: "help", command: helpCommand }];

for (let index = 0; index < commands.length; index++) {
	commandsComposer.command(commands[index].name, commands[index].command);
}
//commands.command();
export { commandsComposer };
