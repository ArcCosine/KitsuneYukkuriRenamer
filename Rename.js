const fs = require("fs");
const promises = fs.promises;

const Rename = async function( beforeName, afterName){
    try {
        if( fs.existsSync(beforeName) ){
            await promises.rename(beforeName,afterName)
        }
    }catch(e){
        console.log(e);
    }
}

module.exports = {
    Rename
}
