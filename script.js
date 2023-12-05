document.querySelector('form').addEventListener('submit', checkGrade);


const A = 90;
const B = 80;
const C = 70;
const D = 60;
const F = 0;

function checkGrade(e){
    e.preventDefault();
    let myGrade = document.querySelector('input').value;
    
    let message = '<ul>'

    if (myGrade >= A) {
        message += `<li> your grade is a A </li>`;
    }

    else if (myGrade >= B ) {
        message += `<li> your grade is a B </li>`;
    }
    else if (myGrade >= C) {
        message += `<li> your grade is a C </li>`;
    } 
    else if (myGrade >= D) {
        message += `<li> your grade is a D </li>`;
    } 
    else if (myGrade >= F) {
        message += `<li> your grade is a F </li>`;
    } 

message +=`<ul>`
document.querySelector(`#output`).innerHTML = message;
}
document.querySelector(`form`).addEventListener("submit", checkGrade);