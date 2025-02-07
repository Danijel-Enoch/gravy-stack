const fs = require("fs");
const path = require("path");

function createBoilerplateFile(filename, boilerplateContent) {
	// Ensure the directory exists; if not, create it
	const directory = path.join(process.cwd(), "./commands");
	if (!fs.existsSync(directory)) {
		fs.mkdirSync(directory, { recursive: true });
	}

	// Ensure the filename has a .ts extension
	if (!filename.endsWith(".ts")) {
		filename += ".ts";
	}

	// Full path of the new file
	const filePath = path.join(directory, filename);

	// Write the boilerplate content to the file
	fs.writeFileSync(filePath, boilerplateContent);

	console.log(`Boilerplate for ${filename} created at ${filePath}`);
}

function main() {
	// Example boilerplate content
	const boilerplateContent = (name: string) => `
// This is a sample boilerplate code
import { Bot, CommandContext, Context } from "grammy";
export async function ${name}(ctx: CommandContext<Context>) {
}
`;

	// Take input from the user
	const readline = require("readline").createInterface({
		input: process.stdin,
		output: process.stdout
	});

	readline.question("Enter the filename: ", (filename) => {
		// Create the boilerplate file
		createBoilerplateFile(filename, boilerplateContent(filename));
		readline.close();
	});
}

main();
