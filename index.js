function scrollToSection(){
document.getElementById("next").scrollIntoView({
behavior:"smooth"
})
}


const particlesContainer = document.getElementById("particles")

for(let i=0;i<40;i++){

let particle = document.createElement("div")

particle.classList.add("particle")

particle.style.left = Math.random()*100+"vw"
particle.style.animationDuration = (3 + Math.random()*5)+"s"
particle.style.animationDelay = Math.random()*5+"s"

particlesContainer.appendChild(particle)

}



/* COUNTDOWN INTRO */

let count = 5
const countdownElement = document.getElementById("countdown")
const screen = document.getElementById("countdown-screen")

const timer = setInterval(()=>{

count--

if(count>0){

countdownElement.textContent = count

}else{

countdownElement.textContent = "👑"

setTimeout(()=>{
screen.style.opacity="0"

setTimeout(()=>{
screen.style.display="none"
},1000)

},800)

clearInterval(timer)

}

},1000)

document.addEventListener("click", function(e){

let heart = document.createElement("div")

heart.classList.add("heart")

heart.innerHTML="💖"

heart.style.left = e.clientX + "px"
heart.style.top = e.clientY + "px"

document.body.appendChild(heart)

setTimeout(()=>{
heart.remove()
},2000)

})

const candles = document.querySelectorAll(".candle")


candles.forEach(candle => {

candle.addEventListener("click", () => {

candle.style.opacity="0"

/* confetti */

for(let i=0;i<40;i++){

let confetti=document.createElement("div")
confetti.className="confetti"
confetti.innerHTML=["🎉","✨","💖","🎊"][Math.floor(Math.random()*4)]
confetti.style.left=Math.random()*100+"vw"

document.body.appendChild(confetti)

setTimeout(()=>confetti.remove(),3000)

}


/* balloons */

for(let i=0;i<12;i++){

let balloon=document.createElement("div")
balloon.className="balloon"
balloon.innerHTML="🎈"
balloon.style.left=Math.random()*100+"vw"
balloon.style.bottom="-50px"

document.body.appendChild(balloon)

setTimeout(()=>balloon.remove(),6000)

}


/* floating memories */

const memories=[
"assets/bestie.jpeg",
"assets/bestie1.jpeg",
"assets/bestie2.jpeg",
"assets/bestie3.jpeg",
"assets/bestie4.jpeg",
"assets/bestie5.jpeg",
"assets/bestie6.jpeg",
]

for(let i=0;i<20;i++){

let img=document.createElement("img")

img.src=memories[Math.floor(Math.random()*memories.length)]

img.className="memory"

img.style.left=Math.random()*100+"vw"

document.body.appendChild(img)

setTimeout(()=>img.remove(),10000)

}


/* show message */

document.getElementById("finalMessage").classList.remove("hidden")

})

})