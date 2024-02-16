// Hero Section slider

let count1 = 0;

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
count1++;
    console.log(cnt);
    if (count1 == 1) {
        y.style.display="none";
        x[2].style.display="none";
        x[1].style.display="none";
        x[0].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="black";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
    if (count1 == 2) {
        y.style.display="none";
        x[0].style.display="none";
        x[2].style.display="none";
        x[1].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="black";
        r4.style.backgroundColor="";
    }
    if (count1 == 3) {
        y.style.display="none";
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="block";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="black";
    }
    if (count1 == 4) {
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="none";
        y.style.display="block";
        count1 = 0;
        r1.style.backgroundColor="black";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
}

btn1.onclick = () => {
    count1--;
    if (count1 == -1) {
        x[0].style.display="none";
        x[1].style.display="none";
        x[2].style.display="block";
        y.style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="black";
    }
    if (count1 == -2) {
        y.style.display="none";
        x[1].style.display="block";
        x[0].style.display="none";
        x[2].style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="black";
        r4.style.backgroundColor="";
    }
    if (count1 == -3) {
        y.style.display="none";
        x[2].style.display="none";
        x[0].style.display="block";
        x[1].style.display="none";
        r1.style.backgroundColor="";
        r2.style.backgroundColor="black";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
    }
    if (count1 == -4) {
        x[1].style.display="none";
        x[2].style.display="none";
        y.style.display="block";
        x[0].style.display="none";
        r1.style.backgroundColor="black";
        r2.style.backgroundColor="";
        r3.style.backgroundColor="";
        r4.style.backgroundColor="";
        count1 = 0;
    }
}

r1.onclick = () => {
    y.style.display="block"
    x[0].style.display="none";
    x[1].style.display="none";
    x[2].style.display="none";
    count1 = 0;
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
    count1 = 1;
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
    count1 = 2;
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
    count1 = 3
    r2.style.backgroundColor="";
    r1.style.backgroundColor="";
    r3.style.backgroundColor="";
    r4.style.backgroundColor="black";
}

// Happy customer slider

let count2 = 0;

let btn3 = document.getElementById('slider2-lbtn');
let btn4 = document.getElementById('slider2-rbtn');

let x1 = document.getElementById('slider2-main1');
let x2 = document.getElementById('slider2-main2');
let x3 = document.getElementById('slider2-main3');

let y1 = document.getElementById('slider2-pagenav');

btn4.onclick = () =>{
    count2++;
    if (count2 == 1) {
        x1.style.display="none";
        x2.style.display="flex";
        x3.style.display="none";
        y1.innerText="2/3";
    }
    if (count2 == 2) {
        x1.style.display="none";
        x2.style.display="none";
        x3.style.display="flex";
        y1.innerText="3/3";
    }
    if (count2 == 3) {
        x1.style.display="flex";
        x2.style.display="none";
        x3.style.display="none";
        y1.innerText="1/3";
        count2 = 0;
    }
}

btn3.onclick = () =>{
    count2--;
    if (count2 == -1) {
        x1.style.display="none";
        x2.style.display="none";
        x3.style.display="flex";
        y1.innerText="3/3";
    }
    if (count2 == -2) {
        x3.style.display="none";
        x2.style.display="flex";
        x1.style.display="none";
        y1.innerText="2/3";
    }
    if (count2 == -3) {
        x2.style.display="none";
        x1.style.display="flex";
        x3.style.display="none";
        y1.innerText="1/3";
        count2 = 0;
    }
}



