import { promises } from "fs";
import * as fs from "fs";

export const getFileList = async (folderPath)=>{

    if( folderPath===""){
        return [];
    }

    const files = await promises.readdir(folderPath);
    return files;

}