const clockContainer = document.querySelector('.js-clock');
const clockTitle = document.querySelector('h1');

function getTime() {
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init() {
    setInterval(getTime, 1000);
}

init();

// setInterval(fn, 1000) =>  첫번째는 함수 값, 두번 째 실행할 시간 간격
