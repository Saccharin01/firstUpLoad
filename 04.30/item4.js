// import names from "./name.js"
import {names} from "./name.js"


const root = document.getElementById(`root`)
const mkul = document.createElement('ul')
root.appendChild(mkul)
// * root > ul


  for(let i = 0; i<names.length; i++){
    let a = document.createElement('li')
    mkul.appendChild(a)
    a.innerHTML = names[i]
    
    names[i][0] == "이" && names[i][1] == "재" ? 
    a.addEventListener('click',() => blue(a)) : ""
    
        
        // if(a.style.color == ""){
        //   a.addEventListener('click',() => blue(a))
        // }
        // else{}
  }

    /**
     * ? 컨디션의 값이 true라면 색깔을 파랑으로 바꿔주는 이벤트 리스너를 추가해줘
     * ? fales면 아무것도 하지 마
     * ? 어딘가에 가둬버릴 수 있지 않을까?
     * 
     */
  
  console.log(root)
  
  function blue(b){
    b.style.color = 'blue';
  }

  function rb(c){
    c.style.color = 'black';
  }


  /**
   * 
   * ? 그럼 이건 이벤트 핸들러인가?
   * ? 이벤트 리스너를 쓰고싶은데
   * 
   */