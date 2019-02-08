Connect Four
=================
by Daniel Thompson

## Project Description

I decided to build Connect Four for my first GA WDI project. It can be accessed
using the following link: http://wanting-body.surge.sh

## Game Description

Connect Four is a two-player connection game. It begins with each player
choosing from two sets of colored-discs, which are used in a grid consisting
of seven rows and six columns.

The game-play alternates between the two players, each one dropping their
respective discs into the grid. These discs fall to the bottom of the grid
and are only stopped by another piece.

The objective of the game is to be the first player to connect four discs in a
row; this can be achieved vertically, horizontally or diagonally. If the
grid is completely filled with discs and neither player has managed to connect
four of their discs in a row, then the game ends in a draw.

## Technologies Used

+ HTML
+ CSS
+ Javascript

## Wireframes

The attached wireframes depict the layout of my page. The user is immediately
directed to the game page and the game is initialized when the first user
clicks on the Connect Four grid. I elected for simplicity and directness, as
the page features a header, the game grid, and a footer.

https://drive.google.com/open?id=1mgjhfGYda5yGcIskBLsgjn9Ovhpp8nWUdepict

## MVP

The MVP is a simple, two-player Connect Four game. Each user has a different
disc color and the discs are inserted into the grid upon clicking the column.

The game checks for a win vertically.

## Post-MVP

I plan on making the following post-MVP changes:

+ writing functions that check for wins horizontally and diagonally

+ writing a function that clears the game board upon the declaration of a
winner

+ the creation of landing, game and win pages that are triggered by the
click of a button and the completion of the game

+ a timer above the game board that allows 10 seconds for each player to
make a move

+ a player heading that indicates which player's turn it is, which will also
display the winner of the game

## Code Snippet

I am particularly proud of this function because it checks for vertical wins
in the Connect Four game.  I use a ForEach loop to loop through the columns,
and use conditionals to check if the color count has changed; if the color
changes, the count resets to 1. If one player gets four in a row,
they are alerted of their victory.  

```
function verticalWin(verticalMatch) {
  let colorCount = 0;
  let currentPlayer;
  verticalMatch.forEach( spot =>{
    if("slot blank" !== spot.className) {
        if(currentPlayer === spot.className){
            colorCount += 1;
        } else {
            currentPlayer = spot.className;
            colorCount = 1;
        }
    }
    if(colorCount === 4){
      alert('You win!');
      winner =  currentPlayer;
      return;
    }
  });
}
```
## Major Problems Encountered
