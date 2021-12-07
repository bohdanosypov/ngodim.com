
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 900 || document.documentElement.scrollTop > 900) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}
function topFunction() {
    document.documentElement.scrollTop = 0; 
}


let effectMouseOverFilter = "grayscale(100%)";
let effectMouseOutFilter = "grayscale(0)";
let effectTransition = "0.5s";
let cardImgHoliday = document.getElementById('card-img-holiday');
cardImgHoliday.style.filter = effectMouseOverFilter;
cardImgHoliday.style.transition = effectTransition;
cardImgHoliday.addEventListener('mouseover', function (e) {
    cardImgHoliday.style.filter = effectMouseOutFilter;
});
cardImgHoliday.addEventListener('mouseout', function (e) {
    cardImgHoliday.style.filter = effectMouseOverFilter;
});
12
let cardImgCamps = document.getElementById('card-img-camps');
cardImgCamps.style.filter = effectMouseOverFilter;
cardImgCamps.style.transition = effectTransition;
cardImgCamps.addEventListener('mouseover', function (e) {
   cardImgCamps.style.filter = effectMouseOutFilter;
});
cardImgCamps.addEventListener('mouseout', function (e) {
   cardImgCamps.style.filter = effectMouseOverFilter;
});
let cardImgMykolia = document.getElementById('card-img-mykolia');
cardImgMykolia.style.filter = effectMouseOverFilter;
cardImgMykolia.style.transition = effectTransition;
cardImgMykolia.addEventListener('mouseover', function (e) {
   cardImgMykolia.style.filter = effectMouseOutFilter;
});
cardImgMykolia.addEventListener('mouseout', function (e) {
   cardImgMykolia.style.filter = effectMouseOverFilter;
});
