// Call history btn here 

let callsForHistory = document.getElementsByClassName("call-btn") ;
let historyClear = document.getElementById("history-clear") ;
let historyLists = document.getElementById("history-lists") ;

let coinForHistory = document.getElementById("coin-count") ;

for (const history of callsForHistory){
   history.addEventListener("click", function(){

      let coinTextForHistory = coinForHistory.innerText ;
      let CoinToNumberForHistory = parseInt(coinTextForHistory) ;

      if(CoinToNumberForHistory < 20 ) {
         return ;
      }

      let cardForHistory = history.closest(".card") ; 
      let nameForHistory = cardForHistory.querySelector(".name").innerText ;
      let numberForHistory = cardForHistory.querySelector(".number").innerText ;
      let timeForHistory = new Date().toLocaleTimeString() ;

      let createHistory = document.createElement("div") ;
      createHistory.classList.add("flex", "justify-between", "items-center", "bg-[#fafafa]", "rounded-lg", "w-67", "h-20", "mx-auto", "mt-2", "px-2") ;

      createHistory.innerHTML =  `
      <div>
         <p class = "font-bold">${nameForHistory}</p>
         <p class="text-[#5c5c5c]">${numberForHistory}</p>
      </div>

      <div>
         <p>${timeForHistory}</p>
      </div>

      `;
      historyLists.appendChild(createHistory) ; 
      
   })
}

historyClear.addEventListener("click", function () {
    historyLists.innerHTML = "" ;
  });


// by touching heart icon the heart count will increase here  

const heartCount = document.getElementById("heart-count");
const heartTouch = document.getElementsByClassName("heart-icon") ;

for (const heart of heartTouch) {
  heart.addEventListener("click", function () {
   let heartText = heartCount.innerText ;
   let heartDigit = parseInt(heartText) ;
    let totalHeart = heartDigit + 1 ;
    heartCount.innerText = totalHeart ;
    heart.style.color = "red" ;
  });
}

// by clicking call buttton the coin will decrease here

let coinCount = document.getElementById("coin-count") ;
let callBtn = document.getElementsByClassName("call-btn") ;

for (const call of callBtn) {
   call.addEventListener("click", function() {

         let coinText = coinCount.innerText ;
         let coinDigit = parseInt(coinText) ;
         
        
      if( coinDigit >= 20 ){

         let coinLeft = coinDigit - 20 ;
         coinCount.innerText = coinLeft ;

         let card = call.closest(".card") ;
         let name = card.querySelector(".name").innerText ;
         let number = card.querySelector(".number").innerText ;

         alert(`📞 Calling ${name} ${number}...`);
      }

      else{
         alert("❌ You don't have sufficient coins. you need at least 20 coins to call emergency helpline.")
      }

   })
}

// by clicking copy buttton the copy count will increase here

let copyCount = document.getElementById("copy-count") ;
let copyBtn = document.getElementsByClassName("copy-btn") ;

for (const copy of copyBtn){
   copy.addEventListener('click', function(){

      let copyText = copyCount.innerText ;
      let copyDigit = parseInt(copyText) ;
      let totalCopy = copyDigit + 1 ;
      copyCount.innerText = totalCopy ;

      let cardCopy = copy.closest(".card") ;
      let numberCopy = cardCopy.querySelector(".number").innerText ;

      navigator.clipboard.writeText(numberCopy)
      
      .then(() => {
         alert (`Number copied to clipboard: ${numberCopy}`) ;
      })

      .catch(err => {
         console.error('Failed to copy text: ', err) ;
      })

   }
   
   )
}



