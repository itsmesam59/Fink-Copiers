// Slider 1

let cnt = 0;

let x = document.getElementsByClassName("slidimg");
let y = document.getElementById('slidimg1')

let btn1 = document.getElementById('slid11');
let btn2 = document.getElementById('slid14');

let r1 = document.getElementById('slid21');
r1.style.backgroundColor="black";

let r2 = document.getElementById('slid22');
let r3 = document.getElementById('slid23');
let r4 = document.getElementById('slid24');

btn2.onclick = () =>{
    cnt++;
    console.log(cnt);
    if (cnt == 1) {
        y.style.display="none";
        x[2].style.display="none";
        x[1].style.display="none";
        x[0].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="black";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
    if (cnt == 2) {
        y.style.display="none";
        x[0].style.display="none";
        x[2].style.display="none";
        x[1].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="black";
        r4.style.backgroundColor="";
    }
    if (cnt == 3) {
        y.style.display="none";
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="black";
    }
    if (cnt == 4) {
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="none";
        y.style.display="block";
        cnt = 0;
        r1.style.backgroundColor="black";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
}

btn1.onclick = () => {
    cnt--;
    if (cnt == -1) {
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="block";
        y.style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="black";
    }
    if (cnt == -2) {
        y.style.display="none";
        x[1].style.display="block";
        x[0].style.display="none";
        x[2].style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="black";
        r4.style.backgroundColor="";
    }
    if (cnt == -3) {
        y.style.display="none";
        x[2].style.display="none";
        x[0].style.display="block";
        x[1].style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="black";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
    if (cnt == -4) {
        x[1].style.display="none";
        x[2].style.display="none";
        y.style.display="block";
        x[0].style.display="none";
        r1.style.backgroundColor="black";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
        cnt = 0;
    }
}

r1.onclick = () => {
    y.style.display="block"
    x[0].style.display="none";
    x[1].style.display="none";
    x[2].style.display="none";
    cnt = 0;
    r1.style.backgroundColor="black";
    r2.style.backgroundColor="";
    r3.style.backgroundColor="";
    r4.style.backgroundColor="";
}
r2.onclick = () => {
    x[0].style.display="block";
    x[1].style.display="none";
    x[2].style.display="none";
    y.style.display="none";
    cnt = 1;
    r2.style.backgroundColor="black";
    r1.style.backgroundColor="";
    r3.style.backgroundColor="";
    r4.style.backgroundColor="";

}
r3.onclick = () => {
    x[0].style.display="none";
    x[1].style.display="block";
    x[2].style.display="none";
    y.style.display="none";
    cnt = 2;
    r2.style.backgroundColor="";
    r1.style.backgroundColor="";
    r3.style.backgroundColor="black";
    r4.style.backgroundColor="";
}
r4.onclick = () => {
    x[0].style.display="none";
    x[1].style.display="none";
    x[2].style.display="block";
    y.style.display="none";
    cnt = 3
    r2.style.backgroundColor="";
    r1.style.backgroundColor="";
    r3.style.backgroundColor="";
    r4.style.backgroundColor="black";
}