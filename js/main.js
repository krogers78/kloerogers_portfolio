const no = {
  imageGallery: {
    img: './images/rollercoaster-small.png',
    alt: 'A screenshot depicting the the web page with images of rollercoasters.',
    title: 'Responsive Image Gallery',
    description: 'This project is a small image gallery utlizing the Unsplash API and CSS animations. The images were brought in from Unsplash and have a hover effect that displays metadata with an animation. Along with this, the use of a basic animation was used on the logo to spin when clicked.',
    websiteLink: 'http://krogers78.github.io/responsiveImageGallery'
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

if (theProjectDetails) {
  console.log('whore')
  let bitch = no.gauntlet
  asshole(bitch.img, bitch.alt, bitch.title, bitch.description, bitch.websiteLink)
}
if (imageGallery) {
  imageGallery.addEventListener('click', () => {
    let bitch = no.imageGallery
    asshole(bitch.img, bitch.alt, bitch.title, bitch.description, bitch.websiteLink)
  })
}
if (theGauntlet) {
  console.log('cunt')
  theGauntlet.addEventListener('click', () => {
    let bitch = no.gauntlet
    asshole(bitch.img, bitch.alt, bitch.title, bitch.description, bitch.websiteLink)
  })
}

function asshole(image, theAlt, theTitle, theDescription, theLink) {
  let htmlString = `<img class="img-fluid" src="${image}" alt="${theAlt}" />
                    <h2>${theTitle}</h2>
                    <p>${theDescription}</p>
                    <p><a class="btn btn-primary" href="${theLink}">View the Live Website</a></p>`
  theProjectDetails.innerHTML = htmlString
}
