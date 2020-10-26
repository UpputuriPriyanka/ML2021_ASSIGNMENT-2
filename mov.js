
var input = document.querySelector('.input');
var tname = document.querySelector('.title');
var yearnum = document.querySelector('.year');
var direname = document.querySelector('.director');
var rel = document.querySelector('.release');
var cname= document.querySelector('.country');
var awardn = document.querySelector('.awards');
var button= document.querySelector('.submit');

button.addEventListener('click', function( ){
   fetch('http://www.omdbapi.com/?t='+input.value+'&apikey=cdd20ef2')
  .then(response => response.json())
  .then(data => {
      console.log(data);

      var titlename = data['Title'];
      var yearn = data['Year'];
      var reld= data['Released'];
      var directorname = data['Director'];
      var countryname = data['Country'];
       var awardsname = data['Awards'];

      tname.innerHTML = "Movie name - " + titlename;
      yearnum.innerHTML = "Year Number - " + yearn;
      rel.innerHTML = "Release Date - " + reld;
      direname.innerHTML = "Director - " + directorname;
      cname.innerHTML = "Country name - " + countryname;
      awardn.innerHTML = "Awards name - " + awardsname;

      input.value ="";
      $(".main").show();
  })
  .catch(err => {
    alert("Wrong movie name!")
    input.value="";
  });
})

function my6(){
   window.location="index.html";
}