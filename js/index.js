//Standard Variables
container = $('.container');

//---Selecting elements and entering variables
//   --Buidlings
Big_Ben  = document.getElementById('Big_Ben');
City_Hall  = document.getElementById('CityHall');
Milenium_Wheel  = document.getElementById('Milenium_wheel');
Tower_Bridge  = document.getElementById('Tower_Bridge');
Parliment  = document.getElementById('Parliment');
Shard  = document.getElementById('Shard');
Strata  = document.getElementById('Strata');
//   --Cones and Logos
Github  = document.getElementById('Github');
Github_Cone  = document.getElementById('Github_Cone');
LinkedIn  = document.getElementById('LinkedIn');
LinkedIn_Cone  = document.getElementById('LinkedIn_Cone');
Instagram  = document.getElementById('Instagram');
Instagram_Cone  = document.getElementById('Instagram_Cone');
Plotly  = document.getElementById('Plotly');
Plotly_Cone  = document.getElementById('Plotly_Cone');
Twitter  = document.getElementById('Twitter');
Twitter_Cone  = document.getElementById('Twitter_Cone');
Wordpress  = document.getElementById('Wordpress');
Wordpress_Cone  = document.getElementById('Wordpress_Cone');
//   --Variables
n=0;

//center the container to make it look good
TweenMax.set(container, {
  position: 'absolute',
  top: '50%',
  left: '50%',
  xPercent: -50,
  yPercent: -50
})
TweenMax.set('svg', {
  visibility:'visible'
})

//--- START OF MAIN PROGRAM

//Define main timeline
var mainTl = new TimelineMax;//({repeat: 0});

//Setup initial layout
mainTl.to([Github,Github_Cone,LinkedIn,LinkedIn_Cone,Instagram,Instagram_Cone,Plotly,Plotly_Cone,Twitter,Twitter_Cone,Wordpress,Wordpress_Cone], 0, {autoAlpha: 0},0);

//Start animation

//Millenium_wheel_animations
mainTl.staggerFrom(".MW_Capsules", 1.5, {drawSVG:0}, 0.6, 0.5);

//Big_Ben animations
mainTl.to("#Big_hand", 4, {rotation: 1400, transformOrigin:"left bottom"},1);
mainTl.to("#Small_hand", 4, {rotation: 51, transformOrigin:"right bottom"},1);

//Boat Animations
mainTl.fromTo("#Boat", 20, {x:'-=50'}, {x:'+=30'}, 2);

//Firework animations
mainTl.staggerFromTo(".firework_fillLine", 2, {drawSVG:'90% 100%'}, {drawSVG:'0% 0%'}, 1, 13); //Need to add oncomplete function to call fireworks

//Introduce link cones
mainTl.to([Github,Github_Cone], 5, {autoAlpha: 1},6);
mainTl.to([LinkedIn,LinkedIn_Cone], 5, {autoAlpha: 1},7);
mainTl.to([Instagram,Instagram_Cone], 5, {autoAlpha: 1},8);
mainTl.to([Plotly,Plotly_Cone], 5, {autoAlpha: 1},9);
mainTl.to([Twitter,Twitter_Cone], 5, {autoAlpha: 1},10);
mainTl.to([Wordpress,Wordpress_Cone], 5, {autoAlpha: 1},11);

//Setup Mouse interactions
Big_Ben.addEventListener("click", linkLinkedIn);
City_Hall.addEventListener("click", linkWordpress);
Milenium_Wheel.addEventListener("click", linkInstagram);
Parliment.addEventListener("click", linkLinkedIn);
Tower_Bridge.addEventListener("click", linkTwitter);
Shard.addEventListener("click", linkGithub);
Strata.addEventListener("click", linkPlotly);

Github.addEventListener("click", linkGithub);
Github_Cone.addEventListener("click", linkGithub);
LinkedIn.addEventListener("click", linkLinkedIn);
LinkedIn_Cone.addEventListener("click", linkLinkedIn);
Instagram.addEventListener("click", linkInstagram);
Instagram_Cone.addEventListener("click", linkInstagram);
Plotly.addEventListener("click", linkPlotly);
Plotly_Cone.addEventListener("click", linkPlotly);
Twitter.addEventListener("click", linkTwitter);
Twitter_Cone.addEventListener("click", linkTwitter);
Wordpress.addEventListener("click", linkWordpress);
Wordpress_Cone.addEventListener("click", linkWordpress);

//Create Function for revealing cone and shading in colour

//test function
function myFunction() {
  n=n+1;
  console.log(n);                
}




// Waves Animations
var wavesTL = new TimelineMax();

wavesTL.staggerFromTo(".waveOne_fillLine", 2, {drawSVG:'10% 100%', autoAlpha: 0}, {drawSVG:'0% 0%', autoAlpha: 0.5, repeat: -1}, 1, 0);
wavesTL.staggerFromTo(".waveTwo_fillLine", 2, {drawSVG:'40% 0%', autoAlpha: 0}, {drawSVG:'100% 100%', autoAlpha: 0.7, repeat: -1,}, 0.9, 0);
wavesTL.staggerFromTo(".waveThree_fillLine", 2, {drawSVG:'30% 0%', autoAlpha: 0}, {drawSVG:'100% 100%',autoAlpha: 0.7, repeat: -1,}, 2, 0);

// Millenium Wheel animations
var milleniumTL = new TimelineMax();

milleniumTL.to(["#Mil_Wheel_Main"], 120, {rotation: 360, transformOrigin:"center", repeat: -1, ease:Linear.easeNone},0);

//Fan animations
milleniumTL.staggerTo(["#Fan1", "#Fan2", "#Fan3"], 4, {rotation: 360, transformOrigin:"center", repeat: -1, ease:Linear.easeNone},0.6,0);


//Setup nested timelines


mainTL.add(wavesTL);
mainTL.add(milleniumTL);


//ScrubGSAP
//ScrubGSAPTimeline([mainTL]);
//mainTL.timeScale(0.1);

// ---Make links

function linkGithub() {var win = window.open("https://codepen.io/benisme/", '_blank');win.focus();console.log("https://codepen.io/benisme/");}

function linkLinkedIn() {var win = window.open("https://www.linkedin.com/in/ben-money-coomes/", '_blank');win.focus();console.log("https://www.linkedin.com/in/ben-money-coomes/");}

function linkInstagram() {var win = window.open("https://www.instagram.com/benismememe/", '_blank');win.focus();console.log("https://www.instagram.com/benismememe/");}

function linkPlotly() {var win = window.open("http://www.gridwatch.templar.co.uk/", '_blank');win.focus();console.log("http://www.gridwatch.templar.co.uk/");}

function linkTwitter() {var win = window.open("https://twitter.com/benmoneycoomes?lang=en", '_blank');win.focus();console.log("https://twitter.com/benmoneycoomes?lang=en");}

function linkWordpress() {var win = window.open("https://fridayfrisbee.wordpress.com/", '_blank');win.focus();console.log("https://fridayfrisbee.wordpress.com/");}