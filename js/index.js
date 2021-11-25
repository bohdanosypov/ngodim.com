(function () {
    function validate(){
        //Считаем значения из полей name и email в переменные x и y
        var x=document.forms["form"]["user-name"].value;
        var y=document.forms["form"]["user-email"].value;
        //Если поле name пустое выведем сообщение и предотвратим отправку формы
        if (x.length==0){
           document.querySelector(".namef").innerHTML="*данное поле обязательно для заполнения";
           return false;
        }
        //Если поле email пустое выведем сообщение и предотвратим отправку формы
        if (y.length==0){
           document.querySelector(".emailf").innerHTML="*данное поле обязательно для заполнения";
           return false;
        }
        //Проверим содержит ли значение введенное в поле email символы @ и .
        at=y.indexOf("@");
        dot=y.indexOf(".");
        //Если поле не содержит эти символы знач email введен не верно
        if (at<1 || dot <1){
           document.querySelector(".emailf").innerHTML="*email введен не верно";
           return false;
        }
     }
} )();