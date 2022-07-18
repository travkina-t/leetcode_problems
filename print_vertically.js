const printVertically = function (s) {
    const arr = s.split(' ');
    let lengths = [];

    for (const el of arr) {
        lengths.push(el.length);
    }

    const maxLen = Math.max(...lengths);

    let res = [];

    for (let i=0; i<maxLen;i++) {
        for (let j=0;j<arr.length;j++) {

            if(arr[j][i]) {
                res.push(arr[j][i]);

            }
            else res.push(' ');

            }

            res.push('-');
            
            
        }
        res.pop();
        let result = res.join('').split('-').map(el=> el.replace(/ +$/, ''));
        return result;
    
    
};