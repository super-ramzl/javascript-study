const button =  document.querySelectorAll('.tab-button');
const content = document.querySelectorAll('.tab-content');
const list = document.querySelectorAll('.list li').length; // .querySelectorAll로 .list 안의 li의 갯수를 변수에 저장함. 적절한 사용은 확장성에 용이. 



for(let i=0; i<list; i++){
    button[i].addEventListener('click', function(){ 
        for(let i=0 ; i<list ;  i++){
            button[i].classList.remove('orange');
            content[i].classList.remove('show');
        }
      
        button[i].classList.add('orange'); 
        content[i].classList.add('show'); 
    
    });
    
}

