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

         