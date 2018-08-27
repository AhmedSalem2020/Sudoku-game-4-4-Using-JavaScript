
function rand() {
    var arr = [[],[], [], []];
    
    //first left grid
    arr[0][0] = Math.floor(Math.random() * 2);
    arr[0][1] = Math.floor(Math.random() * 2);

    //first right grid
    arr[1][0] = Math.floor(Math.random() * 2);
    arr[1][1] = (Math.floor(Math.random()* 2)) + 2;

    //second left grid
    arr[2][0] = (Math.floor(Math.random()* 2)) + 2;
    arr[2][1] = Math.floor(Math.random()) * 2;

    // second right grid
    arr[3][0] = (Math.floor(Math.random() * 2)) + 2;
    arr[3][1] = (Math.floor(Math.random() * 2)) + 2;
    return arr;
}

// to get random images
function rand_img() {
    var arr=[];
    while (arr.length != 4) {
        rnd = Math.ceil(Math.random() * 4);
        if (arr.indexOf(rnd) == -1) {
            arr.push(rnd);
        }
    }
    return arr;
}

