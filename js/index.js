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
    let value = this.window.scrollY;
    let height = this.window.innerHeight;
    console.log(value);
    console.log(height);
    console.log((value/height)*100)
    
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


    if (inRange(value, 475, 1450)) {
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

    if (inRange(value, 1450, 2405)) {
        if (inThree == false){
            inThree = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'CHEERERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inThree = false
    }

    if (inRange(value, 2405, 3360)) {
        if (inFour == false){
            inFour = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'CODERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inFour = false
    }

    if (inRange(value, 3360, 4315)) {
        if (inFive == false){
            inFive = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'CREATORS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inFive = false
    }

    if (inRange(value, 4315, 5270)) {
        if (inSix == false){
            inSix = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'DOERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inSix = false
    }

    if (inRange(value, 5270, 6225)) {
        if (inSeven == false){
            inSeven = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'INNOVATORS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inSeven = false
    }

    if (inRange(value, 6225, 7180)) {
        if (inEight == false){
            inEight = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'KNIGHTS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inEight = false
    }

    if (inRange(value, 7180, 8135)) {
        if (inNine == false){
            inNine = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'LEARNERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inNine = false
    }

    if (inRange(value, 8135, 9090)) {
        if (inTen == false){
            inTen = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'PLANNERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inTen = false
    }

    if (inRange(value, 9090, 10045)) {
        if (inEleven == false){
            inEleven = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'TEACHERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inEleven = false
    }

    if (inRange(value, 10045, 11000)) {
        if (inTwelve == false){
            inTwelve = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'TECHNICIANS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inTwelve = false
    }

    if (inRange(value, 11000, 11955)) {
        if (inThirteen == false){
            inThirteen = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'THINKERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inThirteen = false
    }

    if (inRange(value, 11955, 12910)) {
        if (inFourteen == false){
            inFourteen = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'WORKERS'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inFourteen = false
    }

    if (inRange(value, 12910, 13865)) {
        if (inFifteen == false){
            inFifteen = true
            changingwords.setAttribute('class', 'changingwords-hide')
            setTimeout(() => {
                changingwords.textContent = 'A TEAM'
                changingwords.setAttribute("class", "changingwords-show");
            }, 300)
            
        }
        
    } else {
        inFifteen = false
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