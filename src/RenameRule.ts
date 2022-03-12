import { Rename } from "./Rename";

export const RenameRule = ()=>{

    // Mouse
    const beforeHash = ["","a","b","c","d","e"];
    const afterHash = [".0",".1",".2",".3",".4",""]
    for(let i=0; i<19; i++ ){
        const renNum = ("00" + i).slice(-1);
        for( let j=0; j<beforeHash.length;j++){
            const beforeName = `口/${renNum}${beforeHash[j]}.png`;
            const afterName = `口/${renNum}${afterHash[j]}.png`;
            Rename(beforeName,afterName);
        }
    }

    // Eye
    const beforeEyeHash = ["a","b","c","d","e"];
    const afterEyeHash = [".4",".3",".2",".1",".0"];
    const beforeEyeHash2 = ["a-15","b-15","c-15","d-15","e-15","-15"];
    const afterEyeHash2 = [".4",".3",".2",".1",".0",""];
    const beforeEyeHash3 = ["k","l","m","n","o"];
    const afterEyeHash3 = [".4",".3",".2",".1"]
    for( let i=0;i<19;i++ ){
        const renNum = ("00" + i).slice(-1);
        if( (i>=0 && i <= 6) || (i >=14 && i<=17) )  {
            for( let j=0; j<beforeEyeHash.length;j++){
                const beforeName = `目/${renNum}${beforeEyeHash[j]}.png`;
                const afterName = `目/${renNum}${afterEyeHash[j]}.png`;
                Rename(beforeName,afterName);
            }
        } else if( (i>=7 && i<=9) || i===18){
            for( let j=0; j<beforeEyeHash2.length;j++){
                const beforeName = `目/${renNum}${beforeEyeHash2[j]}.png`;
                const afterName = `目/${renNum}${afterEyeHash2[j]}.png`;
                Rename(beforeName,afterName);
            }          
        } else if( i>= 10 && i<=13 ) {
            for( let j=0; j<beforeEyeHash3.length;j++){    
                const beforeName = `目/${renNum}${beforeEyeHash3[j]}.png`;
                const afterName = `目/${renNum}${afterEyeHash3[j]}.png`;
                Rename(beforeName,afterName);
            }   
        }
    }
    Rename(`目/34z.png`,`目/34.png`)
};
