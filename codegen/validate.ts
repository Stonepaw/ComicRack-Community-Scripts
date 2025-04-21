import { loadScripts } from './load-scripts';
import { isValidScript } from './script-validator';

async function validateAllScripts() {
	for await (const { data, fileName } of loadScripts()) {
		if (!isValidScript(data)) {
			console.error(`Invalid script: ${fileName}`);
			console.error(JSON.stringify(isValidScript.errors));
			return;
		}
	}

	console.log('All scripts are valid');
}

await validateAllScripts();
