/**
 * todo div#root의 자식 요소에 ul, ul의 자식 요소에 li를 넣길 바람
 * todo li의 갯수는 출석부 인원의 갯수만큼
 * todo 출석부의 인원 수는 변동이 가능하기에 해당 부분은 동적 처리바람
 * todo 만들어진 이재영을 클릭하면 css값이 파란색으로 바뀌게
 * todo 이벤트 리스너 클릭, css값 컬러 블루 할당
*/
/**
 * todo export import
 * 만일 [4][0]의 값이 이 라면
 * 클릭 시 색깔을 파랑으로 바꿔줘
*/


// import names from "./name.js"
import {names} from "./name.js"

console.log(names)
console.log(names.length)


const root = document.getElementById(`root`)
// console.log(root)
const mkul = document.createElement('ul')
const mkli = document.createElement('li')
root.appendChild(mkul)
// * root > ul


// mkul.appendChild(mkli)
// console.log(root)
// console.log(root)
// * root > ul > li


  for(let i = 0; i<names.length; i++){
    let a = document.createElement('li')
    // root.children.document.createElement('li')
    mkul.appendChild(a)  
  }
  

  /** 
   * ! root의 자식인 ul에게
   * ! li를 임포팅 한 names의 길이 만큼 만들어 줘
   * 
   * todo ul의 자식으로 li를 만들어야 함
   * todo li의 위치를 특정해야 함
   */
  
/**
 * todo 전역 변수를 함수 내에서 참조해서 사용하는 방법. 
*/




/**
 * 어팬드 차일드
 * 크리에이트 엘리먼트
*/


/**
 * li를 임포트 한 이름의 갯수 만큼 만들어줘
 * for문으로 필요한 구문을 감싸버리면 예상치 이상의 반복이 실행 될 가능성이 높음
 * if문을 넓게 쓰더라도 for문은 되도록 좁게 쓰는게 나을거 같음
 * 
 */

for(let i = 0; i<names.length; i++){
 
  
}













