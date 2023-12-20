const randimage=document.querySelector("#rand-image")
const images=["1.jpg","2.jpg","3.jpg"]

const selectedimage=images[Math.floor(Math.random()*images.length)]
console.log(selectedimage)

const img=document.createElement("img")
img.setAttribute("src",`images/${selectedimage}`)

randimage.appendChild(img)