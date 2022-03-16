import * as fs from 'fs'

const promises = fs.promises;

export async function Rename(beforeName, afterName) {
    try {
        if (fs.existsSync(beforeName)) {
            await promises.rename(beforeName, afterName);
        }
    } catch (e) {
        console.log(e);
    }
}
