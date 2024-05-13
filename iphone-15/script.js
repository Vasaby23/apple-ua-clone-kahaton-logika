let infoNav = document.querySelector(".info-nav");

window.addEventListener('scroll', function () {
  if (window.scrollY > 700) {
    infoNav.style.display = 'block';
  } else {
    infoNav.style.display = 'none';
  }
});
function changePhoto(number) {
  var photo = document.getElementById('photo');
  photo.classList.remove('fade-out');
  photo.classList.remove('fade-in');

  setTimeout(function() {
      photo.src = `/imgs/iphone-${number}.jpg`;

      var allSwitches = document.querySelectorAll('.switch-second');
      allSwitches.forEach(function(element) {
          element.classList.remove('selected-second');
      });
      var selectedSwitch = document.getElementById(`switch_${number}`);
      selectedSwitch.classList.add('selected-second');

      var allLabels = document.querySelectorAll('.switch-label-second');
      allLabels.forEach(function(label) {
          label.classList.remove('selected-label-second');
      });
      var selectedLabel = document.getElementById(`label_${number}`);
      selectedLabel.classList.add('selected-label-second');

      var allNumberings = document.querySelectorAll('.numbering-second');
      allNumberings.forEach(function(num) {
          num.classList.remove('active');
      });
      var selectedNumbering = document.getElementById(`numbering_${number}`);
      selectedNumbering.classList.add('active');
  }, 100);
}
let button = document.querySelector('.button-work-iphone');
let isFixed = false;
window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;
    if (scrollPosition >= 1500 && scrollPosition < 2300) {
        button.classList.add('fixed');
        if (scrollPosition >= 2200 && !isFixed) {
            button.style.position = 'absolute';
            button.style.marginTop = '1500px';
            isFixed = true;
        } else if (scrollPosition < 2200 && isFixed) {
            button.style.position = 'fixed';
            isFixed = false;
        }
        button.style.bottom = (scrollPosition >= 2200) ? '' : '30px';
    } else if (scrollPosition >= 2200) {
        button.classList.add('fixed');
        button.style.position = 'absolute';

    } else {
        button.classList.remove('fixed');
        isFixed = false;
    }
});

let displayDiv = document.querySelector('.display-div');
let isFixedDisplay = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 2600 && scrollPosition < 5000) {
        displayDiv.classList.add('fixed');
        if (scrollPosition >= 4000 && !isFixedDisplay) {
            displayDiv.style.position = 'absolute';
            displayDiv.style.marginTop = '-200px';
            isFixedDisplay = true;
        } else if (scrollPosition < 4000 && isFixedDisplay) {
            displayDiv.style.position = 'fixed';
            isFixedDisplay = false;
        }
        displayDiv.style.bottom = (scrollPosition >= 4000) ? '' : '30px';
    } else if (scrollPosition >= 4000) {
        displayDiv.classList.add('fixed');
        displayDiv.style.position = 'absolute';
    } else {
        displayDiv.classList.remove('fixed');
        isFixedDisplay = false;
    }
});

let displayDiv1 = document.querySelector('.display-div-1');
let isFixedDisplay1 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 4200) {
        displayDiv1.classList.add('fixed-1');
        if (!isFixedDisplay1) {
            displayDiv1.style.position = 'fixed';
            isFixedDisplay1 = true;
        }
        displayDiv1.style.bottom = (scrollPosition >= 5800) ? '' : '30px'; 
    } else {
        displayDiv1.classList.remove('fixed-1');
        isFixedDisplay1 = false;
    }
    if (scrollPosition >= 5800) {
        displayDiv1.style.position = 'absolute';
        displayDiv1.style.marginTop = '1800px'; 
    }
});

let displayDiv2 = document.querySelector('.display-div-2');
let isFixedDisplay2 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 6100) {
        displayDiv2.classList.add('fixed-1');
        if (!isFixedDisplay2) {
            displayDiv2.style.position = 'fixed';
            isFixedDisplay2 = true;
        }
        displayDiv2.style.bottom = (scrollPosition >= 7600) ? '' : '30px'; 
    } else {
        displayDiv2.classList.remove('fixed-1');
        isFixedDisplay2 = false;
    }
    if (scrollPosition >= 7600) {
        displayDiv2.style.position = 'absolute';
        displayDiv2.style.marginTop = '1600px'; 
    }
});

const container = document.querySelector('.container');
  let shift = 0;

  function moveForward() {
    if (shift <= -2950) return;
    shift -= 520;
    container.style.transition = 'transform 0.3s ease-in-out';
    container.style.transform = `translateX(${shift}px)`;
    document.querySelector('.backButton').disabled = false;
    document.querySelector('.forwardButton').disabled = shift <= -2900;
}

  function moveBackward() {
    if (shift === 0) return;
    shift += 520;
    container.style.transition = 'transform 0.3s ease-in-out';
    container.style.transform = `translateX(${shift}px)`
    document.querySelector('.backButton').disabled = shift === 0;
    document.querySelector('.forwardButton').disabled = false;

}
let displayDiv3 = document.querySelector('.display-div-3');
let isFixedDisplay3 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 7800 && scrollPosition <= 11300) {
        displayDiv3.classList.add('fixed-1');
        if (!isFixedDisplay3) {
            displayDiv3.style.position = 'fixed';
            isFixedDisplay3 = true;
        }
        displayDiv3.style.bottom = (scrollPosition >= 10800) ? '' : '30px'; 
    } else {
        displayDiv3.classList.remove('fixed-1');
        isFixedDisplay3 = false;
    }
    if (scrollPosition >= 10800) {
        displayDiv3.style.position = 'absolute';
        displayDiv3.style.marginTop = '2750px'; 
    }
});

let displayDiv4 = document.querySelector('.display-div-4');
let isFixedDisplay4 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 14500 && scrollPosition <= 17100) {
        displayDiv4.classList.add('fixed-1');
        if (!isFixedDisplay4) {
            displayDiv4.style.position = 'fixed';
            isFixedDisplay4 = true;
        }
        displayDiv4.style.bottom = (scrollPosition >= 15800) ? '' : '30px'; 
    } else {
        displayDiv4.classList.remove('fixed-1');
        isFixedDisplay4 = false;
    }
    if (scrollPosition >= 15800) {
        displayDiv4.style.position = 'absolute';
        displayDiv4.style.marginTop = '3100px'; 
    }
});
let displayDiv5 = document.querySelector('.display-div-5');
let isFixedDisplay5 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 16000 && scrollPosition <= 18000) {
        displayDiv5.classList.add('fixed-1');
        if (!isFixedDisplay5) {
            displayDiv5.style.position = 'fixed';
            isFixedDisplay5 = true;
        }
        displayDiv5.style.bottom = (scrollPosition >= 17100) ? '' : '30px'; 
    } else {
        displayDiv5.classList.remove('fixed-1');
        isFixedDisplay5 = false;
    }
    if (scrollPosition >= 17100) {
        displayDiv5.style.position = 'absolute';
        displayDiv5.style.marginTop = '2500px'; 
    }
});

let displayDiv6 = document.querySelector('.display-div-6');
let isFixedDisplay6 = false;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition >= 17200 && scrollPosition <= 20000) {
        displayDiv6.classList.add('fixed-1');
        if (!isFixedDisplay6) {
            displayDiv6.style.position = 'fixed';
            isFixedDisplay6 = true;
        }
        displayDiv6.style.bottom = (scrollPosition >= 18000) ? '' : '30px'; 
    } else {
        displayDiv6.classList.remove('fixed-1');
        isFixedDisplay6 = false;
    }
    if (scrollPosition >= 18000) {
        displayDiv6.style.position = 'absolute';
        displayDiv6.style.marginTop = '3500px'; 
    }
});
