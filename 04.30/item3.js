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


// console.log(names)
// console.log(names.length)

const root = document.getElementById(`root`)
const mkul = document.createElement('ul')



/** 
 * ! root의 자식인 ul에게
 * ! li를 임포팅 한 names의 길이 만큼 만들어 줘
 * 
 * todo ul의 자식으로 li를 만들어야 함
 * todo li의 위치를 특정해야 함
 */


  // for(let i = 0; i<names.length; i++){
  //   let a = document.createElement('li')
  //   mkul.appendChild(a)
  //   a.innerHTML = names[i]
  //   names[i][0] == "이" && names[i][1] == "재" ? console.log(names[i]) : console.log(i)
  // }


  // for(let i = 0; i<names.length; i++){
  //   let a = document.createElement('li')
  //   mkul.appendChild(a)
  //   a.innerHTML = names[i]


  //   names[i][0] == "이" && names[i][1] == "재" ? 
  //   (addEventListener('click',() => blue(a)), addEventListener('mouseout',() => rb(a)))   :
  //   console.log(i)
  // }
  // function blue(b){
  //   b.style.color = 'blue';
  // }

  // function rb(c){
  //   c.style.color = 'black';
  // }

  for(let i = 0; i<names.length; i++){
    let a = document.createElement('li')
    mkul.appendChild(a)
    a.innerHTML = names[i]


    names[i][0] == "이" && names[i][1] == "재" ? 
    a.addEventListener('click',() => blue(a))   :
    console.log(i)

    // if(a.style.color == "blue"){
    //   a.addEventListener('click',() => rb(a))}
    
  }
  

  function blue(b){
    b.style.color = 'blue';
  }

  function rb(c){
    c.style.color = 'black';
  }

  /**
   * ? 매개변수는 자리만 잡아준거고
   * ? 저 위에 삼항연산자 안에 a는 for문 블럭 안에 선언된 a임
   * ? a는 생성된 요소 li를 지칭
   */



  // console.log(names[0].style)


// console.log(root)
// console.dir(names)
// console.log(names)

/**
 * todo 전역 변수를 함수 내에서 참조해서 사용하는 방법. 
 * ! 만일 전역 변수가 반복문을 포함한 변수였으면 사용이 가능했음.
 * ! 다만, 그게 긍정적인 방법였을지는 의문임
 * ! 변수 스코프는 좁을 수록 좋음.
*/