
function toggleText() {
    var moreText = document.getElementById("moreText");

    if (moreText.style.display === "none") {
        moreText.style.display = "block";
    } else {
        moreText.style.display = "none";
    }
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
  });
  