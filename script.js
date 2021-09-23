var liElements = document.getElementsByTagName("li");

for(let i = 0;i<liElements.length;i++){
    var span = document.createElement("span");
    span.classList = "close";
    var deleteText = document.createTextNode("x");
    span.innerHTML = deleteText.nodeValue;
    liElements[i].appendChild(span);
}

if(localStorage.getItem("sayac") === null){
    var sayac=0;
}
else{
    sayac=localStorage.getItem("sayac");
    let ulLocal = document.getElementById("list");
    for(let element=0;element<sayac;element++){
        let localLi = document.createElement("li");
        if(localStorage.getItem(`newElement${element}`)!=null){
        let newSpan = document.createElement("span");
        let spanText = document.createTextNode("x");
        newSpan.innerHTML=spanText.nodeValue;
        newSpan.classList= "close";
        localLi.id=`${element}`;
        localLi.appendChild(newSpan);
        localLi.appendChild(document.createTextNode(localStorage.getItem(`newElement${element}`)));
        ulLocal.appendChild(localLi);
        }
        
    }
}

function addEvent(){
    var spanElements = document.getElementsByTagName("span");
    for(let i = 0;i<spanElements.length;i++){
    spanElements[i].addEventListener("click",
    function(event){
            if(!(event.composedPath()[0].id==="liveToastBtn")){
                let deleteLi = document.getElementById(event.composedPath()[1].id);
                event.composedPath()[1].style.display = "none";
                localStorage.removeItem(`newElement${deleteLi.id}`);
                deleteLi.remove();
            }
    }
    )
}
    for(let i = 0;i<liElements.length;i++){
        liElements[i].addEventListener("click", function(liEvent){
            liEvent.composedPath()[0].classList.toggle("checked");
        });
    }
}
addEvent();



function localAdd(){
        localStorage.setItem("sayac", sayac);
}

function newElement(){
    var ulList = document.getElementById("list");
    var textBox = document.getElementById("task").value;
    if(textBox != "" && textBox[0] != " "){
        var text = document.createTextNode(textBox);
        var li = document.createElement("li");
        let newSpan = document.createElement("span");
        let spanText = document.createTextNode("x");
        newSpan.innerHTML=spanText.nodeValue;
        newSpan.classList= "close";
        li.appendChild(text);
        li.appendChild(newSpan);
        ulList.appendChild(li);
        li.id=`${sayac}`;
        localStorage.setItem(`newElement${sayac}`, textBox);
        sayac++;
        document.getElementById("task").value = "";
        $('.error').toast('hide')
        $('.success').toast('show')
        localAdd();
    }
    else{
        $('.success').toast('hide')
        $('.error').toast('show')
    }

    
    addEvent();
}
