   /** HEADER NAV-BAR OVERLAY  **/

const button = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header-top");

button.addEventListener("click", function(){
   header.classList.toggle("nav-open")
   
})

        /** NUMBER COUNTER **/


const matchesMade = document.querySelector(".counter");
const observer = new IntersectionObserver((entries, observer)=>{
   const entry = entries[0];
   if(entry.isIntersecting){
      updateCount();
      observer.unobserve(matchesMade);
   }
   else return;
})

observer.observe(matchesMade);



const speed = 20;
const updateCount = () =>{
         const target = +matchesMade.getAttribute("data-target");
         const countString = matchesMade.innerText.replace(/\D/g,'');
         const countInt = parseInt(countString);
   
         const inc = target/speed;
      
         if(countInt < target){
   
            matchesMade.innerText = (countInt+inc).toLocaleString();
            setTimeout(updateCount, 50);
   
         } else{
            countString.innerText=target;
         }
      }




