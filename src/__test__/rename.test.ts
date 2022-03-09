import { Rename } from "../Rename";
import * as fs from "fs";

const beforeFile = "testfile.txt";
const afterFile = "renamefile.txt";
beforeAll(()=>{
    try {
        const time = new Date();
        fs.utimesSync(beforeFile, time, time);
    }catch(e){
        fs.closeSync(fs.openSync(beforeFile, 'w'));
        console.log(e);
    }
})

afterAll(()=>{
    try {
        fs.unlinkSync(afterFile)
    }catch(e){
        console.log(e)
    }
})

test("rename", async ()=>{

    await Rename(beforeFile, afterFile);
    const isFileExsists = fs.existsSync(afterFile);
    expect(isFileExsists).toBe(true);
})