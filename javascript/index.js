// kjo krijoj nje element te ri me tag qe i themi ne psh ky kodi posht krijon <li></li>
let li = document.createElement("li");
// ky kodi poshte krijon shkrimin brenda <li>(ketu brenda)</li>
let node = document.createTextNode("ckemi");

// dhe ky kodi tjeter i thot html qe shkrimi qe krijuam duhet te futet brenda li
li.appendChild(node);
console.log(li.children)//lista me element brenda prindit li

// shtoji id ul me ane te metodes qe duhet , ne menyre qe kodi poshte te punoj
//si fillim duhet kapur <ul> ne nje variabel quaje > 'ul' variablen.
// pasi ta kemi kapur variablit ul do i shtojme id me emrin po 'lista'.

let ul = document.getElementsByTagName('ul')[0]
console.log(ul)
ul.setAttribute('id','lista')
/* ketu poshte une po e kap perseri ul me ane te id 
qe ti krijove me siper.*/
let listPaOrganizuar = document.querySelector("#lista");

/* ky kodi ketu i thot html qe <li>ckemi</li> qe ne krijuam duhet te jete brenda <ul></ul>
 */
listPaOrganizuar.appendChild(li);

// kape <div> dhe shtoji class emertoje si te duash.
// shtoji ngjyre shkrimi 'blue'
// shtoji ngjyre sfondi 'lightgray'

let div = document.getElementsByTagName('div')
div[0].style.color = 'blue'
div[0].style.backgroundColor = 'lightgray'

/* Kap h1 dhe shtoji style me vleren color red /
let h1 = document.querySelector("h1");*/


let h1 = document.getElementsByTagName('h1')
h1[0].style.color = 'red'
