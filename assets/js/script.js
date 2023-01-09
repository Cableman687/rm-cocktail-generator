// //Global Declarations
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const quizContainer = document.getElementById('quiz-container');
var scoreSpan = document.getElementById('score-span');
var countEl = document.querySelector("#count");
var renderCardEl = document.querySelector("#render-page")
const btn = document.getElementById('returnBtn');
//Cocktail Card Elements
var cocktailImageEl = document.querySelector("#cocktail-image");
var cocktailNameEl = document.querySelector("#cocktail-name");
var instructionContentEl = document.querySelector("#instruction-content");
//Character Card Elements
var characterImageEl = document.querySelector("#character-image");
var characterNameEl = document.querySelector("#character-name");
var characterSpeciesEl = document.querySelector("#species");
var characterGenderEl = document.querySelector("#gender");
var characterOriginEl = document.querySelector("#origin");


var APIKey = "9973533";
var drinksSaved = [];
var cocktailArray = [];



// Load Cocktail Array when program starts
function loadCocktails(drinksSaved) {
  for (var i = 0; i < 10; i++) {
    var callIndex = 0
    var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";

    fetch(APIUrl)
    .then(function(response){
     return response.json();
    })
    .then(function(data){
      console.log(data.drinks)
      for (var i =  0; i < 10; i++){
        drinksSaved.push(data.drinks[i]);
      }
    })
  }
  console.log(drinksSaved)
}

var cocktailArray = []

//Added redirect URL request if error occurs
var redirectURL = './404.html'

// Ingredient List
var ingredientList =
    [
        // category =  [
        //             question = 'type',
        //             types = ['Cocktail', 'Shot', 'Shake', 'Any'],
        //             filterDefinition = 'c'
        //             ],

        spirits = [  
          question = 'spirit',
          types = [ 'Vodka', 'Gin', 'Rum', 'Tequila', 'Scotch', 'Apple Brandy', 'Apple Schnaps', 
                    'Apricot Brandy', 'Bacardi', 'Baileys Irish Cream', 'Black Rum', 'Brandy', 
                    'Coconut Rum', 'Coffee Liquer', 'Dry Vermouth', 'Jack Daniels'  ],
                  ],
        mixers = [
          question = 'mixer',
          types = [ 'Aperol', 'Apple Cider', 'Carbonated Water', 'Club Soda', 'Coca-Cola', 'Cranberry Juice',
                    'Dr-Pepper', 'Ginger Ale', 'Orange Juice', 'Red Bull',],
                  ],   
          fruit = [
            question = 'fruit',
            types = [  'Apple', 'Apprictot', 'Berries', 'Blackberries', 'Blueberries',
                       'Cherries', 'Cranberries', 'Watermelon', 'Blood Orange'],
                  ],
          
          vegetable = [
            question = 'vegetable/herb',
            types = [ 'Celery', 'Cucumber', 'Basil', 'Coriander', 'Thyme' ],
            ],

            additive = [
              question = 'additive',
              types = [   'Agave Syrup', 'Allspice', 'Amaretto', 'Angostura Bitters',
                          'Apricot Nectar', 'Bitters', 'Lemon Lime', 'Tabasco Sauce', ],
              ],
            ]
        // glassType = [
        //             question = 'glass type',
        //             types = [ 'Coupe Glass', 'Martini Glass', 
        //                       'Highball Glass', 'Margarita Glass', 'Shot Glass',
        //                       'Any'   ],
        //             filterDefinition = 'g',
        //             ],

        // firstLetter = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 
        //                 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 
        //                 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',    ],
    

var quizLi = document.getElementById('quiz-list')

var drinkFilter = []

// console.log(ingredientList[questionIndex][0])

// Clear Answer List
function clearList() {

  while (quizLi.hasChildNodes()){
    quizLi.removeChild(quizLi.firstChild)
  }
 }

 function createFilter () {
  var filters = drinkFilter.join(',')
    
  // Make all filters lowercase
  // Replace spaces with -
  filters = filters.replaceAll(' ', '_').toLowerCase();
  ingArray = filters
  console.log(filters)
  getCocktail(ingArray)
 }

 var questionCount = 0;

 //Update page count
 function setCounterText() {
  countEl.textContent = questionCount + "/4";
}

// Write New and Answer Set
function writeIngredientBtn(questionIndex) {
    for (let i = 0; i < ingredientList[questionIndex][1].length; i++ ) {
        var answerEl = document.createElement('button');
        answerEl.textContent = ingredientList[questionIndex][1][i];

        quizLi.append(answerEl)

        //Update page count element textcontent with page increment values
        countEl.texcontent = questionCount;
        answerEl.addEventListener("click", function(){
          questionCount++;
          setCounterText();
    })
    }
}

// Start quiz call

// //Start the game state
startBtn.addEventListener('click', function() {
  const quizContainer = document.getElementById('quiz-container');
  const test = document.documentElement;
  var op = document.getElementById("overlay2");
  const stars = document.getElementById("stars");
  const logo = document.getElementById("logo");
const instructions = document.getElementById("instructions");



  // const logo = document.getElementById("logo")
  instructions.classList.add("BlackCoverChange");
  logo.style.display = "none";
  startBtn.style.visibility = "hidden";
  quizContainer.style.visibility = "visible";
  // test.classList.add('fadeOut');
    // op.style.opacity = 0.5;
    startQuiz();
  
    document.getElementById('main-btn').classList.add('hide');

})
// //Initiate the quiz
function startQuiz(){

    startBtn.classList.add('hide');
    callPopDrinks(cocktailArray)
    // writeIngredientBtn(questionIndex)
    // //reveals the first question
    quizContainer.classList.remove('hide');

    Instructions();
    //another function to pass through questions?
}
const questions = [
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
      ]
    },
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
      ]
    },
    {
      question: 'Question Here',
      answers: [
        { text: 'Choice here', correct: true },
        { text: 'Choice here', correct: false},
        { text: 'Choice here', correct: false },
        { text: 'Choice here', correct: false }
    ]
    },
    {
        question: 'Question Here',
        answers: [
          { text: 'Choice here', correct: true },
          { text: 'Choice here', correct: false},
          { text: 'Choice here', correct: false },
          { text: 'Choice here', correct: false }
        ]
    },
    {
        question: 'Question Here',
        answers: [
          { text: 'Choice here', correct: true },
          { text: 'Choice here', correct: false},
          { text: 'Choice here', correct: false },
          { text: 'Choice here', correct: false }
        ]
    }
  ]


  //------------------------Fetch Cocktail---------------------------------

  // var cocktailName = "cocktailblank";
  
  // function getCocktail(ingArray){

  //   //return function if array is null
  //   if(ingArray == "" || ingArray == null){
        
  //     return;
      
  //   } else {
      
  //     var ingredients = ingArray;
     

  //     // var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredients;

  //     // var cocktailArray = [];

  //     // for(var i = 0; i < 3; i++){

  //     //   var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";



  //     //   fetch(APIUrl)
  //     //   .then(function(response){
  //     //    return response.json();
  //     //   })
  //     //   .then(function(data){


  //     //     for(var i =  0; i < 10; i++){
  //     //       cocktailArray.push(data.drinks[i]);
  //     //     }

          
  //     //     console.log(cocktailArray);

  //     //   })

  //     // }
      
      
      
  //     // var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/filter.php?i=" + ingredients;
  
  //   }

  //   fetch(APIUrl)
  //       .then(function (response) {
  //         if(response.status === 404){
  //           document.location.replace("./404.html");

  //         } else {
  //           return response.json();
  //         }

  //       })
  //       .then(function (data) {


  //         // console.log(data)







  //           if(data.drinks == "None Found"){
  //             document.location.replace("./404.html");

  //           } else {



  //             var cocktailObject = {
  //               name: data.drinks[0].strDrink,
  //               image: data.drinks[0].strDrinkThumb,
  //               image: data.drinks[0].strInstructions,
  //             }
              
              
  //             console.log(cocktailObject);
  //             localStorage.setItem("cocktailName", JSON.stringify(cocktailObject));

              
  //             cocktailName = cocktailObject.name;
  //             console.log(cocktailName);

              

  //           }
         
  //       });

  // }
 

  

  // Dry_Vermouth,Gin,Anis
  // Vodka,Orange_Juice,Lemon_Juice
  // getCocktail("Vodka,Orange_Juice,Lemon_Juice");

 // Answer Button Listener 
//  quizLi.addEventListener("click", function(event)  { 
//                                                       console.log(event.target.textContent)
//                                                       // var ans = ingredientList[questionIndex][2] + '=' + event.target.textContent
//                                                       var ans =  event.target.textContent
//                                                       drinkFilter.push(ans)
//                                                       console.log(drinkFilter)
//                                                       questionIndex++
//                                                       clearList()
//                                                       console.log(questionIndex)
//                                                       if (questionIndex > ingredientList.length - 1) {
//                                                         createFilter()
//                                                       }
//                                                       else {
//                                                         writeIngredientBtn(questionIndex)
//                                                       }
//                                                     })    

  


  console.log()


  
var questionIndex = 1

//Start of popup 
//GOAL make the pop-up appear after 2 seconds or user selects instructions tab?
const close2 = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const instructions = document.getElementById('instructions');
const title = document.getElementById('body');


setTimeout(function () {
  console.log("instructions displayed");
  overlay.style.visibility = 'visible';
},3000);

function Instructions(){ //function to reveal pop-up after a few seconds
console.log("passing");
};
//Add click event when user clicks lets go
close2.addEventListener('click', function() {
  console.log('User clicked lets go!');
    overlay.style.display = "none"; //Makes overlay + Instructions disappear
});
//End of popup


//When user clicks start quiz
function writeCatButton(cocktailArray, questionIndex) {
  var quizLst = []
  // if (questionIndex == 0) {
  //   for (let i = 0; i < cocktailArray.length; i++ ) {
  //     // Check if value is already a child

  //     var checkValue = quizLst.includes(cocktailArray[i].strCategory)

  //     if (!checkValue) {
  //     var answerEl = document.createElement('button');
  //     answerEl.textContent = cocktailArray[i].strCategory
      
  //     quizLi.append(answerEl)
  //     quizLst.push(cocktailArray[i].strCategory)
      
  //   }

  // }
  // }
  
  // else {

 
  for (let i = 0; i < cocktailArray.length; i++ ) {
      
      // Check if value is already a child

      var checkValue = quizLst.includes(eval('cocktailArray[i].strIngredient'+questionIndex));

      if (!checkValue) {
      var answerEl = document.createElement('button');
      answerEl.textContent = eval('cocktailArray[i].strIngredient'+questionIndex)
      quizLi.append(answerEl)
      quizLst.push(eval('cocktailArray[i].strIngredient'+questionIndex))
      }

      //Update page count element textcontent with page increment values
      countEl.texcontent = questionCount;
      answerEl.addEventListener("click", function(){
        questionCount++;
        setCounterText();
  })

  // }
}
createButtonEventListener()

}

  //------------------------Fetch Character---------------------------------
  

  var randomNumber = Math.floor(Math.random() * 825);

  var characterNumber = randomNumber;

  function getCharacter(){

    var characterUrl = "https://rickandmortyapi.com/api/character/" + characterNumber;

    fetch(characterUrl)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {

          //Create character object for character tile
            var characterObject = {
              name: data.name,
              species: data.species,
              gender: data.gender,
              origin: data.origin.name,
              image: data.image,
            }

            //Set Character Object to  local storage
            console.log(characterObject);
            localStorage.setItem("characterName", JSON.stringify(characterObject));

            //Retrieve character Object from local storage
            var retrieveCharacter = JSON.parse(localStorage.getItem('characterName'));

            //Update Character Card details based on retrieved values
            characterImageEl.setAttribute("src", retrieveCharacter.image);
            characterNameEl.textContent = retrieveCharacter.name;
            characterSpeciesEl.textContent = retrieveCharacter.species;
            characterGenderEl.textContent = retrieveCharacter.gender;
            characterOriginEl.textContent = retrieveCharacter.origin;

            


        });

    
    
  }


function removeNonAns(ans) {
  var childCount = cocktailArray.length - 1

  
  
  for (let i = childCount; i >=0; i--) {


    var drinkIngVal = [cocktailArray[i].strIngredient1, cocktailArray[i].strIngredient2, cocktailArray[i].strIngredient3, cocktailArray[i].strIngredient4]

    console.log(drinkIngVal)
      console.log(drinkIngVal)
      console.log(!drinkIngVal.includes(ans))
      
      if (!drinkIngVal.includes(ans)){
        cocktailArray.splice(i, 1)
      }
    }

    // var checkAnsMatch = ans === drinkVal
    // if (!checkAnsMatch) {
    //   cocktailArray.splice(i, 1)
    
  
 
  if (cocktailArray.length <= 1) {

    clearList();
    
    // Retrieve Character API Details
    getCharacter();
    
    //Save cocktail object to local storage based on selected ingredients
    var cocktailObject = {
      name: cocktailArray[0].strDrink,
      image: cocktailArray[0].strDrinkThumb,
      instructions: cocktailArray[0].strInstructions,
      
    }

    console.log(cocktailObject);
    localStorage.setItem("cocktailName", JSON.stringify(cocktailObject));

    //Retrieve cocktail information from local storage
    var fetchCocktail = JSON.parse(localStorage.getItem('cocktailName'));

    //Set cocktail card information using retrieved cocktail information
    cocktailImageEl.setAttribute("src", fetchCocktail.image);
    cocktailNameEl.textContent = fetchCocktail.name;
    instructionContentEl.textContent = fetchCocktail.instructions;

    //Remove hidden class
    renderCardEl.classList.remove("hidden");

    //Return button functionality
    var returnUrl = './index.html'; 
    //When user clicks the return button, they return to the main html.
    btn.addEventListener('click', function(){
      document.location.replace(returnUrl);
    })
    
    } else {
    clearList()
    questionIndex++
    writeCatButton(cocktailArray, questionIndex)
      

  }
 
}



// Answer event listener 
function createButtonEventListener () {

  console.log(quizLi.childElementCount)
for (let i = 0; i < quizLi.childElementCount; i++) {
quizLi.children[i].addEventListener("click", function(event)  { 
  var ans =  event.target.textContent
  
  // Remove objects not containing answer
  removeNonAns(ans)

})
}    
}


// Popular Drinks API Call

function callPopDrinks (cocktailArray) {
 
  // for each method
  // console.log(drinksSaved)
  // drinksSaved.forEach(element => {
  //   if (!cocktailArray.includes(element)) {
  //     cocktailArray.push(element);
  //   } else {
  //     console.log('dupe detected')
  //   }
  // })
  //using object variable
  var uniqueObject = {};
  for (i in drinksSaved) {
    
    objID = drinksSaved[i].idDrink;
    uniqueObject[objID] = drinksSaved[i];
  
  }

  for (i in uniqueObject) {
    cocktailArray.push(uniqueObject[i]);
  }

  console.log(uniqueObject[1]);
  console.log(cocktailArray);
  
  // for (let i = 0; i < drinksSaved.length; i++) {
  //   var checkDupe = cocktailArray.includes(drinksSaved[i].idDrink)
  //   console.log(checkDupe)
  //   if (checkDupe) {
  //     console.log('dupe detected')
  //   } else {
  //     cocktailArray.push(drinksSaved[i])
  //   }

    
  // }
  // var cocktailArray = [];

  // for(var i = 0; i < 3; i++){

  //   var APIUrl = "https://www.thecocktaildb.com/api/json/v2/9973533/randomselection.php";



  //   fetch(APIUrl)
  //   .then(function(response){
  //    return response.json();
  //   })
  //   .then(function(data){
  //     console.log(data.drinks)
  //     for(var i =  0; i < 10; i++){
  //       cocktailArray.push(data.drinks[i]);
  //     }
  //   })

 
  // }

  // console.log(cocktailArray)

  // console.log(cocktailArray)
  // console.log(drinkData)
  
    writeCatButton(cocktailArray, questionIndex)
    
}

  
loadCocktails(drinksSaved);


