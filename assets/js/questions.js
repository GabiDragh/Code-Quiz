//Define the questions variable equals to an array of objects to reference in the logic.js file.
//Each object to contain a question property and an choices one, where each answer contains the information whether it is correct or not

var quizQuestions = [
    {
      //questionId: 1, //might not need? Adding as it might be useful for random selection of questions
      questionTitle: "In 1992, the first text message sent to a phone said what?", 
      choices: [
        { text: "Merry Christmas", isCorrect: true },
        { text: "Happy Birthday", isCorrect: false },
        { text: "Ur dumped", isCorrect: false },
      ],
    },

    {
        //questionId: 2, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "The sound of the police siren changing pitch when it moves towards and away from you is know as what?",
        choices: [
          { text: "Doppler effect", isCorrect: true },
          { text: "Hertz effect", isCorrect: false },
          { text: "Ohms effect", isCorrect: false },
        ],
      },

    {
        //questionId: 3, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Who is the chef credited with the invention of potato crisps in 1853?", 
        choices: [
          { text: "CB Fry", isCorrect: false },
          { text: "Titus Salt", isCorrect: false },
          { text: "George Crum", isCorrect: true },
        ],
    },

    {
        //questionId: 4, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "A pet feline called Tardar Sauce became an internet sensation under what name?", 
        choices: [
          { text: "Chairman Miaow", isCorrect: false },
          { text: "Grumpy Cat", isCorrect: true },
          { text: "Santa Paws", isCorrect: false },
        ],
    },

    {
        //questionId: 5, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which Carribean country is regarded as the home of the steel band?", 
        choices: [
          { text: "Jamaica", isCorrect: false },
          { text: "Trindad and Tobago", isCorrect: true },
          { text: "Barbados", isCorrect: false },
        ],
    },

    {
        //questionId: 6, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "How many legs does a lobster have?", 
        choices: [
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: false },
          { text: "10", isCorrect: true },
        ],
    },

    {
        //questionId: 7, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "In which sport might you perform 'randolphs' and 'rudolphs'?", 
        choices: [
          { text: "Ice-skating", isCorrect: false },
          { text: "Ski-jumping", isCorrect: false },
          { text: "Trampolining", isCorrect: true },
        ],
    },

    {
        //questionId: 8, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "On a QWERTY keyboard, which of these consecutive letters are NOT placed side by side?", 
        choices: [
          { text: "ABC", isCorrect: true },
          { text: "SFGH", isCorrect: false },
          { text: "JKL", isCorrect: false },
        ],
    },

    {
        //questionId: 9, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "In karaoke and karate, what does the Japanese word kara mean?", 
        choices: [
          { text: "Empty", isCorrect: true },
          { text: "Strong", isCorrect: false },
          { text: "Shaking", isCorrect: false },
        ],
    },

    {
        //questionId: 10, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which US president has a middle initial that didn't stand for anything?", 
        choices: [
          { text: "Lyndon B Johnson", isCorrect: false },
          { text: "George W Bush", isCorrect: false },
          { text: "Harry S Truman", isCorrect: true },
        ],
    },

    {
        //questionId: 11, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these is a real medical condition?", 
        choices: [
          { text: "Geographic tongue", isCorrect: true },
          { text: "Historic gum", isCorrect: false },
          { text: "Religious tooth", isCorrect: false },
        ],
    },

    {
        //questionId: 12, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "'Modern life is rubbish' was the second album by which band?", 
        choices: [
          { text: "Oasis", isCorrect: false },
          { text: "Stereophonics", isCorrect: false },
          { text: "Blur", isCorrect: true },
        ],
    },

    {
        //questionId: 13, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these is a genuine language setting on Facebook?", 
        choices: [
          { text: "Double Dutch", isCorrect: false },
          { text: "Pirate English", isCorrect: true },
          { text: "Dog Latin", isCorrect: false },
        ],
    },

    {
        //questionId: 14, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "If a french person says 'Je mange', what are they doing?", 
        choices: [
          { text: "Eating", isCorrect: true },
          { text: "Crying", isCorrect: false },
          { text: "Walking", isCorrect: false },
        ],
    },
    
    {
        //questionId: 15, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "How long did Apollo 11 take to travel to the Moon?", 
        choices: [
          { text: "18 hours", isCorrect: false },
          { text: "4 days", isCorrect: true },
          { text: "2 weeks", isCorrect: false },
        ],
    },

    {
        //questionId: 16, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Henri Becquerel won a shared Nobel Prize for accidentally discovering what?", 
        choices: [
          { text: "X-rays", isCorrect: false },
          { text: "Magnetism", isCorrect: false },
          { text: "Radioactivity", isCorrect: true },
        ],
    },

    {
        //questionId: 17, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these is a Welsh slang term for a microwave oven?", 
        choices: [
          { text: "Hotty-hoo-hoo", isCorrect: false },
          { text: "Beepy-spin", isCorrect: false },
          { text: "Popty-ping", isCorrect: true },
        ],
    },

    {
        //questionId: 18, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "'Master of the House' and 'Bring Him Home' are songs from which musical?'", 
        choices: [
          { text: "Sweeney Todd", isCorrect: false },
          { text: "Miss Saigon", isCorrect: false },
          { text: "Les Miserables", isCorrect: true },
        ],
    },

    {
        //questionId: 19, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these world championships, held in Finland, is the oldest?", 
        choices: [
          { text: "Air guitar", isCorrect: false },
          { text: "Wife carrying", isCorrect: true },
          { text: "Mobile phone throwing", isCorrect: false },
        ],
    },

    {
        //questionId: 20, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these French foods is a soup?", 
        choices: [
          { text: "Boudin noir", isCorrect: false },
          { text: "Bouillon", isCorrect: true },
          { text: "Boeuf bourguignon", isCorrect: false },
        ],
    },

    {
        //questionId: 21, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "How would you travel if you were in a 'felucca'?", 
        choices: [
          { text: "Fly in it", isCorrect: false },
          { text: "Pedal it", isCorrect: false },
          { text: "sail in it", isCorrect: true },
        ],
    },

    {
        //questionId: 22, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "What type of computer was the first laptop computer?", 
        choices: [
          { text: "Apple Macintosh", isCorrect: false },
          { text: "IBM", isCorrect: false },
          { text: "Osborne 1", isCorrect: true },
        ],
    },

    {
        //questionId: 23, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "In March 2013, Belgium released stamps with which flavour glue?", 
        choices: [
          { text: "Beer", isCorrect: false },
          { text: "Chocolate", isCorrect: true },
          { text: "Mussels", isCorrect: false },
        ],
    },

    {
        //questionId: 24, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "The Clarence Hotel in Ireland is co-owned by the members of which band?", 
        choices: [
          { text: "Boyzone", isCorrect: false },
          { text: "Gun'n'Roses", isCorrect: false },
          { text: "U2", isCorrect: true },
        ],
    },

    {
        //questionId: 25, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "What is the sum of numbers from one to nine?", 
        choices: [
          { text: "45", isCorrect: true },
          { text: "39", isCorrect: false },
          { text: "34", isCorrect: false },
        ],
    },

    {
        //questionId: 26, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "A 'Fat Rascal' is a type of what?",
        choices: [
          { text: "Cat", isCorrect: false },
          { text: "Cactus", isCorrect: false },
          { text: "Cake", isCorrect: true },
        ],
    },

    {
        //questionId: 27, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "In 'The Sound of Music', which character is described as a 'flibbertigibbet, a will-o'-the-wisp, a clown'?", 
        choices: [
          { text: "Maria", isCorrect: true },
          { text: "Captain Von Trapp", isCorrect: false },
          { text: "Liesl", isCorrect: false },
        ],
    },

    {
        //questionId: 28, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "On the standard London Monopoly board. which of these properties has the highest value?", 
        choices: [
          { text: "Trafalgar Square", isCorrect: false },
          { text: "Oxford Street", isCorrect: true },
          { text: "Bond Street", isCorrect: false },
        ],
    },

    {
        //questionId: 29, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of the Beatles is barefoot on the front cover of the album 'Abbey Road'?", 
        choices: [
          { text: "George Harrison", isCorrect: false },
          { text: "Paul McCartney", isCorrect: true },
          { text: "Ringo Starr", isCorrect: false },
        ],
    },

    {
        //questionId: 30, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Epernay in northern France calls itself the capital of which drink?", 
        choices: [
          { text: "Calvados", isCorrect: false },
          { text: "Champagne", isCorrect: true },
          { text: "Cognac", isCorrect: false },
        ],
    },

    {
        //questionId: 31, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these is the name of a mountain in the US state of Washington?", 
        choices: [
          { text: "Bourbon Tom", isCorrect: false },
          { text: "Whiskey Dick", isCorrect: true },
          { text: "Rum Harry", isCorrect: false },
        ],
    },

    {
        //questionId: 32, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "The two promotories at the eastern end of the Strait of Gibraltar are called the 'Pillars of ... ' what?", 
        choices: [
          { text: "Hercules", isCorrect: true },
          { text: "Zeus", isCorrect: false },
          { text: "Poseidon", isCorrect: false },
        ],
    },

    {
        //questionId: 33, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "The tourist attraction Wookey Hole is famous for which natural features?", 
        choices: [
          { text: "Caves", isCorrect: true },
          { text: "Moving stones", isCorrect: false },
          { text: "Natural spas", isCorrect: false },
        ],
    },

    {
        //questionId: 34, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "What name is given to the area of the USA that suffered hardship as a result of drought and windstorms in the 1930s?", 
        choices: [
          { text: "Dust bowl", isCorrect: true },
          { text: "Dirt basin", isCorrect: false },
          { text: "Soil dish", isCorrect: false },
        ],
    },

    {
        //questionId: 35, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "At the annual World Biscuit Throwing Championship, which type of biscuit is used?",
        choices: [
          { text: "Digestive", isCorrect: false },
          { text: "Rich Tea", isCorrect: true },
          { text: "Custard Cream", isCorrect: false },
        ],
    },

    {
        //questionId: 36, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which of these birds is NOT mentioned in the song 'The Twelve Days of Christmas'?", 
        choices: [
          { text: "Geese", isCorrect: false },
          { text: "Swans", isCorrect: false },
          { text: "Swallows", isCorrect: true },
        ],
    },

    {
        //questionId: 37, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "What type of geographical feature is a 'gulch'?", 
        choices: [
          { text: "Deep ravine", isCorrect: true },
          { text: "Hill of a baked mud", isCorrect: false },
          { text: "Stagnant pond", isCorrect: false },
        ],
    },

    {
        //questionId: 38, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "What is the meaning of 'Hakuna Matata'?", 
        choices: [
          { text: "No worries", isCorrect: true },
          { text: "Good night", isCorrect: false },
          { text: "Thank you", isCorrect: false },
        ],
    },

    {
        //questionId: 39, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Which instrument is nicknamed 'the clown of the orchestra'?", 
        choices: [
          { text: "Bassoon", isCorrect: true },
          { text: "Tuba", isCorrect: false },
          { text: "Piccolo", isCorrect: false },
        ],
    },

    {
        //questionId: 40, //might not need? Adding as it might be useful for random selection of questions
        questionTitle: "Equipment for which activity is stored in a tack room?", 
        choices: [
          { text: "Rowing", isCorrect: false },
          { text: "Photography", isCorrect: false },
          { text: "Riding", isCorrect: true },
        ],
    },
]


//check if question numbers is unique (console.log question.Id the same?)

var questionIds = quizQuestions.map(question => question.questionId);
var uniqueQuestionIds = new Set(questionIds);

if (questionIds.length === uniqueQuestionIds.size) {
  console.log("All questionIds are unique.");
} else {
  console.log("There are duplicate questionIds.");
}

//check text string duplicates

var questionTitles = quizQuestions.map(question => question.questionTitle);
var uniquequestionTitles = new Set(questionTitles);

console.log(questionTitles);
console.log(uniquequestionTitles);

if (questionTitles.length === uniquequestionTitles.size) {
  console.log("All question texts are unique.");
} else {
  console.log("There are duplicate question texts.");
}

//TODO:check if each question has one true and 2 false choices

 var trueCount = 0;
 var falseCount = 0; 

  function checkTrueFalse () {

//   for (var i = 0; i < questions.lenght; i++) {
//      console.log(questions[i].length);
//   }

   for (var j = 0; j < quizQuestions[0].choices[1].length; j++) {
      if (quizQuestions[i].choices[1][j].isCorrect === true) {
          trueCount++;
      } else {
          falseCount++
      }
 
   if (trueCount === 1 && falseCount === 2) {
      console.log("Question " + quizQuestions[i].questionId + " has one true and two false answer inputs");
   } else {
      console.log("Question " + quizQuestions[i].questionId + " does NOT have one true and two false answer inputs");
   }
  }
 }
checkTrueFalse();

//  var trueCount = true;
//  var falseCount = true;

//  function checkchoices(questions) {
//      for (var i = 0; i < questions.length; i++) {
//          var questionLength = questions[i];
//     for (var j = 0; j < questionLength.choices[1].lenght; j++) {
//         var trueCount = questionLength.choices[1][j].filter(choices => true.isCorrect).length;
//         var falseCount = questionLength.choices[1][j].filter(choices => false.isCorrect).length;
//     }
// //console.log(trueCount);
// //console.log(falseCount);

//      if (trueCount === 1 && falseCount === 2) {
//          console.log(true);
//      } else {
//          console.log(false);
//      }
//      }
//  }

// checkchoices(questions);

