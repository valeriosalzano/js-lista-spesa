// scrivo gli elementi da includere nella lista della spesa 
const buyMeArray = ['pane','uova','farina','latte','biscotti','frutta','verdura','carne','zucchero'];

// creo il collegamento alla <ul id="list">
const listDom = document.getElementById("list");

// scrivo tutti gli elementi nella lista
let buyMeIndex = 0;
while (buyMeIndex < buyMeArray.length) {

    const listItem = document.createElement('li');
    listItem.innerHTML = buyMeArray[buyMeIndex];
    listDom.append(listItem);

    buyMeIndex++;
};

let listArrayDom = document.querySelectorAll('#list li')

const addArticleBtn = document.getElementById("addArticle");
addArticleBtn.addEventListener('click', 
    function(){
        const userPrompt = prompt("Quale elemento vuoi aggiungere alla lista?");
        const listItem = document.createElement('li');
        listItem.innerHTML = userPrompt;
        listDom.append(listItem);
    }
);

const removeArticleBtn = document.getElementById("removeArticle");
removeArticleBtn.addEventListener('click',
    function(){
        const userPrompt = prompt("Quale elemento vuoi rimuovere dalla lista?");
        let elementToRemove;
        for (let i=0; i<listArrayDom.length; i++){
            if (userPrompt == listArrayDom[i].innerHTML.toString()){
                elementToRemove = document.querySelector(`#list li:nth-of-type(${i+1})`);
                elementToRemove.remove();
            };
        };
        listArrayDom = document.querySelectorAll('#list li');
    }
);