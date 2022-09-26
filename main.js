//William Emil Lieberkind Mathiesen

//HAND-IN!!
//Function clothes to wear

function clothesToWear(temperature) {
    if (temperature > 16) {
        console.log("Wear a tshirt and shorts")
    }
    else if (temperature < 16 > 12){
        console.log("Wear jeans and a tshirt")
    }
    else if (temperature < 12) {
        console.log("Wear jeans and a shirt")
    }
}

clothesToWear(10)



//Dice game 🎲

//Write a function that simulates a dice roll.
// You call the function with the number of times you would like to roll the dice.

function rollDice (amountOfRolls){
    let amountOfSixes = 0
    for (let i = 0; i < amountOfRolls; i++) {
        const randomDiceNumber1 = Math.floor(Math.random() * 6) + 1;
        console.log("You just rolled a " + randomDiceNumber1);


        if(randomDiceNumber1 === 6){
            amountOfSixes++
            if (amountOfSixes === amountOfRolls){
                console.log("You hit a jackpot🎉")
            }
        }
    }
}
rollDice(2)


//Build a sentiment analyzer

const positiveWords = ['happy', 'awesome', 'super', 'glad','smiling']
const negativeWords = ['angry', 'shit', 'bad', 'lort', 'piss']
function getSentimentScore (SentimentText) {
    let positivityScore = 0
    const splittedSentimentText = SentimentText.split(" ");
    for (let i = 0; i < splittedSentimentText.length; i++) {
        if(positiveWords.includes(splittedSentimentText[i]) === true)
            positivityScore++
        if (negativeWords.includes(splittedSentimentText[i]) === true)
            positivityScore--
    }
    if (positivityScore > 0)
        console.log("The sentence is mostly positive")
    if (positivityScore < 0)
        console.log("The sentence is mostly negative")
}
getSentimentScore("happy angry shit bad lort piss")


//4 - Credit card number formatter - optional

