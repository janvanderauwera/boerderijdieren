const dieren = [{
  naam : "Haan", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/hahn_kikeriki.mp3",
  image : "Boerderij/dieren/haan.png", 
},

{
  naam : "Kip", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/huehner.mp3",
  image : "Boerderij/dieren/kip.png", 

},
{
  naam : "Koe", 
  audio : "https://www.fesliyanstudios.com/play-mp3/6520",
  image : "Boerderij/dieren/koe.png", 

},
{
  naam : "Kuiken", 
  audio : "Boerderij/dieren/Audio/chick.mp3",
  image : "Boerderij/dieren/kuiken.png", 

},
{
  naam : "Lam", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/schaf.mp3",
  image : "Boerderij/dieren/lam.png", 

},
{
  naam : "Paard", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/pferd_whinnert.mp3",
  image : "Boerderij/dieren/paard.png", 

},
{
  naam : "Schaap", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/schafe.mp3",
  image : "Boerderij/dieren/schaap.png", 

},
{
  naam : "Stier", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/ochse.mp3",
  image : "Boerderij/dieren/stier.png", 

},

/*{
  naam : "Kat", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Katze_miaut.mp3",
  image : "Boerderij/dieren/kat.png", 

},
*/
/*{
  naam : "Hond", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Bluthund_jault.mp3",
  image : "Boerderij/dieren/hond.png", 

},
*/
/*{
  naam : "Geit", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Ziege.mp3",
  image : "Boerderij/dieren/geit.png", 

},
*/
/*{
  naam : "Pony", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Pony.mp3",
  image : "Boerderij/dieren/pony.png", 

},
*/
/*{
  naam : "Gans", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Gaense.mp3",
  image : "Boerderij/dieren/gans.png", 

},
*/
/*{
  naam : "Kalkoen", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/truthahn.mp3",
  image : "Boerderij/dieren/kalkoen.png", 

},
*/
/*{
  naam : "Eend", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/Ente_quackt.mp3",
  image : "Boerderij/dieren/eend.png", 

},
*/
/*{
  naam : "Ezel", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/09/donkey.mp3",
  image : "Boerderij/dieren/ezel.png", 

},
*/
{
  naam : "Varken", 
  audio : "https://freeanimalsounds.org/wp-content/uploads/2017/07/schwein.mp3",
  image : "Boerderij/dieren/varken.png", 

},

];

let html =  "";

dieren.forEach((dier)=>{

let naam = dier.naam;
let image = dier.image;

html += `<div class="container">
<img class="boerderijDier" data-animal-name=${naam} src=${image}>
<div class="boerderijDierNaam">${naam}</div>
</div>

`




});

document.querySelector(".wrapper").innerHTML = html;

let dierenFotos = document.querySelectorAll(".boerderijDier");
let dierenGeluid = document.querySelector(".dierGeluid");
dierenFotos.forEach((foto)=>{
  foto.addEventListener ("click", function(){
   
    let dierNaam = foto.dataset.animalName;
    let matchingDier;
    dieren.forEach((dier)=>{
      if (dier.naam === dierNaam){
        matchingDier = dier;
      }
    });
if (matchingDier){
  dierenGeluid.src = matchingDier.audio;
}

console.log (dierenGeluid.src);
dierenGeluid.play();



  });

  
});







function geluid() {
  var audio = document.getElementById("audio");
  audio.play();
}

/*<input type="button" value="PLAY" onclick="geluid()">*/
