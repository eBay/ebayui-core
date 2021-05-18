const fs = require('fs');
const { execSync } = require('child_process');
const files = ['package.json', 'package-lock.lock'];
const contents = files.map((file) => fs.readFileSync(file));
const args = process.argv.slice(2).join(' ');

try {
    execSync(`npm i ${args}`);
} finally {
    files.forEach((file, i) => fs.writeFileSync(file, contents[i]));
}
