

let homeLink = document.getElementById('homeLink')
let moreWorkLink = document.getElementById('moreWorkLink')
let videoLink = document.getElementById('videoLink')

if (window.location.href.substring(window.location.href.length - 10) == 'index.html') {
  homeLink.style.textDecoration = "underline"
  homeLink.style.fontWeight = "bolder"
  homeLink.style.color = "rgb(0, 16, 40)"
  homeLink.style.backgroundColor = "white"

} else if (window.location.href.substring(window.location.href.length - 13) == 'moreWork.html') {
  moreWorkLink.style.textDecoration = "underline"
  moreWorkLink.style.fontWeight = "bolder"
  moreWorkLink.style.color = "rgb(0, 16, 40)"
  moreWorkLink.style.backgroundColor = "white"
} else if (window.location.href.substring(window.location.href.length - 10) == 'video.html') {
  videoLink.style.textDecoration = "underline"
  videoLink.style.fontWeight = "bolder"
  videoLink.style.color = "rgb(0, 16, 40)"
  videoLink.style.backgroundColor = "white"
}
