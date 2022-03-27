import { test, beforeAll, afterAll,expect } from 'vitest'
import * as fs from 'fs'
import { Rename } from "../../Rename.js"


const beforeFile = "testfile.txt";
const afterFile = "renamefile.txt";
beforeAll(() => {
    try {
        const time = new Date();
        fs.utimesSync(beforeFile, time, time);
    } catch (e) {
        fs.closeSync(fs.openSync(beforeFile, "w"));
        console.log(e);
    }
});

afterAll(() => {
    try {
        fs.unlinkSync(afterFile);
    } catch (e) {
        console.log(e);
    }
});

test("rename test", async () => {
    await Rename(beforeFile, afterFile);
    const isFileExsists = fs.existsSync(afterFile);
    expect(isFileExsists).toBe(true);
});
