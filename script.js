let texte = document.querySelector("#texte");
let randomBtn = document.querySelector("#btn");


/*
$.get("https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1", (fact,status) => {
    let chat = fact.text;
    texte.textContent = chat;
   
});
*/
function boutonRandom(valueAnimalCheck="cat",amount=1){
    texte.textContent ="";
    let animalCheck = document.querySelector('input[name="typeAnimal"]:checked');
     valueAnimalCheck = animalCheck.value;
     let nbAmount = document.querySelector("#nbAmount");
     amount = nbAmount.value;
    $.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${valueAnimalCheck}&amount=${amount}`, (facts,status) => {
   
if (Array.isArray(facts)) {
    for(let fact of facts) {
    console.log(fact.text);
    texte.textContent += " || "+ fact.text;
}  
}   else {
 //   texte.textContent =""
    texte.textContent =  facts.text;
}
   });
}
/*
function chooseAnimal(){
    let animalCheck = document.querySelector('input[name="typeAnimal"]:checked');
    let valueAnimalCheck = animalCheck.value;
    $.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=${valueAnimalCheck}&amount=1`, (fact,status) =>{
      let facts = fact.text;
      texte.textContent = facts;
});
}
*/



