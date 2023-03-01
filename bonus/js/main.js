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

// pulsante per aggiungere un articolo
const addArticleBtn = document.getElementById("addArticle");
addArticleBtn.addEventListener('click', 
    function(){
        const userPrompt = prompt("Quale elemento vuoi aggiungere alla lista? (senza maiuscole)");
        // controllo doppioni
        let duplicate = false;
        let i=0;
        // scorro la lista finchè non termina o trovo un doppione
        while ( i<listArrayDom.length && duplicate == false){
            duplicate = (userPrompt == listArrayDom[i].innerHTML.toString());
            i++;
        };
        // ho trovato un doppione
        if (duplicate){
            alert(`${userPrompt} è già presente nella lista.`)
        } else {
            // elemento non duplicato eseguo l'operazione
            const listItem = document.createElement('li');
            listItem.innerHTML = userPrompt;
            listDom.append(listItem);
            listArrayDom = document.querySelectorAll('#list li');
        }
    }
);

// pulsante per rimuovere un articolo
const removeArticleBtn = document.getElementById("removeArticle");
removeArticleBtn.addEventListener('click',
    function(){
        const userPrompt = prompt("Quale elemento vuoi rimuovere dalla lista? (senza maiuscole)");
        // controllo che l'elemento sia in lista
        let elementToRemove="not found";
        let i=0;
        while (i<listArrayDom.length && elementToRemove == "not found"){
            if (userPrompt == listArrayDom[i].innerHTML.toString()){
                // elemento trovato eseguo l'operazione
                elementToRemove = document.querySelector(`#list li:nth-of-type(${i+1})`);
                elementToRemove.remove();
                listArrayDom = document.querySelectorAll('#list li');
            };
            i++;
        };
        if(elementToRemove == "not found") {
            // elemento non trovato
            alert(`${userPrompt} non è presente nella lista.`)
        };
    }
);

// pulsante per contrassegnare come acquistato
const checkedArticleBtn = document.getElementById("checkedArticle");
checkedArticleBtn.addEventListener('click',
    function(){
        const userPrompt = prompt("Quale elemento vuoi contrassegnare come acquistato? (senza maiuscole)");
        // controllo che l'elemento sia in lista
        let elementToCheck = "not found";
        let i=0;
        while (i<listArrayDom.length && elementToCheck == "not found"){
            if (userPrompt == listArrayDom[i].innerHTML.toString()){
                // elemento trovato eseguo l'operazione
                elementToCheck = document.querySelector(`#list li:nth-of-type(${i+1})`);
                elementToCheck.classList.add("checked");
            };
            i++;
        };
        if(elementToCheck == "not found") {
            // elemento non presente nella lista
            alert(`${userPrompt} non è presente nella lista.`)
        }
    }
)

// pulsante per azzerare la lista
const resetListBtn = document.getElementById("resetList");
resetListBtn.addEventListener('click',
    function(){
        // doppia conferma per il reset della lista
        const confirm = prompt("Confermi di voler cancellare la lista? Digita 'si' per procedere.");
        if (confirm === 'si'){
            listDom.innerHTML = "";
        }
    }
)

