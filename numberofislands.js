//Objective is to find the number of 'islands' in a 2-D array. Islands are counted by being consecutive 1's surrounded by 0's.
//For example:
//000
//010
//000

let array = 
[
[11110],
[11010],
[11000],
[00000]
]


//O(n^2) solution since we need to iterate over a 2-D array
let island = 0

for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        if (isIsland(array, i, j)) {
            island++
        }
    }
}

//To check if it's an island, check if it's in bounds first
//Then, mark it as 'checked' by making it a 0
//Finally, check whether it's neighbors are 1's as well, making them as 0's if so
//If everything ends up as true, then it is an island
function isIsland(grid, i, j) {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[i].length || grid[i][j] === 0) {
        return false 
    }

    grid[i][j] = 0

    isIsland(grid, i + 1, j)
    isIsland(grid, i - 1, j)
    isIsland(grid, i, j + 1)
    isIsland(grid, i, j - 1)

    return true
}

return island