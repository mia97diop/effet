var page = document.querySelector('body');
var rectangle = document.getElementById('divs');
 var touche;

page.onkeydown=function ()
{
     touche = event.keyCode;
/*la boucle pour faire monter la division*/
    if(touche == 38)
    {
        rectangle.style.top = '100px';
        rectangle.style.transition = '2s';
/* le temps de la montée */
        setTimeout(function ()
        {
              rectangle.style.top = '400px';
            rectangle.style.transition = '1s';
        }, 1000)
    }
}