//Define the questions variable equals to an array of objects to reference in the logic.js file.
//Each object to contain a question property and an answers one, where each answer contains the information whether it is correct or not

var questions = [
    {
      questionId = 1 //might not need? Adding as it might be useful for random selection of questions
      questionText: "In 1992, the first text message sent to a phone said what?" 
      answers: [
        { text: "Merry Christmas", isCorrect: true },
        { text: "Happy Birthday", isCorrect: false },
        { text: "Ur dumped", isCorrect: false },
      ],
    },

    {
        questionId = 2 //might not need? Adding as it might be useful for random selection of questions
        questionText: "The sound of the police siren changing pitch when it moves towards and away from you is know as what?" 
        answers: [
          { text: "Doppler effect", isCorrect: true },
          { text: "Hertz effect", isCorrect: false },
          { text: "Ohms effect", isCorrect: false },
        ],
      },

    {
        questionId = 3 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Who is the chef credited with the invention of potato crisps in 1853?" 
        answers: [
          { text: "CB Fry", isCorrect: false },
          { text: "Titus Salt", isCorrect: false },
          { text: "George Crum", isCorrect: true },
        ],
    },

    {
        questionId = 4 //might not need? Adding as it might be useful for random selection of questions
        questionText: "A pet feline called Tardar Sauce became an internet sensation under what name?" 
        answers: [
          { text: "Chairman Miaow", isCorrect: false },
          { text: "Grumpy Cat", isCorrect: true },
          { text: "Santa Paws", isCorrect: false },
        ],
    },

    {
        questionId = 5 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which Carribean country is regarded as the home of the steel band?" 
        answers: [
          { text: "Jamaica", isCorrect: false },
          { text: "Trindad and Tobago", isCorrect: true },
          { text: "Barbados", isCorrect: false },
        ],
    },

    {
        questionId = 6 //might not need? Adding as it might be useful for random selection of questions
        questionText: "How many legs does a lobster have?" 
        answers: [
          { text: "6", isCorrect: false },
          { text: "8", isCorrect: false },
          { text: "10", isCorrect: true },
        ],
    },

    {
        questionId = 7 //might not need? Adding as it might be useful for random selection of questions
        questionText: "In which sport might you perform 'randolphs' and 'rudolphs'?" 
        answers: [
          { text: "Ice-skating", isCorrect: false },
          { text: "Ski-jumping", isCorrect: false },
          { text: "Trampolining", isCorrect: true },
        ],
    },

    {
        questionId = 8 //might not need? Adding as it might be useful for random selection of questions
        questionText: "On a QWERTY keyboard, which of these consecutive letters are NOT placed side by side?" 
        answers: [
          { text: "ABC", isCorrect: true },
          { text: "SFGH", isCorrect: false },
          { text: "JKL", isCorrect: false },
        ],
    },

    {
        questionId = 9 //might not need? Adding as it might be useful for random selection of questions
        questionText: "In karaoke and karate, what does the Japanese word kara mean?" 
        answers: [
          { text: "Empty", isCorrect: true },
          { text: "Strong", isCorrect: false },
          { text: "Shaking", isCorrect: false },
        ],
    },

    {
        questionId = 10 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which US president has a middle initial that didn't stand for anything?" 
        answers: [
          { text: "Lyndon B Johnson", isCorrect: false },
          { text: "George W Bush", isCorrect: false },
          { text: "Harry S Truman", isCorrect: true },
        ],
    },

    {
        questionId = 11 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these is a real medical condition?" 
        answers: [
          { text: "Geographic tongue", isCorrect: true },
          { text: "Historic gum", isCorrect: false },
          { text: "Religious tooth", isCorrect: false },
        ],
    },

    {
        questionId = 12 //might not need? Adding as it might be useful for random selection of questions
        questionText: "'Modern life is rubbish' was the second album by which band?" 
        answers: [
          { text: "Oasis", isCorrect: false },
          { text: "Stereophonics", isCorrect: false },
          { text: "Blur", isCorrect: true },
        ],
    },


]


//check if question numbers is unique
//check text string duplicates
//check if each question has one true and 2 false answers