const fs = require('fs');
const { execSync } = require('child_process');
const files = ['package.json', 'yarn.lock'];
const contents = files.map(file => fs.readFileSync(file));
const args = process.argv.slice(2).join(' ');

try {
    execSync(`yarn add ${args}`);
} finally {
    files.forEach((file, i) => fs.writeFileSync(file, contents[i]));
}
