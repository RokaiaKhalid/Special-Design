// Check If There's LOcal Storage Color Option
let mainColor = localStorage.getItem('colorOption');
console.log(mainColor);

if (mainColor !== null) {
  
  // active Color Style This it Found In Lacal Storage
  document.documentElement.style.setProperty('--main-color', mainColor);

  // Action Active On Color 
  document.querySelectorAll('.colors-list li').forEach(ele => {
    ele.classList.remove('active');
    if (ele.dataset.color === mainColor) {
      ele.classList.add('active');
    }
  })

}

// Random Background Option
let backgroundOption = true;

// Variable To Control The Interval
let backgroundInterval;

// Check If Local STorage  is in her bacgroundOption
if (localStorage.getItem('backgroundOption') !== null) {

  if (localStorage.getItem('backgroundOption') === 'true') {

    backgroundOption = true;

  } else {

    backgroundOption = false;

  }

  // Remove Active Class From All Span
  document.querySelectorAll('.random-backgrounds span').forEach(ele => {

    ele.classList.remove('active');

  });

  if (localStorage.getItem('backgroundOption') === 'true') {

    document.querySelector('.random-backgrounds .yes').classList.add('active');

  } else {

    document.querySelector('.random-backgrounds .no').classList.add('active');

    // Show The Background Images Box
    document.querySelector('.backgrounds-list').style.display = 'flex';

    // Stop Random Backgrounds
    clearInterval(backgroundInterval);

    // Choose Background From Local Storage
    if (localStorage.getItem('background')) {

      // Add The Background From Local Storage
      document.querySelector('.landing-page').style.backgroundImage = `Url('Img/${localStorage.getItem('background')}.jpg')`;

      // Loop On imgs Box
      document.querySelectorAll('.backgrounds-list img').forEach(back=> {

        // Check To adding The Active Class
        if (back.dataset.name === localStorage.getItem('background')) {

          // document.querySelectorAll('.backgrounds-list img').forEach(ele => ele.classList.remove('active'));
          // Adding Active Class To Image => true
          back.classList.add('active');

        }

      })
    }

  }

}
// if (localStorage.getItem('backgroundOption') === "false") {

//   // Remove Active Class From Yes span
//   document.querySelector('.random-backgrounds span:first-of-type').classList.remove('active');

//   // Add active Class To No Span
//   document.querySelector('.random-backgrounds span:nth-of-type(2)').classList.add('active');

//   // Show The Background Images Box
//   document.querySelector('.backgrounds-list').style.display = 'flex';

//   // Stop Random Backgrounds
//   clearInterval(backgroundInterval);

//   // Choose Background From Local Storage
//   if (localStorage.getItem('background')) {

//     // Add The Background From Local Storage
//     document.querySelector('.landing-page').style.backgroundImage = `Url('Img/${localStorage.getItem('background')}.jpg')`;

//     // Loop On imgs Box
//     document.querySelectorAll('.backgrounds-list img').forEach(back=> {

//       // Check To adding The Active Class
//       if (back.dataset.name === localStorage.getItem('background')) {

//         // document.querySelectorAll('.backgrounds-list img').forEach(ele => ele.classList.remove('active'));
//         // Adding Active Class To Image => true
//         back.classList.add('active');

//       }

//     })
//   }

// } else {
//   randomizeImgs();
// }

// Toggle Spin Class On Icon
let settingIcon = document.querySelector('.toggle-setting .i-gear');

settingIcon.onclick = function () {
  // Toggle Class fa-spin For Rotation On Self
  this.classList.toggle('fa-spin');
  
  // Toggle Class Open On Main Settings Box
  document.querySelector('.settings-box').classList.toggle('open');

}

// Switch Colors
const colorLi = document.querySelectorAll('.colors-list li');

// Loop On List Items
colorLi.forEach(li => {

  // Click On Every List Items
  li.addEventListener('click', (e) => {
    console.log(e.target.dataset.color);

    // Set Color On Root
    document.documentElement.style.setProperty('--main-color', e.target.dataset.color);

    // Set Color On Local Storage
    localStorage.setItem('colorOption', e.target.dataset.color);

    // Handle Active
    handleActive(e);
  })


})

// Switch Random Background Option
const randomBackEl = document.querySelectorAll('.random-backgrounds span');

// setting IMages Box
const imgsBox = document.querySelector('.backgrounds-list'),
  imgsBoxList = document.querySelectorAll('.backgrounds-list img');

let imgsArray = ['backone', 'backtwo', 'backthree', 'backfour', 'backfive'];

// Loop On All Spans
randomBackEl.forEach(span => {

  // Click On Every Span
  span.addEventListener('click', e => {

    // Handle Active
    handleActive(e);
    
    if (e.target.dataset.background === 'yes') {
      
      // Change BackgroundOption To True
      backgroundOption = true;

      // Run Function randommizeImgs
      randomizeImgs();

      // Hidden The Images Box
      imgsBox.style.display = 'none';

      // Add Background Option In Local Storage
      localStorage.setItem('backgroundOption', backgroundOption);

    } else {
      
      // Change The BackgroundOption To False
      backgroundOption = false;

      // Stopping The Background Random
      clearInterval(backgroundInterval);

      // Show Images Box
      imgsBox.style.display = 'flex';

      // Add Background Option In Local Storage
      localStorage.setItem('backgroundOption', backgroundOption);

      // Show Last Background
      imgsBoxList.forEach(img => {

        // Check If RandomImgs Find In local Storage
        if (localStorage.getItem('randomImgs') !== null) {
          
          // Check If Image is same Background
          if (img.dataset.name === imgsArray[localStorage.getItem('randomImgs')]) {
            
            // Add Active To True Image
            img.classList.add('active')
          }
        }
  
      });
      
    }

  })
})


// Looping To Backgrounds List (imgs Box)
imgsBoxList.forEach(img => {


  img.addEventListener('click', e => {

    // Handle Active
    handleActive(e);

    // Change Background To Landing Page
    document.querySelector('.landing-page').style.backgroundImage = `Url('Img/${e.target.dataset.name}.jpg')`;
    
    // Setting Local Storage
    localStorage.setItem('background', e.target.dataset.name);

  });

})

// Select Landing Page Element
let landingPage = document.querySelector('.landing-page');

// Get Array Of Images

// Function To Randomize Imgs
function randomizeImgs() {
  // Change Background Image 
  if (backgroundOption === true) {
    backgroundInterval = setInterval(() => {
    
      // Get Random Number
      let randomNumber = Math.floor(Math.random() * imgsArray.length);

      // Store RandomNumber in local Storage
      localStorage.setItem('randomImgs', randomNumber);
  
      // The Change To image
      landingPage.style.backgroundImage = 'Url("Img/' + imgsArray[randomNumber] + ".jpg"+ '")';
      
    }, 1000);
  }
  
}
randomizeImgs()
// Select Skills Selector
let ourSkills = document.querySelector('.skills');
window.onscroll = function () {
  
  // Skills Offset Top
  let skillsOffsetTop = ourSkills.offsetTop;

  // Skills Outer Height
  let skillsOuterHeight = ourSkills.offsetHeight;

  // Window Height
  let windowHeight = this.innerHeight;

  // Window ScrollTop
  let windowScrollTop = this.scrollY;

  if (windowScrollTop > (skillsOffsetTop + skillsOuterHeight - windowHeight)) {

    // console.log('Reach');
    let allSkills = document.querySelectorAll('.skill-box .skill-progress span');

    allSkills.forEach(skill => {


      skill.style.width = skill.dataset.progress;
    })

  }

}

// Create Popup With The Image
let ourGallery = document.querySelectorAll('.gallery img');

ourGallery.forEach(img => {

  img.addEventListener('click', (e) => {
    
    // Create Overlay Element
    let overlay = document.createElement('div');

    // Add Class To Overlay
    overlay.className = 'popup-overlay';

    // Append Overlay To The Body
    document.body.appendChild(overlay);

    // Create The Popup
    let popupBox = document.createElement('div');

    // Add Class To The Popup Box
    popupBox.className = 'popup-box';

    // Create The Image
    let popupImage = document.createElement('img');

    // set Image Source 
    popupImage.src = img.src;

    // Add Image To Popup Box
    popupBox.appendChild(popupImage);

    // Append The Popup Box To Body
    overlay.appendChild(popupBox);

    if (img.alt !== null) {

      // Create Heading
      let imgHeading = document.createElement('h3');

      // Create Text For Heading
      let imgText = document.createTextNode(img.alt);

      // Append The Text To The Heading
      imgHeading.appendChild(imgText);

      // Append The Heading To The Popup Box
      popupBox.prepend(imgHeading);

      // Create The Close Span
      let closeBtn = document.createElement('span');

      // Add Text To Clase Button
      closeBtn.appendChild(document.createTextNode('X'));

      // Add Class To Close Button
      closeBtn.className = 'close-button';

      // Append Close Button To Popup Box
      popupBox.appendChild(closeBtn);

    };

  });

});

// Close Popup
document.addEventListener('click', function (e) {

  if (e.target.className == 'close-button') {

    // Remove the Current Popup
    // e.target.parentNode.remove()

    // Remove Overlay
    // document.querySelector('.popup-overlay').remove()
    e.target.parentElement.parentElement.remove();

  }

})

// Function The Arriving To Sections
function arrivingSection(elements) {

  elements.forEach(ele => {

    ele.addEventListener('click', (e) => {
      e.preventDefault();
  
      document.querySelector(e.target.dataset.section).scrollIntoView({
  
        behavior: "smooth",
  
      })
  
    });
  
  });
  

};

// Select All Links
const allLinks = document.querySelectorAll('.links a');

// Access On Links
arrivingSection(allLinks);

// Select All Bullets
const allBullets = document.querySelectorAll('.nav-bullets .bullet');

// Access On Bullets
arrivingSection(allBullets);

// Handle Active State
function handleActive(ev) {

  // Remove Active Class From All Colors
  // colorLi.forEach(e => e.classList.remove('active'));
  ev.target.parentElement.querySelectorAll('.active').forEach(e => e.classList.remove('active'));

  // Add Active Class To The Target Color
  ev.target.classList.add('active');
  
}

let bulletsSpan = document.querySelectorAll('.option-box .bullets span');

let bulletsContainer = document.querySelector('.nav-bullets');

let bulletsLocalItem = localStorage.getItem('bullets_option');

if (bulletsLocalItem !== null) {

  bulletsSpan.forEach(span => {

    span.classList.remove('active');

  });

  if (bulletsLocalItem === 'yes') {
  
    bulletsContainer.style.display = "block";

    document.querySelector('.option-box .bullets .yes').classList.add("active");
    
  } else {
  
    bulletsContainer.style.display = "none";
  
    document.querySelector('.option-box .bullets .no').classList.add("active");

  }

}


bulletsSpan.forEach(span => {

  span.addEventListener('click', e => {

    if (span.dataset.show === 'yes') {

      bulletsContainer.style.display = 'block';

      // Storge IN Local Storage
      localStorage.setItem('bullets_option', e.target.dataset.show);

    } else {

      bulletsContainer.style.display = 'none';

      // Storge IN Local Storage
      localStorage.setItem('bullets_option', e.target.dataset.show);
    }

    handleActive(e);
  })

});

// Reset Button
document.querySelector('.reset-options').onclick = function (e) {

  // Style This Button
  document.querySelector(".reset-options").style.cssText = 'color: #fff; border-color: #fff';

  setTimeout(function () {
    document.querySelector(".reset-options").style.cssText = 'color: #ddd; border-color: #ddd';
  }, 1000)

  // Delete Items From The Local Storage
  // localStorage.clear(); // Delete All Items In Local Storage
  localStorage.removeItem('colorOption'); // Delete This Item only
  localStorage.removeItem('backgroundOption');
  localStorage.removeItem('bullets_option');

  // work Refresh To Page
  window.location.reload(true);
}

// Toggle Menu
let toggleBtn = document.querySelector('.toggle-menu'),
  tLinks = document.querySelector('.links');

toggleBtn.onclick = function (event) {

  // Stop Propagation
  event.stopPropagation();

  // Toggle Class "menu-active" On Botton
  this.classList.toggle('menu-active');

  // Toggle class "open" On Links
  tLinks.classList.toggle('open');

};

// document.addEventListener('click', function (e) {

//   let insideElement = tLinks.contains(e.target);
//   let outsideElement = (e.target === toggleBtn);
//   if (!insideElement && !outsideElement) {
//     if (tLinks.classList.contains('open') && toggleBtn.classList.contains('menu-active')) {
//       tLinks.classList.remove('open');
//       toggleBtn.classList.remove('menu-active');
//     }
//   }
// });

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== toggleBtn && e.target !== tLinks) {

    // Check If Menu Is Open
    if (tLinks.classList.contains('open')) {

      // Toggle Class "menu-active" On Botton
      toggleBtn.classList.toggle('menu-active');

      // Toggle class "open" On Links
      tLinks.classList.toggle('open');

    }

  }
})

//Stop Propagation on Menu
tLinks.onclick = e => e.stopPropagation();
