const kthFactor = function(n,k) {
    let res=[1];
    for(let i=2;i<=n;i++) {
        if(n%i===0) res.push(i);
    }
    if (res.length < k) return -1;
    else return res[k-1];
}