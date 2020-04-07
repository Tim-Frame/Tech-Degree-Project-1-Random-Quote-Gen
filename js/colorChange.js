
//The array below is an array of 5 color vaules
let quoteColor = ['#FFD6DA', '#FFC6D0', '#E1F7E7', '#D1EAF5', '#C3D6F2'];
/* The function below declares a new variable. The variable stores a randomly
number generator. That generates a random number thats passed to the colorPick vraible.
The colorPick variable stores the random number and matches it with the statements
number index from the array. That array item is then passed back to the function in a return*/
function selectBackgroundColor(array1){
  let randomColorPicker = Math.floor(Math.random() * array1.length);
  let colorPick = array1[randomColorPicker];
  return colorPick
}

/*The function below calls the selectBackgroundColor function and stores
the content in the varaible newBackground. That is then passed to back to the
function in a return statement. */
function setColor(){
  let newBackground = selectBackgroundColor(quoteColor);
  return document.body.style.backgroundColor = newBackground
}

/* The function below  is used to randomly set the background color at the
same time the quote is changing. It is doing this by using the same
setInterval method as in the quoteChanger function located in the quoteChange.js file*/

function quoteTimer() {
  let timer1 = setInterval(setColor, 10000);
}
quoteTimer();
