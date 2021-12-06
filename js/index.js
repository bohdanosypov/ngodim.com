function hasOnlySpaces(str) {
   return str.trim().length === 0;
}
function hasSpacesBeforeAfterValue(str) {
   ////////////////////
   if (str.length > str.trim().length) {
      console.log('hasSpacesBeforeAfterValue');
   }
   ////////////////////
   return str.length > str.trim().length;
}
function isEmptyField(str) {
   ////////////////////
   if (str.length === 0 || hasOnlySpaces(str)) {
      console.log('isEmptyField');
   }
   ////////////////////
   return str.length === 0 || hasOnlySpaces(str);
}
function isNumeric(n) {
   if (n === ' ') {
      return false;
   }
   ////////////////////
   if (!isNaN(n)) {
      console.log('isNumeric');
   }
   5
   ////////////////////
   return !isNaN(n);
}
function isNumericCode(n) {
   let firstCodeOfNumeric = 48;
   let lastCodeOfNumeric = 57;
   let numCode = n.charCodeAt(0);
   if (numCode >= firstCodeOfNumeric && numCode <= lastCodeOfNumeric) {
      return true;
   }
   return false;
}
function isLatinCode(letter) {
   let firstCodeOfLatinUppercase = 65;
   let lastCodeOfLatinUppercase = 90;
   let firstCodeOfLatinLowercase = 97;
   let lastCodeOfLatinLowercase = 122;
   let letterCode = letter.charCodeAt(0);
   if ((letterCode >= firstCodeOfLatinUppercase && letterCode <=
      lastCodeOfLatinUppercase) || (letterCode >= firstCodeOfLatinLowercase && letterCode
         <= lastCodeOfLatinLowercase)) {
      return true;
   }
   return false;
}
function onlyOneCommercialAt(str) {
   let commercialAtCode = 64;
   let count = 0;
   let maxMinCount = 1;
   for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt(0) == commercialAtCode) {
         count++;
      }
   }
   if (count != maxMinCount) {
      ////////////////////
      console.log('not onlyOneCommercialAt');
      ////////////////////
      return false;
   }
   return true;
}
function posCommercialAt(str) {
   let commercialAtCode = 64;
   6
   for (let i = 0; i < str.length; i++) {
      if (str[i].charCodeAt(0) == commercialAtCode) {
         return i;
      }
   }
   return -1;
}
function validEmailLogin(str) {
   if (isEmptyField(str)) {
      return false;
   }
   if (hasSpacesBeforeAfterValue(str)) {
      return false;
   }
   let dotCode = 46;
   for (let i = 0; i < str.length; i++) {
      if (!(isLatinCode(str[i]) || isNumericCode(str[i]) || str[i].charCodeAt(0) ==
         dotCode)) {
         ////////////////////
         console.log('!(isLatinCode || isNumericCode || str[i].charCodeAt(0) == dotCode)');
         ////////////////////
         return false;
      }
      if (str[i].charCodeAt(0) == dotCode && i == 0) {
         ////////////////////
         console.log('dot first');
         ////////////////////
         return false;
      }
   }
   return true;
}
function validEmailDomain(str) {
   if (isEmptyField(str)) {
      return false;
   }
   if (hasSpacesBeforeAfterValue(str)) {
      return false;
   }
   let dotCode = 46;
   for (let i = 0; i < str.length; i++) {
      if (!(isLatinCode(str[i]) || str[i].charCodeAt(0) == dotCode)) {
         ////////////////////
         7
         console.log('!(isLatinCode || str[i].charCodeAt(0) == dotCode)');
         ////////////////////
         return false;
      }
      if (str[i].charCodeAt(0) == dotCode && i == 0) {
         ////////////////////
         console.log('dot first');
         ////////////////////
         return false;
      }
   }
   return true;
}
function validName(str) {
   if (isEmptyField(str)) {
      return false;
   }
   if (hasSpacesBeforeAfterValue(str)) {
      return false;
   }
   for (let i = 0; i < str.length; i++) {
      if (isNumeric(str[i])) {
         return false;
      }
   }
   return true;
}
function validEmail(str) {
   if (onlyOneCommercialAt(str)) {
      let posAt = posCommercialAt(str);
      let login = str.substring(0, posAt);
      let domain = str.substring(posAt + 1);
      if (validEmailLogin(login) && validEmailDomain(domain)) {
         return true;
      }
      return false;
   }
   return false;
}
function validSubject(str) {
   if (isEmptyField(str)) {
      return false;
   }
   8
   if (hasSpacesBeforeAfterValue(str)) {
      return false;
   }
   return true;
}
function validMessage(str) {
   if (isEmptyField(str)) {
      return false;
   }
   return true;
}
function validCheckbox(checkbox) {
   return checkbox.checked;
}
function removeFirstTag(item) {
   while (item.firstChild) {
      item.removeChild(item.firstChild);
   }
}
function addMessageTag(item, message) {
   let newItem = document.createElement('p');
   newItem.style.marginTop = "-4px";
   newItem.style.right = "50%";
   newItem.style.color = "red";
   newItem.innerHTML = message;
   item.style.left = "0";
   item.style.right = "0";
   item.appendChild(newItem);
}
let form = document.getElementById('contact_form');
let inputUserName = document.getElementById('user_name');
let inputUserEmail = document.getElementById('user_email');
let inputUserSubject = document.getElementById('user_subject');
let textareaUserMessage = document.getElementById('user_message');
let checkboxConsent = document.getElementById('consent_process_data');
let mistakeMessageUserName =
   document.getElementById('form_input_name_mistake_message');
let mistakeMessageUserEmail =
   document.getElementById('form_input_email_mistake_message');
let mistakeMessageUserSubject =
   document.getElementById('form_input_subject_mistake_message');
9
let mistakeMessageUserMessage =
   document.getElementById('form_message_textarea_mistake_message');
let mistakeMessageCheckboxConsent =
   document.getElementById('consent_process_data_mistake_message');
let validInputUserName = false;
let validInputUserEmail = false;
let validInputUserSubject = false;
let validTextareaUserMessage = false;
let validCheckboxConsent = false;
inputUserName.addEventListener('blur', function (e) {
   removeFirstTag(mistakeMessageUserName);
   let inputUserNameValue = inputUserName.value;
   if (validName(inputUserNameValue)) {
      validInputUserName = true;
   } else {
      addMessageTag(mistakeMessageUserName, 'Ви некоректно ввели ім\'я!');
      validInputUserName = false;
   }
});
inputUserEmail.addEventListener('blur', function (e) {
   removeFirstTag(mistakeMessageUserEmail);
   let inputUserEmailValue = inputUserEmail.value
   if (validEmail(inputUserEmailValue)) {
      validInputUserEmail = true;
   } else {
      addMessageTag(mistakeMessageUserEmail, 'Ви некоректно ввели email!');
      validInputUserEmail = false;
   }
});
inputUserSubject.addEventListener('blur', function (e) {
   removeFirstTag(mistakeMessageUserSubject);
   let inputUserSubjectValue = inputUserSubject.value;
   if (validSubject(inputUserSubjectValue)) {
      validInputUserSubject = true;
   } else {
      addMessageTag(mistakeMessageUserSubject, 'Ви некоректно ввели тему повідомлення!');
   validInputUserSubject = false;
   }
});
textareaUserMessage.addEventListener('blur', function (e) {
   removeFirstTag(mistakeMessageUserMessage);
   let textareaUserMessageValue = textareaUserMessage.value;
   if (validMessage(textareaUserMessageValue)) {
      10
      validTextareaUserMessage = true;
   } else {
      addMessageTag(mistakeMessageUserMessage, 'Ви не ввели повідомлення!');
      validTextareaUserMessage = false;
   }
});
checkboxConsent.addEventListener('click', function (e) {
   removeFirstTag(mistakeMessageCheckboxConsent);
   if (validCheckbox(checkboxConsent)) {
      validCheckboxConsent = true;
   } //else {
   //    addMessageTag(mistakeMessageCheckboxConsent, 'Ви не дали згоду на обробку особистих даних!')
   // validCheckboxConsent = false;
   // }
});
form.addEventListener('submit', function (e) {
   e.preventDefault();
   let numValidItems = 5;
   let countValid = 0;
   if (validInputUserName) {
      countValid++;
   } else {
      removeFirstTag(mistakeMessageUserName);
      addMessageTag(mistakeMessageUserName, 'Ви не коректно ввели ім\'я!');
   }
   if (validInputUserEmail) {
      countValid++;
   } else {
      removeFirstTag(mistakeMessageUserEmail);
      addMessageTag(mistakeMessageUserEmail, 'Ви не коректно ввели email!');
   }
   if (validInputUserSubject) {
      countValid++;
   } else {
      removeFirstTag(mistakeMessageUserSubject);
      addMessageTag(mistakeMessageUserSubject, 'Ви не коректно ввели тему повідомлення!');
   }
   if (validTextareaUserMessage) {
      countValid++;
   } else {
      11
      removeFirstTag(mistakeMessageUserMessage);
      addMessageTag(mistakeMessageUserMessage, 'Ви не ввели повідомлення!');
   }
   if (validCheckboxConsent) {
      countValid++;
   } else {
      removeFirstTag(mistakeMessageCheckboxConsent);
      addMessageTag(mistakeMessageCheckboxConsent, 'Ви не дали згоду на обробку особистих даних!')
   }
   if (countValid === numValidItems) {
      form.submit();
   }
   countValid = 0;
});



//    Лістинг коду з файлу listeners.js:
// let coordinatesShowHideArrow = 900;
// let scroll_btn = document.querySelector('.is_show_btn');
// window.addEventListener('scroll', function (e) {
//    if (window.scrollY > coordinatesShowHideArrow) {
//       scroll_btn.classList.remove('is_show_btn_hide');
//    } else if (window.scrollY <= coordinatesShowHideArrow) {
//       scroll_btn.classList.add('is_show_btn_hide');
//    }
// });
// scroll_btn.addEventListener('click', function (e) {
//    if (window.scrollY > coordinatesShowHideArrow) {
//       window.scrollTo(0, 0);
//    }
// });
// let effectMouseOverFilter = "grayscale(100%)";
// let effectMouseOutFilter = "grayscale(0)";
// let effectTransition = "0.8s";
// let employeesItem1Photo = document.getElementById('employees_item_1_photo');
// employeesItem1Photo.style.filter = effectMouseOverFilter;
// employeesItem1Photo.style.transition = effectTransition;
// employeesItem1Photo.addEventListener('mouseover', function (e) {
//    employeesItem1Photo.style.filter = effectMouseOutFilter;
// });
// employeesItem1Photo.addEventListener('mouseout', function (e) {
//    employeesItem1Photo.style.filter = effectMouseOverFilter;
// });
// 12
// let employeesItem2Photo = document.getElementById('employees_item_2_photo');
// employeesItem2Photo.style.filter = effectMouseOverFilter;
// employeesItem2Photo.style.transition = effectTransition;
// employeesItem2Photo.addEventListener('mouseover', function (e) {
//    employeesItem2Photo.style.filter = effectMouseOutFilter;
// });
// employeesItem2Photo.addEventListener('mouseout', function (e) {
//    employeesItem2Photo.style.filter = effectMouseOverFilter;
// });
// let employeesItem3Photo = document.getElementById('employees_item_3_photo');
// employeesItem3Photo.style.filter = effectMouseOverFilter;
// employeesItem3Photo.style.transition = effectTransition;
// employeesItem3Photo.addEventListener('mouseover', function (e) {
//    employeesItem3Photo.style.filter = effectMouseOutFilter;
// });
// employeesItem3Photo.addEventListener('mouseout', function (e) {
//    employeesItem3Photo.style.filter = effectMouseOverFilter;
// });
// let employeesItem4Photo = document.getElementById('employees_item_4_photo');
// employeesItem4Photo.style.filter = effectMouseOverFilter;
// employeesItem4Photo.style.transition = effectTransition;
// employeesItem4Photo.addEventListener('mouseover', function (e) {
//    employeesItem4Photo.style.filter = effectMouseOutFilter;
// });
// employeesItem4Photo.addEventListener('mouseout', function (e) {
//    employeesItem4Photo.style.filter = effectMouseOverFilter;
// });