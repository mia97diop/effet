 /*bouton hauteur*/
 var hauteur=document.getElementById('button_hauteur');
var figure=document.getElementById('div');
hauteur.addEventListener('click',form);
function form()
{
	figure.style.height="110px";
}
 /*bouton rectangle vert*/
function rectangle()
{
	var elmt = document.getElementById("div");	
	elmt.style.backgroundColor = "green";// on modifie son style
}

 /*couleur initial*/
 function initial()
 {
 	 var elmt = document.getElementById("div");	
	elmt.style.backgroundColor = "pink";// on modifie son style
 }

 /*rectangle disparait*/
function  disparait()
{
	 //Pour masquer la division :
	 var ami = document.getElementById("div");	
	 ami.style.visibility ='hidden';
}

 /*rectangle réaparait*/
///Pour afficher la division :
function remettre()
{
	var ami = document.getElementById("div");
	ami.style.visibility = 'visible';
}
