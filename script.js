const selectButtons = document.querySelectorAll('[data-selection]')
const score = document.querySelector('[data-score]')
const finalColumn = document.querySelector('[data-end]')
const comptScore = document.querySelector('[data-comp-score]')
const yourScore = document.querySelector('[data-your-score]')

const SELECTIONS=[
    {
        name: 'rock',
        picture:'✊',
        beats:'scissors'
    },
    {
        name: 'paper',
        picture:'✋',
        beats:'rock'
    },
    {
        name: 'scissors',
        picture:'✌',
        beats:'paper'
    }
]

selectButtons.forEach(selectButton =>{
    selectButton.addEventListener('click', e =>{
        const selectName = selectButton.dataset.selection
        const selection = SELECTIONS.find(selection => selection.name === selectName)
        makeSelection(selection)
    })
})

                                     ////////////////////////
/*this function will make the selection depending on what player and computer chose*/
function makeSelection(selection){
    const computerSelection = randomSelection()
    const youWin = isWinner(selection, computerSelection)
    const compWin = isWinner(computerSelection, selection)
    
    displaySelection(computerSelection, compWin)
    displaySelection(selection, youWin)

    if (youWin) displayScore("You Win!",yourScore)
    if (compWin) displayScore("You Lose :(",comptScore)
    if (!youWin && !compWin) displayScore("draw",0)
}

                                     ////////////////////////
/*this function wil display both player and computer score*/
function displayScore(scoreSpan,calScore) {
    score.textContent=parseInt(score.innerText) + 1+" : => " + scoreSpan
    calScore.innerText = parseInt(calScore.innerText) + 1
  }

                                     ////////////////////////
/*this function compare player selection with computer selection*/
function isWinner(selection, oppSelection){
    return selection.beats === oppSelection.name
}

                                     ////////////////////////
/* this function displays what player and compputer selected*/
function displaySelection(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.picture
    div.classList.add('result-selection')
    if (winner) div.classList.add('winner')
    finalColumn.after(div)
}

                                     ////////////////////////
/*this function will generate random numbers in which will result in random selection for the computer*/
function randomSelection(){
    const randomIndex = Math.floor(Math.random()*SELECTIONS.length)
    return SELECTIONS[randomIndex]
}