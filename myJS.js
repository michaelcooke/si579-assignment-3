/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/

document.getElementById('color-block').addEventListener('click', changeColor)

function changeColor() {
  function colorToHex(color) {
    var hexadecimal = color.toString(16);
    return hexadecimal.length == 1 ? '0' + hexadecimal : hexadecimal
  }
    
  function rgbToHex(rgb) {
    rgb = rgb.slice(4, rgb.length-1).split(', ')
    return '#' + colorToHex(parseInt(rgb[0])) + colorToHex(parseInt(rgb[1])) + colorToHex(parseInt(rgb[2]))
  }
  
  let color = rgbToHex(getComputedStyle(document.getElementById('color-block')).backgroundColor)

  if (color === '#f08080') {
    document.getElementById('color-block').style.backgroundColor = '#0088CC'
    document.getElementById('color-name').textContent = '#0088CC' 
  }
  else {
    document.getElementById('color-block').style.backgroundColor = '#F08080'
    document.getElementById('color-name').textContent = '#F08080' 
  }
}


/*
* For excercise 2, you need to write an event handler for the button id 'convertbtn'
* on mouse click. For best practice use addEventListener.
*
*/

document.getElementById('convertbtn').addEventListener('click', convertTemp)

/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/

function convertTemp() {
  document.getElementById('c-output').textContent = (document.getElementById('f-input').value - 32) * 5/9
}


