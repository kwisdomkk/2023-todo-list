const ul=document.querySelector("ul");
const lists=document.querySelectorAll("li:not(.dragging)");

lists.forEach((list)=>{
    list.addEventListener("dragstart",()=>{
        list.classList.add("dragging")
    })
    list.addEventListener("dragend",()=>{
        list.classList.remove("dragging")
    })
})

const initSortableList=e=>{
    e.preventDefault();
    const draggingItem=ul.querySelector(".dragging")
    const siblings=[...ul.querySelectorAll("li:not(.dragging)")]     //  :not(dragging) dragging이 아닌것 

    let nextSibling=siblings.find((sibling)=>{
        return e.clientY<=sibling.offsetTop+sibling.offsetHeight/2;
    })

     ul.insertBefore(draggingItem,nextSibling)    //insertBefore 특정 위치 앞으로 요소 이동
}

function saveToDos(){
    localStorage.setItem("todos",JSON.stringify(toDos))
}

function reSave(newLi){
    toDos=[ ]
    newLi.forEach(item=>{
        const text=item.querySelector("span")
        const newTodoObj={
            text:text.innerText,
            id: item.id
        }
        toDos.push(newTodoObj);
    })
        saveToDos()
}

ul .addEventListener("dragover",initSortableList);
ul.addEventListener("dragenter",(e)=>e.preventDefault())
ul.addEventListener("drop",()=>{
    // console.log("로컬 스토리지 저장")
    const newLi=document.querySelectorAll("li")
    reSave(newLi)
})