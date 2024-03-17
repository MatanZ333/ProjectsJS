//Initial References
const countValue = document.getElementById('counter');
const colorPart = document.querySelectorAll('.color-part');
const container = document.querySelector('.container');
const startButton = document.querySelector('#start');
const result = document.querySelector('#result');
const wrapper = document.querySelector('.wrapper');

//Mapping Colors By Creating Colors Object
//Create A Object To map the colors
const colors = {
    color1: {
        current: "#027802",
        new: "#11e711",
    },
    color2: {
        current: "#950303",
        new: "#fd2a2a",
    },
    color3: {
        current: "#01018a",
        new: "#2062fc",
    },
    color4: {
        current: "#919102",
        new: "#fafa18",
    },
};

let randomColors = [];
let pathGeneratorBool = false;
let count, clickCount = 0;

//Function to start the game
startButton.addEventListener('click', () => {
    count = 0;
    clickCount = 0;
    randomColors = [];
    pathGeneratorBool = false;
    wrapper.classList.remove("hide");
    container.classList.add("hide");
    pathGenerate();
});

//Function to decide the sequences. This creates the sequences the player will deal with
const pathGenerate = () => {
    randomColors.push(generateRandomValue(colors)); //Call this function and passes the 'colors' object from above to the function as an argument. Then selecting randomly color from the object. Eventually it is added to the 'randomColors' array by using push
    count = randomColors.length;
    pathGeneratorBool = true;
    pathDecide(count);
}

//Function to get a value from object
const generateRandomValue = (obj) => {
    let arr = Object.keys(obj);
    return arr[Math.floor(Math.random() * arr.length)];
};

//Function to play the sequence 
const pathDecide = async (count) => {
    countValue.innerText = count;
    for (let i of randomColors) {
        let currentColor = document.querySelector(`.${i}`);
        await delay(500);
        currentColor.style.backgroundColor = `${colors[i]["new"]}`;
        await delay(600);
        currentColor.style.backgroundColor = `${colors[i]["current"]}`;
        await delay(600);
    }
    pathGeneratorBool = false;
};

//Delay for blink effect
async function delay(time) {
    return await new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

//When user click on the colors
colorPart.forEach((element) => {
    element.addEventListener("click", async (e) => { //The 'e' is getting event object
        //If user clicks the same color then next level 
        if (pathGeneratorBool) {
            return false;
        }

        if (e.target.classList[0] == randomColors[clickCount]) { //The 'e.target' is a event object
            e.target.style.backgroundColor = `${colors[randomColors[clickCount]]["new"]}`;
            await delay(500);
            e.target.style.backgroundColor = `${colors[randomColors[clickCount]]["current"]}`;

            //User Click
            const newLocal = clickCount += 1;

            //New Level if number of valid clicks == count
            if (clickCount == count) { //if the player clicked correctly on all the sequences
                clickCount = 0;
                pathGenerate();
            }
        }
        else {
            lose();
        }
    });
});

//Function when player executes wrong sequence
const lose = () => {
    result.innerHTML = `<span> Your Score: </span> ${count}`;
    result.classList.remove("hide");
    container.classList.remove("hide");
    wrapper.classList.add("hide");
    startButton.innerText = "Play Again";
    startButton.classList.remove("hide");
};      