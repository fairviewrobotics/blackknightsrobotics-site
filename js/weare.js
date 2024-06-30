
var changingwords = document.getElementById("changingwords");

var inOne = true;
var inTwo = false;
var inThree = false;
var inFour = false;
var inFive = false;
var inSix = false;
var inSeven = false;
var inEight = false;
var inNine = false;
var inTen = false;
var inEleven = false;
var inTwelve = false;
var inThirteen = false;
var inFourteen = false;
var inFifteen = false;

(function($) {
    'use strict';
    
    
    $(function() {
      $(window).on('scroll', function() {
        console.log($('.weareimages img').html('').mostVisible()[0].id) 
       
        








        if ($('.weareimages img').html('').mostVisible()[0].id == 'one') {
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


        if ($('.weareimages img').html('').mostVisible()[0].id == 'two') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'three') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'four') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'five') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'six') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'seven') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'eight') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'nine') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'ten') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'eleven') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'twelve') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'thirteen') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'fourteen') {
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

        if ($('.weareimages img').html('').mostVisible()[0].id == 'fifteen') {
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














        
      });
    });
  
    function getMostVisible($elements) {
      var element,
        viewportHeight = $(window).height(),
        max = 0;
  
      $elements.each(function() {
        var visiblePx = getVisibleHeightPx($(this), viewportHeight);
  
        if (visiblePx > max) {
          max = visiblePx;
          element = this;
        }
      });
  
      return $elements.filter(element);
    }
  
    function getVisibleHeightPx($element, viewportHeight) {
      var rect = $element.get(0).getBoundingClientRect(),
        height = rect.bottom - rect.top,
        visible = {
          top: rect.top >= 0 && rect.top < viewportHeight,
          bottom: rect.bottom > 0 && rect.bottom < viewportHeight
        },
        visiblePx = 0;
  
      if (visible.top && visible.bottom) {
        // Whole element is visible
        visiblePx = height;
      } else if (visible.top) {
        visiblePx = viewportHeight - rect.top;
      } else if (visible.bottom) {
        visiblePx = rect.bottom;
      } else if (height > viewportHeight && rect.top < 0) {
        var absTop = Math.abs(rect.top);
  
        if (absTop < height) {
          // Part of the element is visible
          visiblePx = height - absTop;
        }
      }
  
      return visiblePx;
    }
  
  
  
    $.fn.mostVisible = function() {
      return getMostVisible(this);
    }
  
  })(jQuery);