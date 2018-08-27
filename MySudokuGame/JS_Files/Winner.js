
arrg = [
    [0, 1, 2, 0],
    [0, 0, 0, 0],
    [0, 2, 0, 0],
    [0, 0, 0, 0]
];

function fill(arr, x, y, data) {

    // check if this cell has a value or not!
    if (arr[x][y] != 0)
        return false;
    for (var i = 0; i < 4; i++)
    {
        // compare between rows
        if (arr[x][i] == data)
            return false;
        // compare between cols
        else if (arr[i][y] == data)
            return false;
    }
    //compare between each grid
    if (x % 2 == 0 && x == y)
    {
        if (arr[x + 1][y + 1] == data)
            return false;
    }

    else if (x % 1 == 0 && x == y)
    {
        if (arr[x - 1][y - 1] == data)
            return false;
    }

    else if (x % 2 == 0)
    {
        if (arr[x + 1][y - 1] == data)
            return false;
    }

    else if (x % 1 == 0)
    {
        if (arr[x - 1][y + 1] == data)
            return false;
    }

    arr[x][y] = data;
    return true;
}

// check if the palyer fill all cells in the array
function check_winner(arr) {
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (arr[i][j] == 0)
                return false;
        }
    }
    return true;
}