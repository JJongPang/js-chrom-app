# Chorm App Clone Project

## 구현할 기능 목록
- 현재 시간 구현
- todo list 구현
- 현재 온도, 현재 지역 구현

<br />

## Note
#### Weather API
- API Site(Weather API): https://openweathermap.org/api

```js
function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then(function (reponse) {
            return reponse.json();
        })
        .then(function (json) {
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}
```
- 좌표저장
```js
function saveCoords(coordsObj) {
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}
```
### LocalStorage란?
- 데이터를 사용자 로컬에 보존하는 방식.
- 데이터를 저장, 덮어쓰기, 삭제 등 조작 가능.
- 자바스크립트로 조작.
- 모바일에서도 사용 가능
  
#### 쿠키와 차이점
- 유효 기간이 없고 영구적으로 이용 가능
- 필요할 때 언제든 사용 가능(쿠키는 서버 접속시에 자동 송신)

#### LocalStorage 기본 구성
- 키(key)와 값(value)을 하나의 세트로 저장.
- 도메인과 브라우저별로 저장.
- 값은 반드시 문자열로 저장됨.


### Project URL: https://jjongpang.github.io/js-coordinates-project/