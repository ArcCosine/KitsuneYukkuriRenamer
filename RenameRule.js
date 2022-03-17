import * as fs from 'fs'
import { Rename } from "./Rename.js"

export async function RenameRule(folderPath) {
    const results = [];

    if(!fs.existsSync(`${folderPath}\\口`) || !fs.existsSync(`${folderPath}\\目`) ){
        results.push('変換対象がフォルダ内に存在しません');
        return results;
    }
    if(fs.existsSync(`${folderPath}\\口\\00.0.png`) ){
        results.push('変換は完了しています');
        return results;
    }
    // Mouse
    const beforeHash = ["", "a", "b", "c", "d", "e"];
    const afterHash = [".0", ".1", ".2", ".3", ".4", ""];
    for (let i = 0; i < 19; i++) {
        const renNum = ("00" + i).slice(-2);
        for (let j = 0; j < beforeHash.length; j++) {
            const beforeName = `${folderPath}\\口\\${renNum}${beforeHash[j]}.png`;
            const afterName = `${folderPath}\\口\\${renNum}${afterHash[j]}.png`;
            await Rename(beforeName, afterName);
        }
    }

    // Eye
    const beforeEyeHash = ["a", "b", "c", "d", "e"];
    const afterEyeHash = [".4", ".3", ".2", ".1", ".0"];
    const beforeEyeHash2 = ["a-15", "b-15", "c-15", "d-15", "e-15", "-15"];
    const afterEyeHash2 = [".4", ".3", ".2", ".1", ".0", ""];
    const beforeEyeHash3 = ["k", "l", "m", "n", "o"];
    const afterEyeHash3 = [".4", ".3", ".2", ".1",".0"];
    for (let i = 0; i < 19; i++) {
        const renNum = ("00" + i).slice(-2);
        if ((i >= 0 && i <= 6) || (i >= 14 && i <= 17)) {
            for (let j = 0; j < beforeEyeHash.length; j++) {
                const beforeName = `${folderPath}\\目\\${renNum}${beforeEyeHash[j]}.png`;
                const afterName = `${folderPath}\\目\\${renNum}${afterEyeHash[j]}.png`;
                await Rename(beforeName, afterName);
            }
        } else if ((i >= 7 && i <= 9) || i === 18) {
            for (let j = 0; j < beforeEyeHash2.length; j++) {
                const beforeName = `${folderPath}\\目\\${renNum}${beforeEyeHash2[j]}.png`;
                const afterName = `${folderPath}\\目\\${renNum}${afterEyeHash2[j]}.png`;
                await Rename(beforeName, afterName);
            }
        } else if (i >= 10 && i <= 13) {
            for (let j = 0; j < beforeEyeHash3.length; j++) {
                const beforeName = `${folderPath}\\目\\${renNum}${beforeEyeHash3[j]}.png`;
                const afterName = `${folderPath}\\目\\${renNum}${afterEyeHash3[j]}.png`;
                await Rename(beforeName, afterName);
            }
        }
    }
    await Rename(`${folderPath}\\目\\34z.png`, `${folderPath}\\目\\34.png`);
    results.push(`変換が終わりました`);

    return results;
}