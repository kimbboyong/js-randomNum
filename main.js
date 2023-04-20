// 랜덤번호 지정
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다 !
// 랜덤번호가 < 유저번호 Down !! 
// 랜덤번호가 > 유저번호 Up !!
// reset 버튼을 누르면 게임이 리셋된다
// 5번의 기회를 다쓰면 게임이 끝난다
// 유저가 1~100 범위 밖에 숫자를 입력하면 알려준다 기회를 깎지 않는다
// 유저가 이미 입력한 숫자를 또 입력하면 알려준다 기회를 깎지 않는다


let gameNum = 0;
let chances = 10;
let userInput = document.getElementById('input-number');
let userResult = document.getElementById('result-area');
let chancesTxt = document.getElementById('chances-area');
let playBtn = document.getElementById('input-button');
let userReset = document.getElementById('reset-btn');
let gameOver = false;
let history = [];

function randomNum() {
    gameNum = Math.floor(Math.random() * 50) + 1;
    console.log('정답', gameNum);

}

playBtn.addEventListener('click', play);
userReset.addEventListener('click', reset);
userInput.addEventListener('focus', function () {
    userInput.value = '';
})

function play() {
    let inputVal = userInput.value;

    if (inputVal < 1 || inputVal > 100) {
        userResult.textContent = "1과 100사이 숫자를 입력하삼";
        return;
    }

    if (history.includes(inputVal)) {
        userResult.textContent = "이미 입력했음 다른거 입력하셈"
        return;
    }

    chances--;

    chancesTxt.textContent = chances;
    if (inputVal < gameNum) {
        userResult.textContent = "UP!!!"
    } else if (gameNum < inputVal) {
        userResult.textContent = "DOWN!!!"
    } else {
        userResult.textContent = "ㅊㅋㅊㅋ!"
        gameOver = true;
    }

    history.push(inputVal);
    console.log(history);

    if (chances < 1) {
        gameOver = true;

    }
    if (gameOver == true) {
        playBtn.disabled = true;
    }
}

function reset() {
    userInput.value = ""
    userResult.textContent = ""
    playBtn.disabled = false;
    gameOver = false;
    chances = 5;
    chancesTxt.innerHTML = chances;
    randomNum();
}

function enterKey() {
    if (window.event.keyCode == 13) {
        play();
    }
}


randomNum();



// let computerNum = 0
// let playBtn = document.getElementById('play-button');
// let userInput = document.getElementById('user-input');
// let result = document.getElementById('result-area');
// let resetBtn = document.getElementById('reset-btn');
// let chancesArea = document.getElementById('chances-area');
// let chances = 5;
// let gameOver = false;
// let history = [];

// playBtn.addEventListener('click', play);
// resetBtn.addEventListener('click', reset);

// function pickRandomNum() {
//     computerNum = Math.floor(Math.random() * 100) + 1;
//     console.log('정답', computerNum);
// }

// function play() {
//     let userValue = userInput.value

//     if (userValue < 1 || userValue > 100) {
//         result.textContent = "1과 100사이 숫자를 입력하삼";
//         return;
//     }

//     if (history.includes(userValue)) {
//         result.textContent = '이미입력함 다른숫자 쓰삼';
//         return;
//     }
//     chances--;
//     chancesArea.textContent = `${chances}`;
//     if (userValue < computerNum) {
//         result.textContent = "업 ㅋ"
//     } else if (userValue > computerNum) {
//         result.textContent = "다운 ㅋ"
//     } else {
//         result.textContent = "맞춤 ㅋ"
//         gameOver = true;
//     }

//     history.push(userValue);
//     console.log(history);

//     if (chances < 1) {
//         gameOver = true;
//     }

//     if (gameOver == true) {
//         playBtn.disabled = true;
//     }
// }

// function reset() {
//     // user input 창이 깨끗하게 정리되고
//     userInput.value = ""
//     // 새로운 번호가 생성되고
//     pickRandomNum();

//     result.textContent = ""
// }

// pickRandomNum();