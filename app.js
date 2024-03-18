let lists = document.getElementsByClassName("list")
let items = [1,  2,  3]

// ОТРИСОВКА КОНТЕЙНЕРОВ И КНОПОК НА СТРАНИЦЕ
 container.innerHTML = ` 
 <input id="input" class="input" placeholder=" поиск..." type="text">
 <button id="search" onclick="search()" class="search">ПОИСК</button>
  <div id="left"></div> 
 <div id="right"></div>
 <button id="button" onclick="ButtonAdd()" class="button">ДОБАВИТЬ</button>
 <button id="buttonDrop" onclick="ButtonDrop()" class="buttonDrop">СБРОСИТЬ</button>
 <svg onselectstart="return false" onmousedown="return false" id="buttonRight" onclick="ButtonRight()" class="buttonRight1" width="50"
  height="48" viewBox="0 0 339 324" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="175.778" y1="9.22183" x2="330.859" y2="164.302" stroke="white" stroke-width="22"/>
 <line x1="163.762" y1="315.843" x2="318.843" y2="160.762" stroke="white" stroke-width="22"/>
 <line x1="20.7782" y1="8.22183" x2="175.859" y2="163.302" stroke="white" stroke-width="22"/>
 <line x1="8.76214" y1="314.843" x2="163.843" y2="159.762" stroke="white" stroke-width="22"/>
 </svg>
 
 <svg onselectstart="return false" onmousedown="return false" id="buttonRight" onclick="ButtonLeft()" class="buttonLeft1" width="343"
  height="325" viewBox="0 0 343 325" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="163.843" y1="314.399" x2="8.76217" y2="159.319" stroke="white" stroke-width="22"/>
 <line x1="175.859" y1="7.77818" x2="20.7782" y2="162.859" stroke="white" stroke-width="22"/>
 <line x1="322.843" y1="316.399" x2="167.762" y2="161.319" stroke="white" stroke-width="22"/>
 <line x1="334.859" y1="9.77818" x2="179.778" y2="164.859" stroke="white" stroke-width="22"/>
 </svg>
 
 <svg onselectstart="return false" onmousedown="return false" id="buttonElem" onclick="ButtonElembottom()" class="buttonElembottom1"
  width="323" height="184" viewBox="0 0 323 184" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="314.399" y1="20.7783" x2="159.319" y2="175.859" stroke="white" stroke-width="22"/>
 <line x1="7.77817" y1="8.76223" x2="162.859" y2="163.843" stroke="white" stroke-width="22"/>
 </svg>
 
 <svg onselectstart="return false" onmousedown="return false" id="buttonElem" onclick="ButtonElemtop()" class="buttonElemtop1" width="323" 
 height="184" viewBox="0 0 323 184" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="8.22181" y1="163.843" x2="163.302" y2="8.76217" stroke="white" stroke-width="22"/>
 <line x1="314.843" y1="175.859" x2="159.762" y2="20.7782" stroke="white" stroke-width="22"/>
 </svg>

 <svg onselectstart="return false" onmousedown="return false" id="buttonRight" onclick="ButtonRight()" class="buttonRight2" width="50" 
 height="48" viewBox="0 0 339 324" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="175.778" y1="9.22183" x2="330.859" y2="164.302" stroke="white" stroke-width="22"/>
 <line x1="163.762" y1="315.843" x2="318.843" y2="160.762" stroke="white" stroke-width="22"/>
 <line x1="20.7782" y1="8.22183" x2="175.859" y2="163.302" stroke="white" stroke-width="22"/>
 <line x1="8.76214" y1="314.843" x2="163.843" y2="159.762" stroke="white" stroke-width="22"/>
 </svg>

 <svg onselectstart="return false" onmousedown="return false" id="buttonRight" onclick="ButtonLeft()" class="buttonLeft2" width="343"
  height="325" viewBox="0 0 343 325" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="163.843" y1="314.399" x2="8.76217" y2="159.319" stroke="white" stroke-width="22"/>
 <line x1="175.859" y1="7.77818" x2="20.7782" y2="162.859" stroke="white" stroke-width="22"/>
 <line x1="322.843" y1="316.399" x2="167.762" y2="161.319" stroke="white" stroke-width="22"/>
 <line x1="334.859" y1="9.77818" x2="179.778" y2="164.859" stroke="white" stroke-width="22"/>
 </svg>
 <svg onselectstart="return false" onmousedown="return false" id="buttonElem" onclick="ButtonElembottom()" class="buttonElembottom2" width="323" 
 height="184" viewBox="0 0 323 184" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="314.399" y1="20.7783" x2="159.319" y2="175.859" stroke="white" stroke-width="22"/>
 <line x1="7.77817" y1="8.76223" x2="162.859" y2="163.843" stroke="white" stroke-width="22"/>
 </svg>
 <svg onselectstart="return false" onmousedown="return false" id="buttonElem" onclick="ButtonElemtop()" class="buttonElemtop2" width="323" 
 height="184" viewBox="0 0 323 184" fill="none" xmlns="http://www.w3.org/2000/svg">
 <line x1="8.22181" y1="163.843" x2="163.302" y2="8.76217" stroke="white" stroke-width="22"/>
 <line x1="314.843" y1="175.859" x2="159.762" y2="20.7782" stroke="white" stroke-width="22"/>
 </svg>
 `;

 getElement () //заполнение контейнера
 function search(){ //поиск 
        for(let list of lists)
        list.classList.remove('newClassNone') 
    
    for(let list of lists)
        list.classList.remove('newClassNone')
     console.log(input.value)
    for(let list of lists){
        if(!(list.innerHTML===input.value)) {
        if(!(input.value=='')) 
            list.classList.add('newClassNone')}
        
    }
 }

 function ButtonElembottom() { //перемещение элемента вниз
    if(input.value!=0) return
    iter=0;
    let count=0
    let rem = 0;
    let rem2 = 0;
    let child1;
    let child;
 
    // проверка на количество элементов в левом и правом контейнере
    left1 = document.querySelector('#left')
    if(left1.lastElementChild!=null)
    child = left1.lastElementChild.id
         
    right1 = document.querySelector('#right')

    if(right1.lastElementChild!=null)
        child1 = right1.lastElementChild.id
        
    for(let list of lists){ 

        if((list.id===child||list.id===child1)&&(list.classList.contains('active'))){  
            console.log("Ошибка перемещения")
            return
        }
    }
    for(let list of lists){ 
    if(rem!=0)
{    
    console.log(rem)
     list.classList.add('active')
    document.getElementById(rem).id = list.id 
    list.id = rem;
    document.getElementById(list.innerHTML).innerHTML = list.innerHTML
     
    list.innerHTML = rem2
    rem = 0;
    rem2=0
    count=1;
}
         if(list.classList.contains('active')&&iter==0){ 
         rem=list.id
         rem2 = list.innerHTML
             list.classList.remove('active')
     iter=1; 
    }
        }
// проверка активности элемента
        if(count==0){alert("Для перемещения элемента нажмите на выбранный элемент")}
}

function ButtonElemtop() { //перемещение элемента вверх
    if(input.value!=0) return
    let count = 0
    let left1;
    let right1;
    let remid3;
    let rem3inner;
    let remid4;
    let child1;
    let child;
 
    left1 = document.querySelector('#left')
    if(left1.firstElementChild!=null)
    child = left1.firstElementChild.id
         
    right1 = document.querySelector('#right')

    if(right1.firstElementChild!=null)
        child1 = right1.firstElementChild.id
        
    for(let list of lists){ 

        if((list.id===child||list.id===child1)&&(list.classList.contains('active'))){  
            console.log("Ошибка перемещения")
            return
        }
    }
    for(let list of lists){
        
        if(list.classList.contains('active')){
            remid4 = list.id
            document.getElementById(remid3).innerHTML =  list.innerHTML
            list.innerHTML = rem3inner
            list.id = remid3;
            list.classList.remove('active')
            document.getElementById(remid3).classList.add('active')
            document.getElementById(remid3).id = remid4
            count=1
        }
        remid3 = list.id;
        console.log(remid3)
        rem3inner=list.innerHTML
    }

    if(count==0) alert("Для перемещения элемента нажмите на выбранный элемент")
    }

//кнопка перемещения вправо
function ButtonRight() {
    if(input.value!=0) return
    let t=0; 
  for(let list of lists){
  items[t] = list.id
  t++
  }
  right.innerHTML = ''
    for( let item of items){
        right.insertAdjacentHTML('beforeend',
        getItems(item))}

        left.innerHTML = ''
        DRAGandDROP(); 
        ooo()
        console.log(document.getElementById(1).id)
 }
 //кнопка перемещения влево
function ButtonLeft() {
    if(input.value!=0) return
    t=0
    for(let list of lists){
    items[t] = list.id
    t++
    }
    left.innerHTML = ''
      for( let item of items){
          left.insertAdjacentHTML('beforeend',
          getItems(item))}
  
          right.innerHTML = ''
          DRAGandDROP(); 
          ooo()
          console.log(document.getElementById(1).id)
   }

//кнопка сброса
 function ButtonDrop(){        
    items = [ 1, 2, 3]
    left.innerHTML = ''
    right.innerHTML = ''
    getElement ()
 }

//функции для отрисовкиэлементов контейнера
function getItems(item){
    console.log(item)
return ` <div  id= "${item}" class="list " draggable="true">${item}</div> `
}
function getElement (){   
for( let item of items){
    left.insertAdjacentHTML('beforeend',
    getItems(item))}
    DRAGandDROP(); 
     ooo()
} 

//кнопка добавить
function ButtonAdd() {
    let pushEl = Math.floor(Math.random() * (100 - 4 + 1)) + 4;
      
    items.push(pushEl )
    left.insertAdjacentHTML('beforeend',
    getItems(items[items.length-1])) 
    DRAGandDROP()
     ooo()   
}
function ooo(){
for ( let list of lists){ 
    list.addEventListener("click",function(){
   
        for ( let list of lists)
        list.classList.remove('active')
        this.classList.add('active')       
    })
}
}
// DRAG & DROP(для перемещения элементов мышкой)
function DRAGandDROP(){
   
for ( let list of lists){
    list.addEventListener('dragstart',function(e){
         let selected = e.target;
       setTimeout(() =>{this.classList.add('hide');},0) 
        right.addEventListener("dragover", function(e){
            e.preventDefault();  
        })
        right.addEventListener("dragenter", function(){
            this.classList.add('hovered');   
        })
        right.addEventListener("dragleave", function(){
            this.classList.remove('hovered');   
        })
        
        right.addEventListener("drop", function(){    
            right.appendChild(selected)
            selected = null
            this.classList.remove('hovered');
        })
        left.addEventListener("dragover", function(e){
            e.preventDefault();
        })
        left.addEventListener("drop", function(){
            left.appendChild(selected)
            selected = null
            this.classList.remove('hovered');
        })
        left.addEventListener("dragenter", function(){
            this.classList.add('hovered');

        })
        left.addEventListener("dragleave", function(){
            this.classList.remove('hovered');   
        })
    })
    list.addEventListener('dragend',function(){
        this.classList.remove('hide');})
}
}