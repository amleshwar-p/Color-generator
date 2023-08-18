const callColor = () => {
    //  Hex code

    const randomNumber = Math.floor(Math.random() * 16777215);

    const randomCode = "#" + randomNumber.toString(16);
    console.log(randomCode);

    // changes the color of main div in bg
    document.getElementById("page").style.backgroundColor = randomCode;

    // Changes text of color showing above button
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode);
}

// event call

document.getElementById("btn").addEventListener("click", callColor);



// initial call
callColor();