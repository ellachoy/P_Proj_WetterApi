console.log('wetter_app')

//2. mit fetch hole die items von json
function loadItems(){ //erstellen loaditems
return fetch(`https://api.openweathermap.org/data/2.5/weather?q={frankfurt}&appid={2b0cb25f287b7f394bba52521a54c757}`)
.then(response=>console.log(response)) // der macht:object 'response' übergeben
}




// 1.wenn json-datei ausgeführt wird,wird sie mit dieser Func.ausgefürt
loadItems()//der macht:daten lesen und mit promise übergeben.
.then(items=>{
    // displayItems(items); // auf dem display anzeigen und zur Func.übergeben
}) //items übergeben.