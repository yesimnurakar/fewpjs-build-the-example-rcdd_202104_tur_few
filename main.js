// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.getElementById("modal");
errorModal.setAttribute("class","hidden");


document.addEventListener("DOMContentLoaded", () => {
  const hearts = document.getElementsByClassName('like-glyph')
  for (const like of hearts) {
    like.addEventListener("click", clickHeart)
  }
});

function clickHeart(event) {
  let heart = event.target;
  if (heart.innerText == EMPTY_HEART) {
    mimicServerCall()
    .then(response => {
      heart.innerText = FULL_HEART;
      heart.setAttribute('class', 'activated-heart');
    })
    .catch(error => {
      const modal = document.getElementById('modal');
      modal.removeAttribute('class', 'hidden');
      modal.innerText = "Server failed.";
      setTimeout(() => modal.setAttribute('class', 'hidden'), 3000);
    })
  } else {
    heart.innerText = EMPTY_HEART;
    heart.removeAttribute('class', 'activated-heart');
  }
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
