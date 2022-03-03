(async function() {
        const url = window.location.hash.slice(2);
    
        // if localStorage.product is defined then parse, otherwise empty object
       // let product = JSON.parse(localStorage.product ? localStorage.product : '{}');
   
        // if cached product is not what we're querying
       // if (product.url != url) {
            // then we load it from news json file 
            const response = await fetch('news.json');
           const products = await response.json();
            const filtered = products.filter(p => p.url === url);
            if (filtered.length == 0) {
                window.location.replace("/news")
            }
            product = filtered[0];
            localStorage.product = JSON.stringify(product);
            console.log('loaded new')
        //} else {
          //  console.log('used from cache')
        //}
    const productsContainer = document.querySelector('.info');
    productsContainer.innerHTML = `
    <div class="info-block">
    <div class="info-photo">
        <div class="slideshow-container">
            <div class="mySlides fade" style="display: block;">
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

            <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
            <a class="next" onclick="plusSlides(1)">&#10095;</a>
        </div>
        <br>

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
            <h5><u>${product.date}</u></h5>
        </div>
        <div class="info-text">
            <h3>${product.description}</h3>
        </div>
    </div>
</div>

`;
})();