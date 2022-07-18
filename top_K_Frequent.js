const topKFrequent = function(words, k) {

    
    const temMap = new Map();
    const result=[];

    for(let i=0; i<words.length; i++) {
        if (temMap.has(words[i])) {
            temMap.set(words[i], temMap.get(words[i]) + 1);

        }
        else {
            temMap.set(words[i], 1);
        }
    }

    for(let j=0; j<k;j++) {
        let max = Math.max(...temMap.values());

        for(const el of [...temMap.keys()].sort()) {
            if(result.length===k) {
                return result;
            }
            else if(temMap.get(el) === max) {
                result.push(el);
                temMap.delete(el);
                break;

            }

        }
       
    }
    

    
 return result;

    
};