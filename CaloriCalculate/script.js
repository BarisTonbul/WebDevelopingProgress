const form=document.querySelector("form");
const inputSelectedFood=document.getElementById("Food");
const inputFoodGram=document.getElementById("txtTaskName");
const btnDeleteAll=document.querySelector("#btnDeleteAll");
const taskList=document.querySelector("#task-list");
const Results=document.querySelector(".card-body2");
var selectedFoodName;


//RESULT VARIABLES
var totalCalorie=document.getElementById("total");
var fat=document.getElementById("fat");
var protein=document.getElementById("protein");
var carb=document.getElementById("carb");

var totalCalorieNum=0;
var fatNum=0;
var proteinNum=0;
var carbNum=0;


/*console.log(form);
console.log(inputSelectedFood);
console.log(inputFoodGram);
console.log(btnDeleteAll);
console.log(taskList);
console.log(Results);
console.log(inputSelectedFood.text);*/



//FIRST CALL EVENT LISTENERS FUNCTION
eventListeners();
function eventListeners(){
    //SUBMIT EVENT
    form.addEventListener("submit",addNewItem);
    //DELETE AN ITEM
    taskList.addEventListener("click",deleteItem);
    //DELETE ALL ITEMS
    btnDeleteAll.addEventListener("click",deleteAllItems);
    //WRITE RESULTS
    form.addEventListener("submit",results);
    //SELECTED FOOD
    inputSelectedFood.addEventListener("click",selectFoodFromSelect);
}

//ADD NEW ITEM FUNCTION
function addNewItem(e){
    //IF INPUT IS NULL ALERT
    if(inputFoodGram.value===''){
        alert("Please enter values as gram");
    }
    //CREATE LI 
    const li=document.createElement("li");
    li.className="list-group-item list-group-item-secondary";
    //ADD FOOD NAME AND GRAM TOGETHER
    li.appendChild(document.createTextNode(selectedFoodName+ ": " +inputFoodGram.value+"Gram"));
    //ADDING TO RESULTS
    if(selectedFoodName==="Beef"){
        //Calori
        let x = (225*inputFoodGram.value)/100;
        totalCalorieNum +=x;;
        let y = (16.17*inputFoodGram.value)/100;
        fatNum += y;
        let z = (23.34*inputFoodGram.value)/100;
        proteinNum+=z;
        let m =(0*inputFoodGram.value)/100;
        carbNum+=m;;
        totalCalorie.textContent="Total Calorie Intake:"+totalCalorieNum.toFixed(0);
        fat.textContent="Your Total Fat-->"+fatNum.toFixed(0)+"gr";
        protein.textContent="Your Total Protein-->"+proteinNum.toFixed(0)+"gr";
        carb.textContent="Your Total Carb-->"+carbNum.toFixed(0)+"gr";
        
    }
    else if(selectedFoodName==="Chicken Breast"){
        //Calori
        let x = (155*inputFoodGram.value)/100;
        totalCalorieNum+=x;
        let y = (2.62*inputFoodGram.value)/100;
        fatNum += y;
        let z = (22.05*inputFoodGram.value)/100;
        proteinNum+=z;
        let m =(0*inputFoodGram.value)/100;
        carbNum+=m;
        totalCalorie.textContent="Total Calorie Intake:"+totalCalorieNum.toFixed(0);
        fat.textContent="Your Total Fat-->"+fatNum.toFixed(0)+"gr";
        protein.textContent="Your Total Protein-->"+proteinNum.toFixed(0)+"gr";
        carb.textContent="Your Total Carb-->"+carbNum.toFixed(0)+"gr";
    }
    else if(selectedFoodName==="Egg"){
        //Calori
        let x = (155*inputFoodGram.value)/100;
        totalCalorieNum+=x;
        let y = (9.51*inputFoodGram.value)/100;
        fatNum += y;
        let z = (12.56*inputFoodGram.value)/100;
        proteinNum+=z;
        let m =(1*inputFoodGram.value)/100;
        carbNum+=m;
        totalCalorie.textContent="Total Calorie Intake:"+totalCalorieNum.toFixed(0);
        fat.textContent="Your Total Fat-->"+fatNum.toFixed(0)+"gr";
        protein.textContent="Your Total Protein-->"+proteinNum.toFixed(0)+"gr";
        carb.textContent="Your Total Carb-->"+carbNum.toFixed(0)+"gr";
    }
    else if(selectedFoodName==="Olive oil"){
        //Calori
        let x = (884*inputFoodGram.value)/100;
        totalCalorieNum+=x;
        let y = (100*inputFoodGram.value)/100;
        fatNum += y;
        let z = (0*inputFoodGram.value)/100;
        proteinNum+=z;
        let m =(0*inputFoodGram.value)/100;
        carbNum+=m;
        totalCalorie.textContent="Total Calorie Intake:"+totalCalorieNum.toFixed(0);
        fat.textContent="Your Total Fat-->"+fatNum.toFixed(0)+"gr";
        protein.textContent="Your Total Protein-->"+proteinNum.toFixed(0)+"gr";
        carb.textContent="Your Total Carb-->"+carbNum.toFixed(0)+"gr";
    }
    else if(selectedFoodName==="Butter"){
        //Calori
        let x = (717*inputFoodGram.value)/100;
        totalCalorieNum+=x;
        let y = (88*inputFoodGram.value)/100;
        fatNum += y;
        let z = (0*inputFoodGram.value)/100;
        proteinNum+=z;
        let m =(0*inputFoodGram.value)/100;
        carbNum+=m;
        totalCalorie.textContent="Total Calorie Intake:"+totalCalorieNum;
        fat.textContent="Your Total Fat-->"+fatNum.toFixed(0)+"gr";
        protein.textContent="Your Total Protein-->"+proteinNum.toFixed(0)+"gr";
        carb.textContent="Your Total Carb-->"+carbNum.toFixed(0)+"gr";
    }
    //CREATE A
    const a=document.createElement("a");
    a.classList='delete-item float-right';
    a.setAttribute('href','#');
    a.innerHTML='<i class="fas fa-times"></i>';
    //ADD a TO li
    li.appendChild(a);
    //ADD li TO ul
    taskList.appendChild(li);
    // clear input
    inputFoodGram.value = '';
    //TO AVOID REFRESHING PAGE
    e.preventDefault();
    
}

//DELETE AN ITEM FUNCTION
function deleteItem(e){

    if(e.target.className==="fas fa-times"){
        console.log(e.target.parentElement.parentElement.textContent);
        e.target.parentElement.parentElement.remove();
    }
    
    
e.preventDefault();
}
//DELETE ALL ITEMS
function deleteAllItems(e){
    while(taskList.firstChild){ 
        taskList.firstChild.remove();
    }
    e.preventDefault();
}
//WRITE RESULTS
function results(){
}
//GETTING SELECTED FOOD FROM SELECT 

function selectFoodFromSelect(){
    selectedFoodName = inputSelectedFood[inputSelectedFood.selectedIndex].value;
}



