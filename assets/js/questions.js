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

    {
        questionId = 13 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these is a genuine language setting on Facebook?" 
        answers: [
          { text: "Double Dutch", isCorrect: false },
          { text: "Pirate English", isCorrect: true },
          { text: "Dog Latin", isCorrect: false },
        ],
    },

    {
        questionId = 14 //might not need? Adding as it might be useful for random selection of questions
        questionText: "If a french person says 'Je mange', what are they doing?" 
        answers: [
          { text: "Eating", isCorrect: true },
          { text: "Crying", isCorrect: false },
          { text: "Walking", isCorrect: false },
        ],
    },
    
    {
        questionId = 15 //might not need? Adding as it might be useful for random selection of questions
        questionText: "How long did Apollo 11 take to travel to the Moon?" 
        answers: [
          { text: "18 hours", isCorrect: false },
          { text: "4 days", isCorrect: true },
          { text: "2 weeks", isCorrect: false },
        ],
    },

    {
        questionId = 16 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Henri Becquerel won a shared Nobel Prize for accidentally discovering what?" 
        answers: [
          { text: "X-rays", isCorrect: false },
          { text: "Magnetism", isCorrect: false },
          { text: "Radioactivity", isCorrect: true },
        ],
    },

    {
        questionId = 17 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these is a Welsh slang term for a microwave oven?" 
        answers: [
          { text: "Hotty-hoo-hoo", isCorrect: false },
          { text: "Beepy-spin", isCorrect: false },
          { text: "Popty-ping", isCorrect: true },
        ],
    },

    {
        questionId = 18 //might not need? Adding as it might be useful for random selection of questions
        questionText: "'Master of the House' and 'Bring Him Home' are songs from which musical?'" 
        answers: [
          { text: "Sweeney Todd", isCorrect: false },
          { text: "Miss Saigon", isCorrect: false },
          { text: "Les Miserables", isCorrect: true },
        ],
    },

    {
        questionId = 19 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these world championships, held in Finland, is the oldest?" 
        answers: [
          { text: "Air guitar", isCorrect: false },
          { text: "Wife carrying", isCorrect: true },
          { text: "Mobile phone throwing", isCorrect: false },
        ],
    },

    {
        questionId = 20 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these French foods is a soup?" 
        answers: [
          { text: "Boudin noir", isCorrect: false },
          { text: "Bouillon", isCorrect: true },
          { text: "Boeuf bourguignon", isCorrect: false },
        ],
    },

    {
        questionId = 21 //might not need? Adding as it might be useful for random selection of questions
        questionText: "How would you travel if you were in a 'felucca'?" 
        answers: [
          { text: "Fly in it", isCorrect: false },
          { text: "Pedal it", isCorrect: false },
          { text: "sail in it", isCorrect: true },
        ],
    },

    {
        questionId = 22 //might not need? Adding as it might be useful for random selection of questions
        questionText: "How would you travel if you were in a 'felucca'?" 
        answers: [
          { text: "Fly in it", isCorrect: false },
          { text: "Pedal it", isCorrect: false },
          { text: "Sail in it", isCorrect: true },
        ],
    },

    {
        questionId = 23 //might not need? Adding as it might be useful for random selection of questions
        questionText: "In March 2013, Belgium released stamps with which flavour glue?" 
        answers: [
          { text: "Beer", isCorrect: false },
          { text: "Chocolate", isCorrect: true },
          { text: "Mussels", isCorrect: false },
        ],
    },

    {
        questionId = 24 //might not need? Adding as it might be useful for random selection of questions
        questionText: "The Clarence Hotel in Ireland is co-owned by the members of which band?" 
        answers: [
          { text: "Boyzone", isCorrect: false },
          { text: "Gun'n'Roses", isCorrect: false },
          { text: "U2", isCorrect: true },
        ],
    },

    {
        questionId = 25 //might not need? Adding as it might be useful for random selection of questions
        questionText: "What is the sum of numbers from one to nine?" 
        answers: [
          { text: "45", isCorrect: true },
          { text: "39", isCorrect: false },
          { text: "34", isCorrect: false },
        ],
    },

    {
        questionId = 26 //might not need? Adding as it might be useful for random selection of questions
        questionText: "A 'Fat Rascal' is a type of what?" 
        answers: [
          { text: "Cat", isCorrect: false },
          { text: "Cactus", isCorrect: false },
          { text: "Cake", isCorrect: true },
        ],
    },

    {
        questionId = 27 //might not need? Adding as it might be useful for random selection of questions
        questionText: "In 'The Sound of Music', which character is described as a 'flibbertigibbet, a will-o'-the-wisp, a clown'?" 
        answers: [
          { text: "Maria", isCorrect: true },
          { text: "Captain Von Trapp", isCorrect: false },
          { text: "Liesl", isCorrect: false },
        ],
    },

    {
        questionId = 28 //might not need? Adding as it might be useful for random selection of questions
        questionText: "On the standard London Monopoly board. which of these properties has the highest value?" 
        answers: [
          { text: "Trafalgar Square", isCorrect: false },
          { text: "Oxford Street", isCorrect: true },
          { text: "Bond Street", isCorrect: false },
        ],
    },

    {
        questionId = 29 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of the Beatles is barefoot on the front cover of the album 'Abbey Road'?" 
        answers: [
          { text: "George Harrison", isCorrect: false },
          { text: "Paul McCartney", isCorrect: true },
          { text: "Ringo Starr", isCorrect: false },
        ],
    },

    {
        questionId = 30 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Epernay in northern France calls itself the capital of which drink?" 
        answers: [
          { text: "Calvados", isCorrect: false },
          { text: "Champagne", isCorrect: true },
          { text: "Cognac", isCorrect: false },
        ],
    },

    {
        questionId = 31 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these is the name of a mountain in the US state of Washington?" 
        answers: [
          { text: "Bourbon Tom", isCorrect: false },
          { text: "Whiskey Dick", isCorrect: true },
          { text: "Rum Harry", isCorrect: false },
        ],
    },

    {
        questionId = 32 //might not need? Adding as it might be useful for random selection of questions
        questionText: "The two promotories at the eastern end of the Strait of Gibraltar are called the 'Pillars of ... ' what?" 
        answers: [
          { text: "Hercules", isCorrect: true },
          { text: "Zeus", isCorrect: false },
          { text: "Poseidon", isCorrect: false },
        ],
    },

    {
        questionId = 33 //might not need? Adding as it might be useful for random selection of questions
        questionText: "The tourist attraction Wookey Hole is famous for which natural features?" 
        answers: [
          { text: "Caves", isCorrect: true },
          { text: "Moving stones", isCorrect: false },
          { text: "Natural spas", isCorrect: false },
        ],
    },

    {
        questionId = 34 //might not need? Adding as it might be useful for random selection of questions
        questionText: "What name is given to the area of the USA that suffered hardship as a result of drought and windstorms in the 1930s?" 
        answers: [
          { text: "Dust bowl", isCorrect: true },
          { text: "Dirt basin", isCorrect: false },
          { text: "Soil dish", isCorrect: false },
        ],
    },

    {
        questionId = 35 //might not need? Adding as it might be useful for random selection of questions
        questionText: "At the annual World Biscuit Throwing Championship, which type of biscuit is used?" 
        answers: [
          { text: "Digestive", isCorrect: false },
          { text: "Rich Tea", isCorrect: true },
          { text: "Custard Cream", isCorrect: false },
        ],
    },

    {
        questionId = 36 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which of these birds is NOT mentioned in the song 'The Twelve Days of Christmas'?" 
        answers: [
          { text: "Geese", isCorrect: false },
          { text: "Swans", isCorrect: false },
          { text: "Swallows", isCorrect: true },
        ],
    },

    {
        questionId = 37 //might not need? Adding as it might be useful for random selection of questions
        questionText: "What type of geographical feature is a 'gulch'?" 
        answers: [
          { text: "Deep ravine", isCorrect: true },
          { text: "Hill of a baked mud", isCorrect: false },
          { text: "Stagnant pond", isCorrect: false },
        ],
    },

    {
        questionId = 38 //might not need? Adding as it might be useful for random selection of questions
        questionText: "What type of geographical feature is a 'gulch'?" 
        answers: [
          { text: "Deep ravine", isCorrect: true },
          { text: "Hill of a baked mud", isCorrect: false },
          { text: "Stagnant pond", isCorrect: false },
        ],
    },

    {
        questionId = 39 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Which instrument is nicknamed 'the clown of the orchestra'?" 
        answers: [
          { text: "Bassoon", isCorrect: true },
          { text: "Tuba", isCorrect: false },
          { text: "Piccolo", isCorrect: false },
        ],
    },

    {
        questionId = 40 //might not need? Adding as it might be useful for random selection of questions
        questionText: "Equipment for which activity is stored in a tack room?" 
        answers: [
          { text: "Rowing", isCorrect: false },
          { text: "Photography", isCorrect: false },
          { text: "riding", isCorrect: true },
        ],
    },
]


//check if question numbers is unique (console.log question.Id the same?)
//check text string duplicates
//check if each question has one true and 2 false answers