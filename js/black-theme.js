let headerNavbar = document.getElementById('header_navbar');
///////////////////////////////////////////////////
let blackModeBtnBox = document.createElement('div');
blackModeBtnBox.className = 'header_black_mod_btn_box';
blackModeBtnBox.style.display = 'flex';
blackModeBtnBox.style.marginLeft = '50px';
blackModeBtnBox.style.transition = '0.2s';
headerNavbar.append(blackModeBtnBox);
let blackModeBtnLabel = document.createElement('label');
blackModeBtnLabel.style.cursor = 'pointer';
blackModeBtnBox.prepend(blackModeBtnLabel);
let blackModeBtnInput = document.createElement('input');
blackModeBtnInput.type = 'checkbox';
blackModeBtnInput.style.display = 'none';
blackModeBtnInput.checked = true;
blackModeBtnLabel.prepend(blackModeBtnInput);
let blackModeBtnIconBox = document.createElement('div');
blackModeBtnIconBox.className = 'icon_box';
blackModeBtnIconBox.innerHTML = '<i class="fas fa-moon"></i>';
blackModeBtnIconBox.style.fontSize = '32px';
blackModeBtnIconBox.style.zIndex = '100';
blackModeBtnLabel.append(blackModeBtnIconBox);
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let whiteModeBtnBox = document.createElement('div');
whiteModeBtnBox.className = 'header_white_mod_btn_box';
whiteModeBtnBox.style.display = 'flex';
whiteModeBtnBox.style.marginRight = '50px';
whiteModeBtnBox.style.pointerEvents = 'none';
whiteModeBtnBox.style.opacity = '0';
whiteModeBtnBox.style.transition = '0.2s';
headerNavbar.prepend(whiteModeBtnBox);
let whiteModeBtnLabel = document.createElement('label');
whiteModeBtnBox.prepend(whiteModeBtnLabel);
let whiteModeBtnInput = document.createElement('input');
whiteModeBtnInput.type = 'checkbox';
whiteModeBtnInput.style.display = 'none';
whiteModeBtnInput.checked = false;
whiteModeBtnLabel.prepend(whiteModeBtnInput);
let whiteModeBtnIconBox = document.createElement('div');
whiteModeBtnIconBox.className = 'icon_box';
whiteModeBtnIconBox.innerHTML = '<i class="fas fa-sun"></i>';
whiteModeBtnIconBox.style.fontSize = '32px';
whiteModeBtnIconBox.style.color = 'white';
whiteModeBtnIconBox.style.zIndex = '100';
whiteModeBtnLabel.append(whiteModeBtnIconBox);
///////////////////////////////////////////////////
///////////////////////////////////////////////////
blackModeBtnLabel.addEventListener('click', function (e) {
    if (blackModeBtnInput.checked) {
        blackModeBtnBox.style.pointerEvents = 'none';
        blackModeBtnLabel.style.cursor = 'default';
        blackModeBtnBox.style.opacity = '0';
        whiteModeBtnBox.style.pointerEvents = 'auto';
        whiteModeBtnLabel.style.cursor = 'pointer';
        whiteModeBtnBox.style.opacity = '1';
        blackMode();
    }
});


whiteModeBtnLabel.addEventListener('click', function (e) {
    if (whiteModeBtnInput.checked) {
        whiteModeBtnBox.style.pointerEvents = 'none';
        whiteModeBtnLabel.style.cursor = 'default';
        whiteModeBtnBox.style.opacity = '0';
        blackModeBtnBox.style.pointerEvents = 'auto';
        blackModeBtnLabel.style.cursor = 'pointer';
        blackModeBtnBox.style.opacity = '1';
        whiteMode();
    }
});
///////////////////////////////////////////////////
///////////////////////////////////////////////////
let body = document.querySelector('body');
let header = document.querySelector('.header');
header.classList.remove('header_background');
let headerBackground = document.createElement('div');
header.prepend(headerBackground);
headerBackground.style.position = 'absolute';
headerBackground.style.background = 'url("/img/front_img.jpeg")';
headerBackground.style.backgroundSize = '1920px 100%';
headerBackground.style.backgroundPosition = 'center';
headerBackground.style.top = '0';
headerBackground.style.right = '0';
headerBackground.style.left = '0';
headerBackground.style.bottom = '0';
headerBackground.style.opacity = '0.8';
headerBackground.style.filter = 'blur(1px)';
let headerMenuItems = document.querySelectorAll('.header_menu_items');
for (let e of headerMenuItems) {
    e.classList.remove('header_menu_items_hover');
}
let borderColor = 'black'
headerMenuItems.forEach((v) => {
    v.addEventListener('mouseover', (e) => {
        e.target.style.borderBottom = '2px solid ' + borderColor;
    });
    v.addEventListener('mouseout', (e) => {
        e.target.style.borderBottom = 'none';
    });
});
let headerNavbarLogoSpan = document.querySelector('.header_navbar_logo span');
let headerNavbarLogoImg = document.querySelector('.header_navbar_logo img');
let headerContent = document.querySelector('.header_content');
let headerTitle = document.querySelector('.header_title');
let headerItem = document.querySelectorAll('.header_item');
let headerItemSpan = document.querySelectorAll('.header_item span');
let headerItemImg = document.querySelectorAll('.header_item img');
let headerButton = document.querySelector('.header_button');
headerButton.removeChild(headerButton.lastElementChild);
let newMainButton = document.createElement('a');
headerButton.prepend(newMainButton);
newMainButton.innerHTML = 'Залишити повідомлення';
newMainButton.href = '#support';
newMainButton.setAttribute('id', 'main_action');
newMainButton.style.display = 'block';
newMainButton.style.boxShadow = '0 0 0 3px black';
newMainButton.style.borderRadius = '35px';
newMainButton.style.fontSize = '20px';
newMainButton.style.color = 'black';
newMainButton.style.textDecoration = 'none';
newMainButton.style.width = '400px';
newMainButton.style.textAlign = 'center';
newMainButton.style.lineHeight = '35px';
newMainButton.style.padding = '5px 0';
newMainButton.style.transition = '0.5s';
let newMainButtonBackgroundColor = 'black';
let newMainButtonTextColor = 'white';
newMainButton.addEventListener('mouseover', (e) => {
    newMainButton.style.backgroundColor = newMainButtonBackgroundColor;
    newMainButton.style.color = newMainButtonTextColor;
})
newMainButton.addEventListener('mouseout', (e) => {
    newMainButton.style.backgroundColor = 'transparent';
    if (newMainButtonTextColor == 'white') {
        newMainButton.style.color = 'black';
    } else {
        newMainButton.style.color = 'white';
    }
})
let scrollTop = document.getElementById('scroll_top');
let title = document.querySelectorAll('.title');
let aboutItemTitle = document.querySelectorAll('.about_item_title');
let aboutItemContentText = document.querySelectorAll('.about_item_content_text');
let aboutItemContentImg = document.querySelectorAll('.about_item_content_img');
let supportTitle = document.querySelector('.support_title')
supportTitle.classList.remove('support_title_after');
let supportTitleAfter = document.createElement('div');
supportTitle.after(supportTitleAfter);
supportTitleAfter.style.display = 'block';
supportTitleAfter.style.margin = '0 auto';
supportTitleAfter.style.width = '100px';
supportTitleAfter.style.paddingTop = '20px';
supportTitleAfter.style.borderBottom = '3px solid black'
let supportTitleDescription = document.querySelector('.support_title_description');
let consentProcessDataTest = document.querySelector('.consent_process_data_test');
let formButtonBox = document.querySelector('.form_button_box');
formButtonBox.removeChild(formButtonBox.lastElementChild);
let sendForm = document.createElement('button');
sendForm.classList.add('form_button');
sendForm.type = 'submit';
formButtonBox.prepend(sendForm);
sendForm.innerHTML = 'Відправити';
sendForm.href = '#support';
sendForm.setAttribute('id', 'main_action');
sendForm.style.display = 'block';
sendForm.style.boxShadow = '0 0 0 3px black';
sendForm.style.borderRadius = '35px';
sendForm.style.fontSize = '20px';
sendForm.style.color = 'black';
sendForm.style.textDecoration = 'none';
sendForm.style.width = '400px';
sendForm.style.textAlign = 'center';
sendForm.style.lineHeight = '35px';
sendForm.style.padding = '5px 0';
sendForm.style.transition = '0.5s';
sendForm.style.fontFamily = 'Roboto Slab, sans-serif';
let sendFormBackgroundColor = 'black';
let sendFormTextColor = 'white';
sendForm.addEventListener('mouseover', (e) => {
    sendForm.style.backgroundColor = sendFormBackgroundColor;
    sendForm.style.color = sendFormTextColor;
})
sendForm.addEventListener('mouseout', (e) => {
    sendForm.style.backgroundColor = 'transparent';
    if (newMainButtonTextColor == 'white') {
        sendForm.style.color = 'black';
    } else {
        sendForm.style.color = 'white';
    }
})
let formInput = document.querySelectorAll('.form_input input');
let formTextarea = document.querySelector('.form_textarea textarea');
let formCheckbox = document.querySelector('.form_checkbox label input');
let employeesItemName = document.querySelectorAll('.employees_item_name');
function blackMode() {
    console.log('Black');
    body.style.backgroundColor = '#252525';
    for (let e of headerMenuItems) {
        e.style.color = 'white';
    }
    headerNavbarLogoSpan.style.color = 'white';
    headerNavbarLogoImg.style.filter = 'invert(0)';
    headerContent.style.marginRight = 'auto';
    borderColor = 'white';
    headerBackground.style.background = 'url("/img/black_background.png")';
    headerBackground.style.backgroundPosition = 'center';
    headerBackground.style.backgroundSize = '1920px 100%';
    headerBackground.style.opacity = '1';
    headerBackground.style.filter = 'blur(0)';
    headerTitle.style.color = 'white';
    headerTitle.style.textAlign = 'center';
    for (const e of headerItem) {
        e.style.width = '20%';
        e.style.marginRight = 'auto';
        e.style.marginLeft = 'auto';
    }
    for (const e of headerItemSpan) {
        e.style.color = 'white';
    }
    for (const e of headerItemImg) {
        e.style.filter = 'invert(1)';
    }
    newMainButton.style.boxShadow = '0 0 0 3px white';
    newMainButtonBackgroundColor = 'white';
    newMainButtonTextColor = 'black';
    newMainButton.style.color = 'white';
    scrollTop.style.color = 'white';
    for (const e of title) {
        e.style.color = 'white';
    }
    for (const e of aboutItemTitle) {
        e.style.color = 'white';
    }
    for (const e of aboutItemContentText) {
        e.style.color = 'white';
    }
    for (const e of aboutItemContentImg) {
        9
        e.style.filter = 'grayscale(1)';
    }
    supportTitleAfter.style.borderBottom = '3px solid white';
    supportTitleDescription.style.color = 'white';
    consentProcessDataTest.style.color = 'white';
    sendFormBackgroundColor = 'white';
    sendFormTextColor = 'black';
    sendForm.style.boxShadow = '0 0 0 3px white';
    sendForm.style.color = 'white';
    for (const e of formInput) {
        e.style.backgroundColor = '#252525';
        e.style.color = 'white';
    }
    formTextarea.style.backgroundColor = '#252525';
    formTextarea.style.color = 'white';
    formCheckbox.style.backgroundColor = '#252525';
    for (const e of employeesItemName) {
        e.style.color = 'white';
    }
}
function whiteMode() {
    console.log('White');
    body.style.backgroundColor = 'white';
    for (let e of headerMenuItems) {
        e.style.color = 'black';
    }
    headerNavbarLogoSpan.style.color = 'black';
    headerNavbarLogoImg.style.filter = 'invert(1)';
    headerContent.style.marginRight = '0';
    borderColor = 'black';
    headerBackground.style.background = 'url("/img/front_img.jpeg")';
    headerBackground.style.backgroundPosition = 'center';
    headerBackground.style.backgroundSize = '1920px 100%';
    headerBackground.style.opacity = '0.8';
    headerBackground.style.filter = 'blur(1px)';
    headerTitle.style.color = 'black';
    headerTitle.style.textAlign = 'left';
    for (const e of headerItem) {
        e.style.width = '100%';
        e.style.marginRight = '0';
        e.style.marginLeft = '0';
    }
    for (const e of headerItemSpan) {
        e.style.color = 'black';
    }
    for (const e of headerItemImg) {
        e.style.filter = 'invert(0)';
    }
    newMainButton.style.boxShadow = '0 0 0 3px black';
    newMainButtonBackgroundColor = 'black';
    newMainButtonTextColor = 'white';
    newMainButton.style.color = 'black';
    scrollTop.style.color = 'black';
    for (const e of title) {
        e.style.color = 'black';
    }
    for (const e of aboutItemTitle) {
        e.style.color = 'black';
    }
    for (const e of aboutItemContentText) {
        e.style.color = 'black';
    }
    for (const e of aboutItemContentImg) {
        e.style.filter = 'grayscale(0)';
    }
    supportTitleAfter.style.borderBottom = '3px solid black';
    supportTitleDescription.style.color = 'black';
    consentProcessDataTest.style.color = 'black';
    sendFormBackgroundColor = 'black';
    sendFormTextColor = 'white';
    sendForm.style.boxShadow = '0 0 0 3px black';
    sendForm.style.color = 'black';
    for (const e of formInput) {
        e.style.backgroundColor = 'white';
        e.style.color = 'black';
    }
    formTextarea.style.backgroundColor = 'white';
    formTextarea.style.color = 'black';
    for (const e of employeesItemName) {
        e.style.color = 'black';
    }
}