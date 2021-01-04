//WORD TO GUESSS TEXT AREA
var area=document.querySelector(".wordToGuess");
//SUBMIT INPUT
var submitInput=document.querySelector("#inputText");
//SUBMUT BUTTON
var submitButton=document.querySelector("#submitButton");
//INCORRECT ENTERIES
var incorrectEntries=document.querySelector("#incorrect");


//THE WORD 
var word = "baris";
//LETTERS OF THE WORD AS AN ARRAY
var letters=[];
//IMPORT WORDS LETTERS TO AN ARRAY
for(let i =0 ; i<word.length;i++){
letters[i]=`${word.charAt(i)}`;
}
//SETTING GUESSSING AREA 
setArea();
//GUESSED WORD
var value;
//COUNTER
var counterLose=0;
var counterWin=0;

//TO CALL ALL EVENT LISTENERS 
eventListeners();
function eventListeners(){
submitButton.addEventListener('click',getInput);
    
}
//GETTING INPUT FROM TEXT INPUT BY USING SUBMIT ELEMENT 
function getInput(e){
    value=submitInput.value;
    let isInArray=func();
    if(isInArray){
        writeCorrect();
    }
    else{
        writeIncorrect();
    }
    
submitInput.value="";
e.preventDefault();
}
//FUNCTION TO CHECK IF ITS IN THE ARRAY 
function func(){
    for (let i =0;i<letters.length;i++){
        if(letters[i]==value){
            return true;
            break;
        }
    }
}
//FUNCTION TO WRITE CORRECT GUESS
function writeCorrect(){
    for(let i=0 ; i<letters.length;i++){
        if(letters[i]==value){
            areaLetters[i*2]=value;
            printAreaLetters();
            counterWin++;
        }
    }
    //WIN SCENE
    if(counterWin==word.length){
        alert("YOU WIN");
    }
}
//FUNCTION TO WRITE UNCORRENT GUESS
function writeIncorrect(){
incorrectEntries.textContent+= `${value} `;
    //COUNTER FOR LOSE SCREEN
    counterLose++;
    if(counterLose==5){
        for(let i =0 ; i<letters.length;i++){
            areaLetters[i*2]=letters[i];
        }
        printAreaLetters();
        alert("YOU LOSE");
    }
}
//SETTING GUES AREA FUNCTION
function setArea(){
    //PLACING "-" TO SCEEN
    let word="_";
    for(let i= 0 ; i<letters.length;i++){
        area.textContent+=word+" ";
    }
}
//CREATING ARRAY OF LETTERS FROM SCENE
var areaLetters=[];
for(let i =0; i<area.textContent.length;i++){
   areaLetters[i]=area.textContent[i];
}
//TO PRINT AREA LETTERS THAT CHANGED BY CORRECT ANSWERS TO BOARD
function printAreaLetters(){
    area.textContent="";
    for(let i=0 ; i<areaLetters.length;i++){
        area.textContent+=areaLetters[i];
        }
}
