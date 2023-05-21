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
        userResult.textContent = "1과 50사이 숫자를 입력해주세요.";
        return;
    }

    if (history.includes(inputVal)) {
        userResult.textContent = "이미 입력한 숫자입니다."
        return;
    }

    chances--;

    chancesTxt.textContent = chances;
    if (inputVal < gameNum) {
        userResult.textContent = "UP!!!"
    } else if (gameNum < inputVal) {
        userResult.textContent = "DOWN!!!"
    } else {
        userResult.textContent = "정답입니다 !!"
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
    chances = 10;
    chancesTxt.innerHTML = chances;
    randomNum();
}

function enterKey() {
    if (window.event.keyCode == 13) {
        play();
    }
}


randomNum();