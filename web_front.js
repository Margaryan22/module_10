/*const big_btn = document.querySelector(".first_text");

function changeBorderColor() {
    big_btn.style.borderColor = "white";

    big_btn.removeEventListener("click", changeBorderColor);
    console.log("click");
}

big_btn.addEventListener("click", changeBorderColor);*/
/*const str = 'reverse';

const reverse = str.split('').reverse().join('');
console.log(reverse);
let a = Math.random() * (100 - 1);
console.log(a);*/
let a = prompt();
console.log(a);
let b = +a;
console.log(typeof(b));
if (isNaN(b) == true) {
    console.log("you are wrong");
    exit();
}
if (b % 2 == 0) { console.log("четное"); } else { console.log("нечетное"); }
if (typeof(b) == !"number") {
    console.log("you are wrong");
};