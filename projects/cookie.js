let count = 0 

const button = document.querySelector("#cookieBtn")
const counting = document.querySelector("#counter")

button.addEventListener('click', function(){
  count = count + 1,
   counting.textContent =  "Clicks: " + count
})