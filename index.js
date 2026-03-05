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

let count = 3
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