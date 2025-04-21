import type { Script } from '../src/lib';
import fs from 'node:fs';

/**
 * Writes the details of each script to a file in the "generated" directory.
 */
export async function generateDetails(scripts: Script[]) {
	for (const script of scripts) {
		fs.writeFileSync(`src/lib/generated/${script.id}.json`, JSON.stringify(script, null, ''));
	}
}
