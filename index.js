function populateAdjacencyList(vertices) {
  let adjacencyArr = [];
  vertices.forEach(([x, y]) => {
    let index = adjacencyArr.length;
    adjacencyArr[index] = [
      [x + 2, y + 1],
      [x + 2, y - 1],
      [x - 2, y + 1],
      [x - 2, y - 1],
      [x - 1, y + 2],
      [x - 1, y - 2],
      [x + 1, y + 2],
      [x + 1, y - 2],
    ].filter((coordinate) => isValidPosition(coordinate));
  });
  return adjacencyArr;
}

function isValidPosition([x, y]) {
  return x <= 7 && x >= 0 && y <= 7 && y >= 0;
}

function knightMoves([startx, starty], [x, y]) {
  if (!(isValidPosition([startx, starty]) && isValidPosition([x, y]))) {
    console.log("Please enter valid start and end coordinates");
  } else {
    let queue = [[startx, starty]];
    while (queue[0][0] !== x || queue[0][1] !== y) {
      let current = queue.shift();
      adjArr[findIndex(current)].forEach((coordinate) => {
        queue.push(coordinate.concat(current));
      });
    }
    printMoveNumber(findPathArr(queue[0]));
    findPathArr(queue[0]).forEach((coordinate) => {
      console.log(coordinate);
    });
  }
}

function printMoveNumber(arr) {
  console.log(` You made it in ${arr.length - 1} moves!  Here's your path:`);
}

function findPathArr(arr) {
  index = 0;
  return arr.reduce((newArr, ele) => {
    if (index % 2 === 0) {
      newArr.unshift([ele, arr[index + 1]]);
    }
    index += 1;
    return newArr;
  }, []);
}

function createVerticeGrid() {
  let verticeGrid = [];
  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
      verticeGrid.push([i, j]);
    }
  }
  return verticeGrid;
}

function findIndex([x, y]) {
  let counter = 0;
  let index;
  vertices.forEach(([a, b]) => {
    if (a == x && b == y) {
      index = counter;
    }
    counter += 1;
  });
  return index;
}

const vertices = createVerticeGrid();
let adjArr = populateAdjacencyList(createVerticeGrid());
knightMoves([4, 0], [7, 0]);
