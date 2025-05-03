import chalk from 'chalk';
import { loadScripts } from './load-scripts';
import { isValidScript } from './script-validator';

async function validateAllScripts() {
	let hasErrors = false;

	const errors: Record<string, string[]> = {};

	for await (const { data, fileName } of loadScripts()) {
		process.stdout.write(`${fileName} `);

		if (!isValidScript(data)) {
			console.log(chalk.red(`Invalid!`));
			errors[fileName] =
				isValidScript.errors?.map((error) => `${error.instancePath} ${error.message}`) ?? [];
			hasErrors = true;
		} else {
			process.stdout.write(chalk.green(`Valid!\n`));
		}
	}

	if (hasErrors) {
		console.log(chalk.red('\nErrors:'));

		for (const [fileName, errorMessages] of Object.entries(errors)) {
			console.log(`\n${fileName}: `);
			for (const error of errorMessages) {
				console.log(`\t${error}`);
			}
		}

		process.exit(1);
	}

	console.log(chalk.green('All scripts are valid'));
}

await validateAllScripts();
