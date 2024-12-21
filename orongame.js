
const name1 = document.getElementById("name");

const addName = () => {
    console.log(name1.value);
    localStorage.setItem("name", name1.value);
}


let lable1 = document.getElementById("lable");
let count = 0;
let onclicks = 0;

const submitEasy = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            if (inputE.value == 8) { count++; }
            lable1.innerHTML = "2. 5-3=?";
            const ex1 = document.getElementById("ex1");
            ex1.innerText = "3+5    8    ${inputE.value}    "
            inputE.value = "";
            break;

        case 2:
            if (inputE.value == 2) { count++; }
            lable1.innerHTML = "3. 6+3=?";
            inputE.value = "";
            break;

        case 3:
            if (inputE.value == 9) { count++; }
            lable1.innerHTML = "4. 8-2=?";
            inputE.value = "";
            break;

        case 4:
            if (inputE.value == 6) { count++; }
            lable1.innerHTML = "5. 3*2=?";
            inputE.value = "";
            break;

        case 5:
            if (inputE.value == 6) { count++; }
            lable1.innerHTML = "6. 7/7=?";
            inputE.value = "";
            break;

        case 6:
            if (inputE.value == 1) { count++; }
            lable1.innerHTML = "7. 4*2=?";
            inputE.value = "";
            break;

        case 7:
            if (inputE.value == 8) { count++; }
            lable1.innerHTML = "8. 9/3=?";
            inputE.value = "";
            break;

        case 8:
            if (inputE.value == 3) { count++; }
            lable1.innerHTML = "9. 9-4=?";
            inputE.value = "";
            break;


        case 9:
            if (inputE.value == 5) { count++; }
            lable1.innerHTML = "10. 2+7=?";
            inputE.value = "";
            break;

        case 10:
            if (inputE.value == 9) { count++; }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreE", count);

}



const submitMedium = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            if (inputE.value == 78) { count++; }
            lable1.innerHTML = "2. 25-15=?";
            inputE.value = "";
            break;

        case 2:
            if (inputE.value == 10) { count++; }
            lable1.innerHTML = "3. 67+17=?";
            inputE.value = "";
            break;

        case 3:
            if (inputE.value == 84) { count++; }
            lable1.innerHTML = "4. 82-21=?";
            inputE.value = "";
            break;

        case 4:
            if (inputE.value == 61) { count++; }
            lable1.innerHTML = "5. 30*3=?";
            inputE.value = "";
            break;

        case 5:
            if (inputE.value == 90) { count++; }
            lable1.innerHTML = "6. 64/8=?";
            inputE.value = "";
            break;

        case 6:
            if (inputE.value == 8) { count++; }
            lable1.innerHTML = "7. 43*2=?";
            inputE.value = "";
            break;

        case 7:
            if (inputE.value == 86) { count++; }
            lable1.innerHTML = "8. 93/3=?";
            inputE.value = "";
            break;

        case 8:
            if (inputE.value == 31) { count++; }
            lable1.innerHTML = "9. 91-45=?";
            inputE.value = "";
            break;


        case 9:
            if (inputE.value == 46) { count++; }
            lable1.innerHTML = "10. 28+67=?";
            inputE.value = "";
            break;

        case 10:
            if (inputE.value == 95) { count++; }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreM", count);

}




const submitHard = () => {
    onclicks++;
    const inputE = document.getElementById("answer");

    switch (onclicks) {
        case 1:
            if (inputE.value == 903) { count++; }
            lable1.innerHTML = "2. 502-37=?";
            inputE.value = "";
            break;

        case 2:
            if (inputE.value == 465) { count++; }
            lable1.innerHTML = "3. 609-327=?";
            inputE.value = "";
            break;

        case 3:
            if (inputE.value == 282) { count++; }
            lable1.innerHTML = "4. 82*3=?";
            inputE.value = "";
            break;

        case 4:
            if (inputE.value == 246) { count++; }
            lable1.innerHTML = "5. 303/3=?";
            inputE.value = "";
            break;

        case 5:
            if (inputE.value == 101) { count++; }
            lable1.innerHTML = "6. 747/3=?";
            inputE.value = "";
            break;

        case 6:
            if (inputE.value == 249) { count++; }
            lable1.innerHTML = "7. 43*15=?";
            inputE.value = "";
            break;

        case 7:
            if (inputE.value == 645) { count++; }
            lable1.innerHTML = "8. 903/3=?";
            inputE.value = "";
            break;

        case 8:
            if (inputE.value == 301) { count++; }
            lable1.innerHTML = "9. 945-423=?";
            inputE.value = "";
            break;


        case 9:
            if (inputE.value == 522) { count++; }
            lable1.innerHTML = "10. 207*4=?";
            inputE.value = "";
            break;

        case 10:
            if (inputE.value == 828) { count++; }
            alert("you have reached " + count + " points");
            const table = document.getElementById("table");
            table.style.display = "block";
            break;

        default:
            break;
    }

    console.log(count);
    localStorage.setItem("scoreH", count);

}



const selection = () => {
    const value = document.getElementById("level").value;
    console.log(value);

    const input = document.getElementById("answer");
    input.style.display = "block";

    const submit = document.getElementById("button");
    submit.style.display = "block";

    if (value === "easy") {
        const h2 = document.getElementById("h2");
        h2.innerText = "Level Easy";

        lable1.innerText = "1. 3+5=?";

        submit.onclick = null;
        submit.onclick = submitEasy;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Easy";

    }


    else if (value === "medium") {

        const h2 = document.getElementById("h2");
        h2.innerText = "Level Medium";

        lable1.innerText = "1. 14+64=?";

        submit.onclick = submitMedium;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Medium";

    }
    else if (value === "hard") {

        const h2 = document.getElementById("h2");
        h2.innerText = "Level Hard";

        lable1.innerText = "1. 351+552=?";

        submit.onclick = submitHard;

        const theader = document.getElementById("theader");
        theader.innerText = "Table Score Level Hard";

    }

}


