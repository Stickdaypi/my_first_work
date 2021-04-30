const obj = {words: 'newspapers newspapers  books magazines'};

function addWords(obj, wrds){
    let result = obj.words.split(" ");//removes spaces from const
    let words = wrds.split(" ");// removes spaces from add
    result = result.concat(words); //merge two parts
    result = [...new Set(result)]; //remove duplicate
    result = result.join(" "); //create string  
    obj.words = result;       
}
function removeWords(obj, wrds){
    let result = obj.words.split(" ");//removes spaces from const
    let words = wrds.split(" ");// removes spaces from add
    result = [...new Set(result)]; //remove duplicate
    result = result.filter(e => !words.includes(e)).join(" ");//filter not includes use !
    obj.words = result;
}
function changeWords(obj, oldWrds, newWrds) {
    removeWords(obj,oldWrds);
    addWords(obj,newWrds);
} 

  console.log(obj); // {words: "newspapers newspapers  books magazines"}
  
  addWords(obj, 'radio newspapers   ');
  console.log(obj); // {words: "newspapers books magazines radio"}
  
  removeWords(obj, 'newspapers   radio');
  console.log(obj); // {words: "books magazines"}
  
  changeWords(obj, 'books radio  magazines', 'tv internet');
  console.log(obj); // {words: "tv internet"}