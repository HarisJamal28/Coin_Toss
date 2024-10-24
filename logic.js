// var Coin = document.getElementById('Toss');
var Faces = ['tails.png','heads.png'];
var coin = document.getElementById('coin');
var head = document.getElementById('Heads');
var tails = document.getElementById('Tails');
var table = document.getElementById('data');
let counter = 0;


var i = 0;
var rand=0;
let timer=0;

var j = 0;
var k = 0;

function toss(){
        let indH = false;
        let indT = false;
    timer = setInterval(Spin=>{
        rand = Math.random()*100;
        rand = Math.floor(rand);
        if(i>1){
            i=0;
        }else{
            coin.src = `${Faces[i]}`;
            if(i==0){
                console.log('Heads');
                console.log(`Current i = ${i}`);
            }
            if(i==1){
                console.log('Tails');
                console.log(`Current i = ${i}`);
            }
            i++;
        }
    },150);

    setTimeout(()=>{
        clearInterval(timer);
        counter++;
        if(Math.floor(rand)%2 == 0){
            coin.src = 'heads.png';
            head.innerHTML = ++j;
            indH = true;
            indT = false;
        }else{
            coin.src = 'tails.png';
            tails.innerHTML = ++k;
            indH = false;
            indT = true;
        }
        console.log('CLEAR');        
        console.log(i);        
        console.log(rand);
    },2000);

    let datarow = document.createElement('tr');
    let datadata = document.createElement('td');
    datadata.innerText = counter;
    datarow.appendChild(datadata);
    let z;
    let countdown = 0;
    z = setInterval(()=>{
        if(countdown==3){
            clearInterval(z);
        }else{
        let datadata = document.createElement('td');
        // datadata.innerText = 0;
        if(countdown==0){
            if(indH == true){
                let imagine = document.createElement('img');
                imagine.style.height = "50px";
                imagine.style.width = "50px";
                imagine.src = "heads.png";
                datadata.appendChild(imagine);
            }else{
                let imagine = document.createElement('img');
                imagine.style.height = "50px";
                imagine.style.width = "50px";
                imagine.src = "tails.png";
                datadata.appendChild(imagine);
            }
        }
        if(countdown==1){
            datadata.style.backgroundColor = 'green';
            if(indH == true){
                datadata.innerText = 'True';
            }else{
                datadata.innerText = 'False';
                datadata.style.backgroundColor = 'red';
            }
        }
        if(countdown==2){
            datadata.style.backgroundColor = 'green';
            if(indT == true){
                datadata.innerText = 'True';
            }else{
                datadata.innerText = 'False';
                datadata.style.backgroundColor = 'red';
            }
        }
        datarow.appendChild(datadata);
        countdown++;
        }
    },2000);
    
    table.appendChild(datarow);
    console.log(`Counter = ${counter}`);

    
}






let flag = true;

function addData(){
    let indH = false;
    let indT = false;
    let stopper;
    stopper = setInterval(()=>{
        rand = Math.random()*100;
        rand = Math.floor(rand);
    },1000);

    setTimeout(()=>{
        clearInterval(stopper);
        if(Math.floor(rand)%2 == 0){
            coin.src = 'heads.png';
            head.innerHTML = ++j;
            console.log(`Random Value = ${rand} & Result = HEADS`);
            indH = true;
            indT = false;
        }else{
            coin.src = 'tails.png';
            tails.innerHTML = ++k;
            console.log(`Random Value = ${rand} & Result = TAILS`);
            indH = false;
            indT = true;
        }
    },2000);
    let datarow = document.createElement('tr');
    let datadata = document.createElement('td');
    datadata.innerText = counter;
    datarow.appendChild(datadata);
    let z;
    let countdown = 0;
    
    z = setInterval(()=>{
        if(countdown==3){
            clearInterval(z);
        }else{
        let datadata = document.createElement('td');
        // counter++;
        // datadata.innerText = 0;
        if(countdown==0){
            if(indH == true){
                let imagine = document.createElement('img');
                imagine.style.height = "50px";
                imagine.style.width = "50px";
                imagine.src = "heads.png";
                datadata.appendChild(imagine);
            }else{
                let imagine = document.createElement('img');
                imagine.style.height = "50px";
                imagine.style.width = "50px";
                imagine.src = "tails.png";
                datadata.appendChild(imagine);
            }
        }
        if(countdown==1){
            datadata.style.backgroundColor = 'green';
            if(indH == true){
                datadata.innerText = 'True';
            }else{
                datadata.innerText = 'False';
                datadata.style.backgroundColor = 'red';
            }
        }
        if(countdown==2){
            datadata.style.backgroundColor = 'green';
            if(indT == true){
                datadata.innerText = 'True';
            }else{
                datadata.innerText = 'False';
                datadata.style.backgroundColor = 'red';
            }
        }
        datarow.appendChild(datadata);
        countdown++;
        }
    },2000);
    
    table.appendChild(datarow);
    console.log(`Counter = ${counter}`);
}


function addTen(){
    for(let a=0;a<10;a++){
        counter++;
        addData();
    }
}

function addHun(){
    for(let a=0;a<100;a++){
        counter++;
        addData();
    }
}

function addThou(){
    for(let a=0;a<1000;a++){
        counter++;
        addData();
    }
}


// function makeItSpin(){
//     timer = setInterval(Spin=>{
//         rand = Math.random()*100;
//         rand = Math.floor(rand);
//         if(i>1){
//             i=0;
//         }else{
//             coin.src = `${Faces[i]}`;
//             if(i==0){
//                 console.log('Heads');
//                 console.log(`Current i = ${i}`);
//             }
//             if(i==1){
//                 console.log('Tails');
//                 console.log(`Current i = ${i}`);
//             }
//             i++;
//         }
//     },150);

//     setTimeout(()=>{
//         clearInterval(timer);
//     },3000);
// }


