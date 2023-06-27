let changingwords = document.getElementById("changingwords");
let wearewords = document.getElementById("wearewords");
let header = document.querySelector('header');
let wearetext = document.getElementById('wearetext')
let inOne = true
let inTwo = false
let inThree = false
let inFour = false
let inFive = false
let inSix = false
let inSeven = false
let inEight = false
let inNine = false
let inTen = false
let inEleven = false
let inTwelve = false
let inThirteen = false
let inFourteen = false
let inFifteen = false

function inRange(x, min, max) {
    return ((x-min)*(x-max) <= 0);
}

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    
    if (inRange(value, 0, 475)) {
        if (inOne == false){
            inOne = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = '2036'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
        }
    } else {
        inOne = false
    }


    if (inRange(value, 475, 1600)) {
        if (inTwo == false){
            inTwo = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'BUILDERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inTwo = false
    }
    
})
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);