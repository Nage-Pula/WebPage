console.log("Hello, World!");

const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");

btn.addEventListener("click", function () {
  console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close Form";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a Fact";
  }
});



let votesInteresting = 5;
const text = "This is a fact about React";
let votesMindblowing = 7;
let votesFalse = 4;
/*
votesInteresting = votesInteresting + 1;
console.log(votesInteresting);
let totalUpvotes = votesInteresting + votesMindblowing;
console.log("upvotes: " ,totalUpvotes);

const isCorrect = votesFalse < totalUpvotes;
console.log("isCorrect: ", isCorrect);*/

function calcFactAge(year){
    const currentYear= new Date().getFullYear();
    const age=currentYear-year;
    return age;
}
const age1=calcFactAge(2090);
console.log(age1);
console.log(votesInteresting===votesMindblowing);

// Comparison Operators
if (votesInteresting===votesMindblowing){
    alert('this fact is really interesting and mindblowing');//alert is a dialog box that pops up
}else if(votesInteresting>votesMindblowing){
    console.log("interesting Fact..!")
}
else{
    console.log('something else');
}

//falsy vaues: 0,',null, undefined
if(votesMindblowing){
    console.log("mindblowing fact!!!");
}else{
    console.log("not so special")
}
