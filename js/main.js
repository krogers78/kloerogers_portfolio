const projects = {
  imageGallery: {
    img: './images/rollercoaster-small.png',
    alt: 'A screenshot depicting the the web page with images of rollercoasters.',
    title: 'Responsive Image Gallery',
    description: 'This project is a small image gallery utlizing the Unsplash API and CSS animations. The images were brought in from Unsplash and have a hover effect that displays metadata with an animation. Along with this, the use of a basic animation was used on the logo to spin when clicked.',
    websiteLink: 'http://krogers78.github.io/responsiveImagePage'
  },
  gauntlet: {
    img: './images/gauntlet-small_1.png',
    alt: 'A screenshot depicting the the web page showing the character creation form.',
    title: 'The Gauntlet',
    description: 'This project takes the user through a character creation form that consists of multiple options. A name will be chosen along with one of three different character classes that each have weapons specific to the class. After selecting the class and weapon; the user can add armor to their character and begin the game. Once in the game the user will randomally encounter four different enemies that each have different stats and can land critical hit and miss their attack all through the use of the Random class.',
    websiteLink: 'https://rogersbrett.bitbucket.io/'
  }
}
const imageGallery = document.querySelector('#rImageGallery')
const theGauntlet = document.querySelector('#gauntlet')
const theProjectDetails = document.querySelector('#projectDetails')
const gauntletLink = document.querySelector('#linkToTheGauntlet')
const galleryLink = document.querySelector('#linkToImageGallery')
let newGallery = projects.imageGallery
let newGauntlet = projects.gauntlet
const createGallery = CreateTheString(newGallery.img, newGallery.alt, newGallery.title, newGallery.description, newGallery.websiteLink)
const createGauntlet = CreateTheString(newGauntlet.img, newGauntlet.alt, newGauntlet.title, newGauntlet.description, newGauntlet.websiteLink)

if (gauntletLink) {
  gauntletLink.addEventListener('click', () => {
    localStorage.setItem('preLoad', createGauntlet)
  })
}
if (galleryLink) {
  galleryLink.addEventListener('click', () => {
    localStorage.setItem('preLoad', createGallery)
  })
}

if (theProjectDetails) {
  if(localStorage.getItem('preLoad')) {
    theProjectDetails.innerHTML = localStorage.getItem('preLoad')
  } else {
    theProjectDetails.innerHTML = '<p>Select a project to view</p>'
  }

}
if (imageGallery) {
  imageGallery.addEventListener('click', () => {
    theProjectDetails.innerHTML = createGallery
  })
}
if (theGauntlet) {
  theGauntlet.addEventListener('click', () => {
    theProjectDetails.innerHTML = createGauntlet
  })
}

function CreateTheString(image, theAlt, theTitle, theDescription, theLink) {
  let htmlString = `<img class="img-fluid" src="${image}" alt="${theAlt}" />
                    <h2>${theTitle}</h2>
                    <p>${theDescription}</p>
                    <p><a class="btn btn-primary" href="${theLink}">View the Live Website</a></p>`
  return htmlString
  // theProjectDetails.innerHTML = htmlString
}
