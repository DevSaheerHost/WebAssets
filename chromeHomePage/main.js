console.log('Hello World!');
const qs = e =>document.querySelector(e)
const search= qs('input')
const go = qs('button')
go.addEventListener('click',()=>{
  
  location='https://www.google.com/search?q=' + qs('input').value
  
  qs('input').value=''
})

const menuBtn = qs('.menuBtn')
const menu=  qs('.menu')
menuBtn.addEventListener('click',()=>{
  menu.classList.toggle('menuOpen')
  if (menu.className=='menu menuClose menuOpen') {
    qs('.menuClose'). style.display='block';
  } else {
    
  }
// setTimeout(close, 1000);
})

document.body.addEventListener('click',()=>{
  if (qs('#menu').offsetWidth<='0') {
    
  } else {
    qs('#menu').classList.toggle('menuOpen')
  }
})
// const menuClose = qs('#menu')
// qs('.menuClose').style.display='none'
// function close(){
//   if (menu.className=='menu menuClose') {
//     qs('.menuClose'). style.display='none';
//   } else {
//     qs('#menu'). style.display='block';
//   }
  
  
// }

// qs('input').addEventListener('click',()=>{
//   alert('dd')
// })

function generateRandomWord() {
  // Create an array of words to choose from
  const words = ["https://devsaheerhost.github.io/WebAssets/chromeHomePage/RandomImages/Screenshot_20230220-223535_Instagram.png", "https://devsaheerhost.github.io/WebAssets/chromeHomePage/RandomImages/Screenshot_20230925-094759_YouTube.jpg", "https://devsaheerhost.github.io/WebAssets/chromeHomePage/RandomImages/Screenshot_20230925-141158_YouTube.jpg", "https://devsaheerhost.github.io/WebAssets/chromeHomePage/RandomImages/Screenshot_20230927-213733_Instagram.jpg", "https://devsaheerhost.github.io/WebAssets/chromeHomePage/RandomImages/Screenshot_20230927-214630_Instagram.jpg"];

  // Generate a random index from the array
  const randomIndex = Math.floor(Math.random() * words.length);

  // Return the word at the random index
  return words[randomIndex];
}

// Generate a random word and print it to the console
const randomWord = generateRandomWord();
console.log(randomWord);

document.querySelector('.menuCardImg').src=randomWord

// const menuBig= qs('.menuBig')
// const img1= document.createElement('img')
// menuBig.appendChild(img1)
// img1.src=randomWord