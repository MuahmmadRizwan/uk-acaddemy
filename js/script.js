
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
  
  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
  });

  function calculate() {
    var input1 = document.getElementById('input1').value;
    var input2Element = document.getElementById('input2');

    // Check if input1 is a valid number
    if (!isNaN(input1) && input1.trim() !== '') {
        var input2 = input1 * 250; 
        input2Element.value = input2;
    } else {
        // If input1 is not a valid number, show "NaN" in input2
        input2Element.value = 'NaN';
    }
}