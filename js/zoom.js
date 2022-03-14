let modalEle = document.querySelector(".modal");
let zoom = document.querySelector('.zoom');
let modalImage = document.querySelector(".modalImage");

Array.from(document.querySelectorAll(".gallery__img")).forEach(item => {
   item.addEventListener("click", event => {
      modalEle.style.display = "block";
      document.body.style.overflowY = "hidden";
      modalImage.src = event.target.src;
      document.getElementById('scrollToTopBtn').style.zIndex = "0";
      document.getElementById('menu').style.zIndex = "0";
      if(event.target == zoom1){
        modalImage.src = "./images/gallery-1-original.jpg";
      }else if(event.target == zoom2){
        modalImage.src = "./images/gallery-3-original.jpg";
      }else if(event.target == zoom3){
        modalImage.src = "./images/gallery-2-original.jpg";
      }else if(event.target == zoom4){
        modalImage.src = "./images/gallery-4-original.jpg";
      }else if(event.target == zoom5){
        modalImage.src = "./images/gallery-12-original.jpg";
      }
   });
});
document.querySelector(".close").addEventListener("click", () => {
   modalEle.style.display = "none";
   document.getElementById('scrollToTopBtn').style.zIndex = "900";
   document.getElementById('menu').style.zIndex = "999";
   document.body.style.overflowY = "scroll";
});