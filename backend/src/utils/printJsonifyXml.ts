// will need to have an offset maybe
const isLiteralObject = function(a:any) {
    return (!!a) && (a.constructor === Object);
};
//
export const printJsonifyXml = (jsonifyXml:any, step=-1, offset = 0, withHeader=false) => {
    let counter = 0 

    for(let [keyLevel1,valuesLevel1] of Object.entries<any>(jsonifyXml.practiceTransfer)){

        if(Array.isArray(valuesLevel1)){
            if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("1","Array -> first",valuesLevel1[0], '\n')
            if(counter >= step) break
        }
        else if(valuesLevel1["analyticalEntry"]){
           if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("2", Object.keys(valuesLevel1) ,valuesLevel1["analyticalEntry"].split('+')[0].split('\n')[0], '\n')
            if(counter >= step) break
        }
        else if(valuesLevel1["entry"]&& valuesLevel1["entry"].length > 500 ){
           if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("3", Object.keys(valuesLevel1), valuesLevel1["entry"].split("\n")[0])
            if(counter >= step) break
        }
        else if(isLiteralObject(valuesLevel1)){
            if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("3.5 - is object literal",valuesLevel1)
            if(counter >= step) break
        }
        else if(typeof valuesLevel1 == 'string' ){
           if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("4",valuesLevel1.split('+')[0], '\n')
            if(counter >= step) break
        }
        else{
           if(counter <= offset){
                counter++;
                continue
            }
            if(withHeader) console.log(keyLevel1)
            console.log("5 - default ",'values', valuesLevel1, '\n')
            if(counter >= step) break
        }
        
        counter++
    }
}
