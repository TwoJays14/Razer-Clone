'use strict';

const parallax = document.querySelector('.article-container');

window.addEventListener('scroll', function() {
  let offset = window.pageYOffset;
  parallax.style.img = offset * 0.7 + 'px';

})





function solution(D, S) {
    
  return D + parseInt(S)

  
}

console.log(solution(2, 'two'))

console.log(Number("two"))