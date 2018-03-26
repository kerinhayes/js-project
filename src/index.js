const Sorts = require('./sorts.js');
const Visuals = require('./visuals.js');
const Background = require('./background.js');


document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("window-canvas");
  const context = canvas.getContext("2d");
  const vis = new Visuals(context);


  const mergecan = document.getElementById("merge-canvas");
  const mergeCon = mergecan.getContext("2d");
  const mergeVis = new Visuals(mergeCon);

  const bubCan = document.getElementById("bubble-canvas");
  const bubCon = bubCan.getContext("2d");
  const bubVis = new Visuals(bubCon);

  const selCan = document.getElementById("selection-canvas");
  const selCon = selCan.getContext("2d");
  const selVis = new Visuals(selCon);

  const backCan = document.getElementById("background-canvas");
  const backContext = backCan.getContext("2d");
  const background = new Background(backContext);

  const insertCan = document.getElementById("insertion-canvas");
  const insertCon = insertCan.getContext("2d");
  const insertVis = new Visuals(insertCon);

  const mergeButton = document.getElementById("merge");
    mergeButton.addEventListener("click", () =>
    mergeVis.goDraw(Sorts.mergeSortBottomUp));

  const bubbleButton = document.getElementById("bubble");
    bubbleButton.addEventListener("click", () =>
    bubVis.goDraw(Sorts.bubbleSort));

  const selectionButton = document.getElementById("selection");
    selectionButton.addEventListener("click", () =>
    selVis.goDraw(Sorts.selectionSort));

  const quickButton = document.getElementById("quick");
    quickButton.addEventListener("click", () =>
    vis.goDraw(Sorts.qsort));

  const insertButton = document.getElementById('insert');
    insertButton.addEventListener("click", () =>
    insertVis.goDraw(Sorts.insertionSort));


    const shuffleButton = document.getElementById("shuffle");
      shuffleButton.addEventListener("click", () => {
        bubVis.shuffleArray(bubVis.nums);
        selVis.shuffleArray(selVis.nums);
        mergeVis.shuffleArray(mergeVis.nums);
        vis.shuffleArray(vis.nums);
        insertVis.shuffleArray(insertVis.nums);

      });

    const allGo = document.getElementById('start-all');
      allGo.addEventListener('click', () => {
        setTimeout(bubVis.goDraw(Sorts.bubbleSort), 10);
        setTimeout(selVis.goDraw(Sorts.selectionSort), 30);
        setTimeout(mergeVis.goDraw(Sorts.mergeSortBottomUp), 20);
        setTimeout(vis.goDraw(Sorts.qsort), 5);
        setTimeout(insertVis.goDraw(Sorts.insertionSort), 15);

      });





});
