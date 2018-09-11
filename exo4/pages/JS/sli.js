compt = a.length;
/* Mise en place du déplacement */
function Slider(){
    var Obj = document.getElementById('Gallery'); // Conteneur
    var a = Obj.getElementsByTagName("a"); // Selection de tous les lien/images
    var largeur = 0; // Width du conteneur
    var tmp,tmp2;
    var posObj = parseInt(Obj.offsetLeft); // Position du conteneur
     
    tmp = a[(a.length - 1)].style.left; // position du dernier lien/image
    tmp = tmp.split('px');
    largeur = parseInt(tmp[0]) + 150;
    Obj.style.width = largeur + 'px'; // affectation de la taille du conteneur
     
    Timer = setTimeout(function(){
        for(var i = 0 ; i < a.length ; i++){
            if((parseInt(a[i].offsetLeft) + 150) < 0){
                var New = parseInt(a[(i-1) % compt]); // <= C'est ici le PROBLEME !!
                a[i].style.left = (New + 150 + 10) + 'px';
            }
            a[i].style.left = (parseInt(a[i].offsetLeft)-50) + 'px';
        }
        Slider();
         
    },20);
}
compt = a.length;
/* Mise en place du déplacement */
function Slider(){
    var Obj = document.getElementById('Gallery'); // Conteneur
    var a = Obj.getElementsByTagName("a"); // Selection de tous les lien/images
    var largeur = 0; // Width du conteneur
    var tmp,tmp2;
    var posObj = parseInt(Obj.offsetLeft); // Position du conteneur
     
    tmp = a[(a.length - 1)].style.left; // position du dernier lien/image
    tmp = tmp.split('px');
    largeur = parseInt(tmp[0]) + 150;
    Obj.style.width = largeur + 'px'; // affectation de la taille du conteneur
     
    Timer = setTimeout(function(){
        for(var i = 0 ; i < a.length ; i++){
            if((parseInt(a[i].offsetLeft) + 150) < 0){
                var New = parseInt(a[(i-1) % compt]); // <= C'est ici le PROBLEME !!
                a[i].style.left = (New + 150 + 10) + 'px';
            }
            a[i].style.left = (parseInt(a[i].offsetLeft)-50) + 'px';
        }
        Slider();
         
    },20);
}
