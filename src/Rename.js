import * as fs from "fs";

const Rename = function( beforeName, afterName){
    try {
        if( fs.existsSync(beforeName) ){
            fs.rename(beforeName, afterName, (err)=>{
                if( err ) throw err;
            })
        }
    }catch(e){
        console.log(e);
    }
}

export default Rename;