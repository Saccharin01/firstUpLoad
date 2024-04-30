// const root = document.getElementById(`root`);
// // console.log(root)

// const h1 = document.createElement(`h1`);
// console.log(h1);
// /**
//  * *콘솔에는 나타나지만 요소에는 root 밖에 없음.
//  */
// document.body.appendChild(h1);
// /**
//  * * 마지막 자식으로 집어넣는 것
//  * * append 덧붙이다.
//  * * DOM API 함수 중 하나.
//  * * 어팬드 챠일드는 필요에 따라서 안 쓸 수도 있음
//  */
// root.appendChild(h1)

// /**
//  * * div 안에 자식 요소로 h1을 할당
//  */

// // ? h1 안에다가 텍스트로 이름 넣기
// h1.textContent = "뭠마?"
// // h1 의 텍스트를 넣는다 이름을

// // let idx = document.querySelectorAll('#root > h1')
// // console.log(idx)

// // let h2 = document.getElementsByTagName(`h1`)
// // h1.id = `what`
// // console.log(h1)

// // ? h1태그에 id값을 할당
// /**
//  * ? root의 자식인 h1을 식별하는 방법은?
//  * 지금 쓴 방법은?
//  * ! 태그 네임 h1에 해당하는 모든 요소를 호출해서 id를 집어넣음
//  * ! 문서 내에 h1이 하나가 아니면 문제가 커질것.
//  * ? 별도의 색인 방법은?
//  * ? root의 자식인 점을 활용?
//  * ? 쿼리셀렉터
//  * ? 선택자
//  * let idx = document.querySelectorAll('#root h1')
// console.log(idx)
//  */

const root = document.getElementById(`root`);
const h1 = document.createElement(`h1`);

// document.body.appendChild(h1);
root.appendChild(h1)

root.children[0].innerHTML = "조우식"

// const idx = document.querySelector(`#root h1`);
// console.log(idx)
// idx.id = `testroot`
// ? 해결한 구문임

const idx = document.querySelectorAll(`#root > h1`)[4];
console.log(idx)
idx.id = `testvalue`

