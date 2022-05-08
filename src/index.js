import "./css/styles.css";
import layoutTemplate from "./hbs/layout.hbs";
import mapTemplate from "./hbs/map.hbs";


import module from "./js/module";


const appEl = document.getElementById("app");

const siteInfo = { title: "Sample WebPack+Handlebars Frontend" };
window.document.title = siteInfo.title;



appEl.innerHTML = layoutTemplate(siteInfo);

const contentEl = document.getElementById("content-pane");

contentEl.innerHTML = mapTemplate();
 //console.log(mapboxgl);
mapboxgl.accessToken = "pk.eyJ1IjoicHJpbXVsYTQiLCJhIjoiY2wyYWZwZDI1MDRhNzNqbGE1NnhjNnRwYiJ9.K_oJ1uYJQ4OccUDRPEaq6w";

let map;
let init = async function(){
console.log("hello");
    
if('geolocation' in navigator){
// geo
navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);

});
}else{
    //no geo
    console.log("dfgddfg");
}
mapInit();
}
let mapInit = function(){
   map = new mapboxgl.Map(
       {
           container:'map',
           style: 'mapbox://styles/primula4/cl2nikt1p004m15mz4gbosv1o',
           center:[-75.764 , 45.456],
           zoom: 13.5
       }

   );

}
init();