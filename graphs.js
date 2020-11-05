const adjacencyGraph = [
  [0,1,1,1,0],
  [0,0,1,0,0],
  [1,1,0,0,0],
  [0,0,0,1,0],
  [0,1,0,0,0],
];

 const bfs = (graph, root) => {
   if (!graph || (!root && root !== 0)) {
     return null;
   }

   const nodesLength = {};

   for (let i = 0; i < graph.length; i++) {
     nodesLength[i] = Infinity;
   }

   nodesLength[root] = 0;

   const queue = [root];
   let current;

   while (queue.length) {
     current = queue.shift();

     const connectedToCurrent = graph[current];
     const adjacentIndexes = [];
     let indexOfAdjacent = connectedToCurrent.indexOf(1);
     
     while (indexOfAdjacent !== -1) {
      adjacentIndexes.push(indexOfAdjacent);
      indexOfAdjacent = connectedToCurrent.indexOf(1, indexOfAdjacent + 1);
     }

     for (let x = 0; x < adjacentIndexes.length; x++) {
       if (nodesLength[adjacentIndexes[x]] === Infinity) {
         nodesLength[adjacentIndexes[x]] = nodesLength[current] + 1;
         queue.push(adjacentIndexes[x]);
       }
     }
   }
   return nodesLength;
 }

 console.log(bfs(adjacencyGraph, 4));