(async function() {

    const response = await fetch('news.json');
    const products = await response.json();

    function renderProducts(products) {
        const productsContainer = document.querySelector('.news');
        productsContainer.innerHTML = '';
        for (const product of products) {
            productsContainer.innerHTML += `
            <div class="news-block">
            <div class="img-preview">
                <img src="${product.image}" alt="Фото новини">
            </div>
            <div class="description">
                <div class="news-data">
                    <h5><u>${product.date}</u></h5>
                </div>
                <div class="news-text">
                    <h3>${product.text}</h3>
                </div>
                <a href="info#/${product.url}" class="info-button" data-id="${product.id}"  target="_blank">Читати далі</a>
                <div class="news-follow">
                    <a href="${product.fb}" target="_blank"><img src="img/header/facebook.png"
                            alt="Facebook"></a>
                    <a href="${product.teleg}" target="_blank"><img src="img/header/telegram.png"
                            alt="Telegram"></a>
                    <a href="${product.inst}" target="_blank"><img
                            src="img/header/instagram.png" alt="Instagram"></a>
                </div>
            </div>
        </div>
        <hr>
            `;
        }
        document.querySelectorAll('.info-button')
          .forEach( infoButton => infoButton.addEventListener('click', productInfoClick));
    }

    function productInfoClick( ev ) {
        const productInfoButton = ev.target;
        const productId = productInfoButton.dataset.id;
        const product = products.filter( product => product.id === productId)[0];
        localStorage.product = JSON.stringify(product);
    }

    renderProducts(products);
})();