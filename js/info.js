(function() {
    const product = JSON.parse(localStorage.product);
    const productsContainer = document.querySelector('.info');
    productsContainer.innerHTML = `
    <div class="info-block">
    <div class="info-photo">
        <div class="slideshow-container">
            <!-- Full-width images with number and caption text -->
            <div class="mySlides fade">
                <img src="${product.image1}" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="${product.image2}" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="${product.image3}" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="${product.image4}" style="width:100%">
            </div>

            <div class="mySlides fade">
                <img src="${product.image5}" style="width:100%">
            </div>

            <!-- Next and previous buttons -->
            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

        <!-- The dots/circles -->
        <div class="dots" style="text-align:center">
            <span class="dot" onclick="currentSlide(1)"></span>
            <span class="dot" onclick="currentSlide(2)"></span>
            <span class="dot" onclick="currentSlide(3)"></span>
            <span class="dot" onclick="currentSlide(4)"></span>
            <span class="dot" onclick="currentSlide(5)"></span>
        </div>
    </div>
    <div class="info-description">
        <div class="info-data">
            <h5><u>${product.data}</u></h5>
        </div>
        <div class="info-text">
            <h3>${product.description}</h3>
        </div>
    </div>
</div>`;
})();