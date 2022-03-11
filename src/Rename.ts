import { promises } from "fs";
import * as fs from "fs";


export const Rename = async function( beforeName:string, afterName:string){
    try {
        if( fs.existsSync(beforeName) ){
            await promises.rename(beforeName,afterName)
        }
    }catch(e){
        console.log(e);
    }
}
