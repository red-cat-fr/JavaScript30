/**
 * Created by nausicaaj on 19/12/2016.
 */

    //je selectionne tout mes panneaux
const panels = document.querySelectorAll('.panel');

//fajoute et supprime  la classe 'open' qui permet d'ouvrir et de fermer mes panneaux quand on clique dessus
function openWide() {
    this.classList.toggle('open');
}


//ajoute et supprime la clacce 'open-active' pour recentrer les mot du haut et du bas
function callWords(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex'))      this.classList.toggle('open-active');

}
//on aurait pu mettre (e.propertyName === 'flex-box' mais ça aurait été pas très bien compris par safary
panels.forEach(panel => panel.addEventListener('click', openWide));
panels.forEach(panel => panel.addEventListener('transitionend', callWords));
