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

const coinCount = document.getElementById("coin-count") ;
const callBtn = document.getElementsByClassName("call-btn") ;

for (const call of callBtn) {
   call.addEventListener("click", function() {

         let coinText = coinCount.innerText ;
         let coinDigit = parseInt(coinText) ;
         
        
      if( coinDigit >= 20 ){

         let coinLeft = coinDigit - 20 ;
         coinCount.innerText = coinLeft ;

         const card = call.closest(".card") ;
         const name = card.querySelector(".name").innerText ;
         const number = card.querySelector(".number").innerText ;

         alert(`📞 Calling ${name} ${number}...`);
      }

      else{
         alert("❌ You don't have sufficient coins. you need at least 20 coins to call emergency helpline.")
      }

   })
}
         