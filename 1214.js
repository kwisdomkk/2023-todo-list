const toDoForm=document.querySelector('#todo-form')
const toDoInput=document.querySelector('#todo-form input')
const toDoList=document.querySelector('#todo-list')

let toDos=[ ]

function saveToDos(){
    // console.log(toDos)
    localStorage.setItem('todos',JSON.stringify(toDos))  //JSON.stringify( ) JSON문자열로 저장 //setItem('key',value) 키에 데이터 쓰기
}

function deleteToDo(e){
    const li=e.target.parentElement
    li.remove();
    toDos=toDos.filter((item)=>item.id !==parseInt(li.id))
    saveToDos()
}

function paintToDo(newTodo) {
    const li=document.createElement('li');
    li.setAttribute("id",newTodo.id)
    const span=document.createElement('span');
    const button=document.createElement('button');
    
    button.innerText="❌"
    button.addEventListener('click',deleteToDo)
    span.innerText=newTodo.text;
    li.appendChild(span)
    li.appendChild(button)
    toDoList.appendChild(li)
}


function handleToDoSubmit (event) {
    event.preventDefault();            //submit의 기본동작(새로고침)을 실행하지 않도록 지정
    // console.log(toDoInput.value)
    const newTodoObj={
        text: toDoInput.value,
        id: Date.now()
    }
    toDoInput.value="";
    // 그려주는 함수
    paintToDo(newTodoObj)
    //로컬스토리지에 저장하는 함수
    toDos.push(newTodoObj)
    saveToDos();
}

toDoForm.addEventListener('submit',handleToDoSubmit)    //(event,event가 발생했을 때 실행될 함수)  

const savedToDos=localStorage.getItem('todos') //getItem('key') 키로 부터 데이터 읽기

if(savedToDos !==null){
    const parsedToDos=JSON.parse(savedToDos)
    toDos=parsedToDosgit
    toDos.forEach(paintToDo)
}

console.log(toDoList)




















