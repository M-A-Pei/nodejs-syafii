function rotate(arr, n){
    let temp = [];

    for(let i = 0; i < arr.length; i++){
        if(i + n < arr.length){
            temp[i+n] = arr[i];
        }else{
            temp[(i+n)%arr.length] = arr[i];
        }
    }

    return temp;
}

module.exports = rotate;