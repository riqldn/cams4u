
const menutoggle = document.querySelector(".bars")
const bars = document.getElementsByClassName("bar")
const menu = document.querySelector(".menu")
const card = document.getElementsByClassName("card")
const cardImg = document.getElementsByClassName("imgCard")
var pos = 0

var cards = document.getElementsByClassName("cardF")
const cardContainer = document.querySelector(".findCards")
const arrowRight = document.querySelector(".fa-arrow-alt-circle-right")
const arrowLeft = document.querySelector(".fa-arrow-alt-circle-left")
//3d hover animation
Array.from(card).forEach(e => {
    e.addEventListener("mousemove", () => {
        e.style.transform = `rotateY(50deg)`
        if (screen.width > 321) {
            e.firstElementChild.style.transform = 'translateZ(50px)'
            e.lastElementChild.style.transform = 'translateZ(90px)'
        }
        else if (screen.width < 321) {
            e.firstElementChild.style.transform = 'translateZ(30px)'
            e.lastElementChild.style.transform = 'translateZ(50px)'
        }
    })
    e.addEventListener("mouseleave", () => {
        e.style.transform = 'rotateY(0deg)'
        e.firstElementChild.style.transform = 'translateZ(0px)'
        e.lastElementChild.style.transform = 'translateZ(0px)'
    })
})
menutoggle.addEventListener("click", () => {
    Array.from(bars).forEach(e => {
        e.classList.toggle("active")

    })
    menu.classList.toggle("active")
})
arrowLeft.style.opacity = 0.5;
//function for mobile carousel
function shiftright() {
    if (pos != -600) {
        pos = pos - 300;
        cards[0].style.marginLeft = `${pos}px`
        console.log(pos)
        arrowRight.style.opacity = 1;
    }
    if (pos == -600) {
        arrowRight.style.opacity = 0.5;

    }
    if (pos < 0) {
        arrowLeft.style.opacity = 1;
    }
}
function shiftleft() {
    arrowRight.style.opacity = 1;
    if (pos == -300) {
        arrowLeft.style.opacity = 0.5;
    }



    if (pos != 0) {

        pos = pos + 300;
        cards[0].style.marginLeft = `${pos}px`
        console.log(pos)
    }

}
arrowRight.addEventListener('click', shiftright)
arrowLeft.addEventListener('click', shiftleft)
const containers = document.querySelector(".container.find")
const containerOur = document.querySelector(".container.our")
const containerNew = document.querySelector(".container.new")
var rect2 = containerOur.getBoundingClientRect()
var rect3 = containerNew.getBoundingClientRect()
var rect = containers.getBoundingClientRect()
console.log(rect.top)
console.log(window.pageYOffset)
//event listener to show containers on scroll
    window.addEventListener("scroll", () => {
        if (window.pageYOffset > rect.top - 500) {
            containers.style.opacity = 1

        }
        if (window.pageYOffset > rect2.top - 600) {
            containerOur.style.opacity = 1
        }
        if (window.pageYOffset > rect3.top - 400) {
            containerNew.style.opacity = 1
        }

    })
