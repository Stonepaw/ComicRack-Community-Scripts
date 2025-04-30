import { dump } from 'js-yaml';
import fs from 'node:fs';
import path from 'node:path';
import { isValidScript } from './script-validator';

fs.writeFileSync(
	path.join(process.cwd(), 'scripts/script-schema.yaml'),
	dump(isValidScript.schema)
);
