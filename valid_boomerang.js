const isBoomerang = function(points) {
    const arr = points.flat();
    if((arr[0]-arr[4])*(arr[3]-arr[5])===(arr[2]-arr[4])*(arr[1]-arr[5])) return false;
    else return true;  
};
