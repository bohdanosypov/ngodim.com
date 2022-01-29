"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('forms');
    form.addEventListener('submit', formSend);

    async function formSend(e) {
        e.preventDefault();
            form.classList.add('_sending');
            let response = await fetch('sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                let result = await response.json();
                alert(result.message);
                formPreview.innerHTML = '';
                form.reset();
                form.classList.remove('_sending');
            } else {
                alert("Помилка");
                form.classList.remove('_sending');
            }
            
        
    }
});
