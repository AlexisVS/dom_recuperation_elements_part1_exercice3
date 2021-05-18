// # Instructions :
// >*En utilisant la methode getElementsByTagName et des methodes de parent/enfant/premier element/dernier element/ etc.. PART 2*


// ### 1. Récupère et affiche le premier enfant de la dernière div
// ### 2. Récupère et affiche le dernier enfant de la dernière div
// ### 3. Récupère l'élément i contenu dans le premier p de la dernière div et affiche le
// ### 4. Récupère l'élément b contenu dans le dernier p de la dernière div et affiche le
// ### 5. Affiche l'élément parent de l'élément i
// ### 6. affiche l'élément parent de l'élément b
// ### 7. affiche l'élément suivant le premier enfant de la dernière div


let premierEnfantDerniereDiv = document.getElementsByTagName("div")[2].firstElementChild;
console.log(premierEnfantDerniereDiv);

let dernierEnfantDerniereDiv = document.getElementsByTagName('div')[2].lastElementChild;
console.log(dernierEnfantDerniereDiv);

let i = document.getElementsByTagName('div')[2].getElementsByTagName("p")[0].getElementsByTagName("i")[0]
console.log(i);

let b = document.getElementsByTagName("div")[2].lastElementChild.getElementsByTagName('b')[0];
console.log(b);

let parentI = i.parentElement;
console.log(parentI);

let parentB = b.parentElement;
console.log(parentB);

console.log(premierEnfantDerniereDiv.nextElementSibling);