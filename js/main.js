let userInput = 0;
let userSum = 0;
let i = 0;
let average = 0;



// Listen for a form submission
const mainForm = document.querySelector(".form-two");
mainForm.addEventListener("submit", (event) => {
    // Prevent the page from refreshing
    event.preventDefault();
    /*console.log("im in!");*/
    //
    //
    userInput = Number(document.querySelector("#numOne").value);
    //
    userSum = userInput + userSum;
    i++;
    average = userSum / i;

    const input = document.querySelector(".output-container .input p");
    input.innerHTML = `Current Input is ${userInput}`;
    const sum = document.querySelector(".output-container .sum p");
    sum.innerHTML = `Current Total is ${userSum}`;
    const curavg = document.querySelector(".output-container .average p");
    curavg.innerHTML = `Current Average is ${average}`;
    const entries = document.querySelector(".output-container .entries p");
    entries.innerHTML = `Current number of entries is ${i}`;

    if (isNaN(userInput)) {
        alert("NOPE!");
    } else {
        userSum = userInput + userSum;
        i++;
        average = userSum / i;
    }

    console.log("Variables userInput =" + userInput);
    console.log("Varialbes userSum =" + userSum);
    console.log("Variables i / entries" + i);
    console.log("Variables average" + average);

    mainForm.reset();
})
