let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');
let scoreOne = 0;
let scoreTwo = 0;

function add1PointHome() {
   scoreOne += 1;
   homeScore.textContent = scoreOne
}


function add2PointHome() {
   scoreOne += 2;
   homeScore.textContent = scoreOne
}

function add3PointHome() {
   scoreOne += 3;
   homeScore.textContent = scoreOne    
}


function add1PointGuest() {
    scoreTwo += 1;
   guestScore.textContent = scoreTwo    
}

function add2PointGuest() {
    scoreTwo += 2;
   guestScore.textContent = scoreTwo      
}

function add3PointGuest() {
    scoreTwo += 3;
   guestScore.textContent = scoreTwo     
}


function reset() {
    scoreOne = 0
    homeScore.textContent = scoreOne;
    
    scoreTwo = 0
    guestScore.textContent = scoreTwo;
}