// let currmoletile;
// let currplanttile;
// let score = 0;
// let gameover = false;
// let startTime = new Date().getTime(); // Store the start time
// let moletime = 1000;
// let timeLimit = 30; // Time limit in seconds
// let timerInterval; // Variable to store the timer interval


// function setgame(moletime) {
//     for (let i = 0; i < 9; i++) {
//         let tile = document.createElement("div");
//         tile.id = i.toString();
//         tile.addEventListener("click", selecttile);
//         document.getElementById("board").appendChild(tile);
//     }
//     setInterval(setmole, moletime);
//     setInterval(setplant, 2000);
// }

// function getrandomtile() {
//     let num = Math.floor(Math.random() * 9);
//     return num.toString();
// }

// function setmole() {
//     if (gameover) {
//         return;
//     }
//     if (currmoletile) {
//         currmoletile.innerHTML = "";
//     }
//     let mole = document.createElement("img");
//     mole.src = "./monty-mole.png";
//     let num = getrandomtile();
//     if (currplanttile && currplanttile.id == num) {
//         return;
//     }
//     currmoletile = document.getElementById(num);
//     currmoletile.appendChild(mole);
//     let moleSound = document.getElementById("moleSound");
//     moleSound.play();
// }

// function setplant() {
//     if (gameover) {
//         return;
//     }
//     if (currplanttile) {
//         currplanttile.innerHTML = "";
//     }
//     let plant = document.createElement("img");
//     plant.src = "./piranha-plant.png";
//     let num = getrandomtile();
//     if (currmoletile && currmoletile.id == num) {
//         return;
//     }
//     currplanttile = document.getElementById(num);
//     currplanttile.appendChild(plant);
// }

// function selecttile() {
//     if (gameover) {
//         return;
//     }
//     if (this == currmoletile) {
//         score += 10;
//         document.getElementById("score").innerText = "Score: " + score.toString();
//         currmoletile.innerHTML = "";
//     } else if (this == currplanttile) {
//         let moleSound = document.getElementById("error");
//         moleSound.play();
//         endGame();
//     }
// }

// function startTimer() {
//     let clock = document.getElementById("clock");
//     timerInterval = setInterval(function () {
//         let currentTime = new Date().getTime();
//         let elapsedTime = Math.floor((currentTime - startTime) / 1000);
//         let remainingTime = timeLimit - elapsedTime;

//         if (remainingTime >= 0) {
//             let minutes = Math.floor(remainingTime / 60);
//             let seconds = remainingTime % 60;
//             clock.innerHTML = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//         } else {
//             clock.innerHTML = "00:00";
//             endGame();
//         }
//     }, 1000);
// }

// function endGame() {
//     gameover = true;
//     clearInterval(timerInterval);
    
//     // Create a modal overlay to display the input form
//     let modal = document.createElement("div");
//     modal.classList.add("modal");
//     let modalContent = `
//         <div class="modal-content">
//             <h2>Game Over!</h2>
//             <p>Enter your name:</p>
//             <form id="nameForm" action="score.php" method="POST">
//                 <input type="text" name="playername" id="playerName" placeholder="Your name">
//                 <button type="submit" name="add">Submit</button>
//             </form>
//         </div>
//     `;
//     modal.innerHTML = modalContent;
//     document.body.appendChild(modal);
    
//     // Focus on the input field
//     document.getElementById("playerName").focus();
    
//     // Handle form submission
//     document.getElementById("nameForm").addEventListener("submit", function(event) {
//         event.preventDefault();
//         let playerName = document.getElementById("playerName").value;
//         if (playerName.trim() !== "") {
//             localStorage.setItem("playerName", playerName);
//         }
//         window.location.href = "index.html";
//     });
// }


// function startGame(moletime) {

//     setgame(moletime);
//     startTimer();
// }

