const text = "Explore AI's possibilities at AI INLINK! Stay updated on the latest AI tools here. Connect and innovate with us!";
let index = 0;
const speed = 100; // Speed of the animation in milliseconds

function typeWriter() {
    if (index < text.length) {
        document.getElementById("animatedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;