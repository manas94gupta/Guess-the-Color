var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init()
{
    setupModeButtons();
    setupSquares();
    reset();
}

function setupModeButtons()
{
    for (var i = 0; i<modeButtons.length; i++)
    {
        modeButtons[i].addEventListener("click", function()
        {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");

            // this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            if(this.textContent === "Easy")
            {
                numSquares = 3;
            }
            else
            {
                numSquares = 6;
            }
            reset();
        });
    }
}

function reset()
{
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a random color from array
    pickedColor = pickColor();
    // change colorDisplay to match pickedColor
    colorDisplay.textContent = pickedColor;
    // change messageDisplay content to empty
    messageDisplay.textContent = "";
    // change resetButton text content to new color
    resetButton.textContent = "New Colors";
    // change color of all the squares
    for (var i = 0; i<squares.length; i++)
    {
        if(colors[i])
        {
            squares[i].style.display = "inline-block";
            squares[i].style.background = colors[i];
        }
        else
        {
            squares[i].style.display = "none";
        }
    }
    h1.style.background = "steelblue";
}

// easyBtn.addEventListener("click", function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i<squares.length; i++)
//     {
//         if(colors[i])
//         {
//             squares[i].style.background = colors[i];
//         }
//         else
//         {
//             squares[i].style.display = "none";
//         }
//     }
//     h1.style.background = "steelblue";
// });
//
// hardBtn.addEventListener("click", function(){
//     hardBtn.classList.add("selected");
//     easyBtn.classList.remove("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (var i = 0; i<squares.length; i++)
//     {
//         squares[i].style.background = colors[i];
//         squares[i].style.display = "block";
//     }
//     h1.style.background = "steelblue";
// });

resetButton.addEventListener("click", function()
{
    reset();
    // // generate all new colors
    // colors = generateRandomColors(numSquares);
    // // pick a random color from array
    // pickedColor = pickColor();
    // // change colorDisplay to match pickedColor
    // colorDisplay.textContent = pickedColor;
    // // change messageDisplay content to empty
    // messageDisplay.textContent = "";
    // // change resetButton text content to new color
    // this.textContent = "New Colors";
    // // change color of all the squares
    // for (var i = 0; i<squares.length; i++)
    // {
    //     squares[i].style.background = colors[i];
    // }
    // h1.style.background = "steelblue";
});

function setupSquares()
{
    for (var i = 0; i<squares.length; i++)
    {
        // add initial colors to squares
        squares[i].style.background = colors[i];
        // add click event listener to squares
        squares[i].addEventListener("click", function(){
            // grab the color of the clicked square
            var clickedColor = this.style.background;
            // compare the clicked color to the picked color
            if (clickedColor === pickedColor)
            {
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.background = clickedColor;
                resetButton.textContent = "Play Again!";
            }
            else
            {
                this.style.background = "#232323";
                messageDisplay.textContent = "Try Again!"
            }
        });
    }
}

function changeColors(color)
{
    // loop through all squares
    for (var i = 0; i<squares.length; i++)
    {
        // change color to the given color
        squares[i].style.background = color;
    }
}

function pickColor()
{
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num)
{
    // make an array
    var arr = [];

    // add num random colors to array
    for (var i = 0; i<num; i++)
    {
        // get random color and push into array
        arr.push(randomColor());
    }

    // return array
    return arr;
}

function randomColor()
{
    // pick a 'red' from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a 'green' from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a 'blue' from 0 - 255
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}
