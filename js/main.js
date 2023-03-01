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

