import { Rename } from "../Rename";
import * as fs from "fs";

const beforeFile = "testfile.txt";
const afterFile = "renamefile.txt";
beforeAll(()=>{
    try {
        fs.unlinkSync(beforeFile);
        fs.unlinkSync(afterFile);
        const time = new Date();
        fs.untimesSync(beforeFile, time, time);
    }catch(e){
        fs.closeSync(fs.openSync(beforeFile, 'w'));
        console.log(e);
    }
})

test("rename", ()=>{

    Rename(beforeFile, afterFile);
    const isFileExsists = fs.existsSync(afterFile);
    expect(isFileExsists).toBe(true);
})