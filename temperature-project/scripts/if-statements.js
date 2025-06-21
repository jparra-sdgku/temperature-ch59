//if - else statemen

let age = 30;

if (age > 21) {
    console.log("You are an adult");
}
else {
    console.log("You are underage");

}
/*
age=prompt("Enter your age");
if(age < 13){
    console.log("youre a child");
}
else if (age < 21) {
    console.log("youre a teenager");
    
}
else if (age < 64) {
    console.log("you are an adult");
    
}
else{
    console.log("you are a senior");
    
}*/

//Challenger 2:
//ask for the traffic light color
//Green yellow or red an tekk the bike what to do--- Go,Slow down stop

/*
let color = prompt("Waht color is the light").toUpperCase
console.log(color);

if (color == "GREEN"){
    console.log("go");
}
else if (color =="YELLOW") {
    console.log("Slow Down");
}
else if (color == "RED"){
    console.log("Stop");
    
}else{
    console.log("invalid color");
    
}
    */

function ticketCalculator(age) {
    let ticket = 0;
    age = prompt("Enter your age");

    if (age < 12) {
        ticket = 5
    } else if (age >= 12 && age <= 18) {
        ticket = 8;
    } else {
        ticket = 10
    }

    return (`The price is ${ticket}`);
}
let answer = ticketCalculator(13);
console.log(answer);


function weatherOutfit() {
    let tmp = prompt("Enter the temperature")
    let outfit = "";
    let p = document.getElementById("outfit");
    if (tmp < 12) {
        outfit = "Jacket";
    } else if (tmp >= 12 && tmp <= 18) {
        outfit = "sweater"
    } else {
        outfit = "t-shirt"
    }
    p.innerHTML = "you should wear: " + outfit;
}

//switch case