<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('uk', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('office@ngodim.com', 'Сайт ГО ДІМ');
	//Кому отправить
	$mail->addAddress('dobro.int.molod@gmail.com');
	//Тема письма
	$mail->Subject = 'Привіт! Нове питання на сайті ГО ДІМ"';

	
	//Тело письма
	$body = '<h1>Нове питання на сайті ГО ДІМ</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['email']))){
		$body.='<p><strong>E-mail:</strong> '.$_POST['email'].'</p>';
	}
    if(trim(!empty($_POST['tell']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['email'].'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Повідомлення:</strong> '.$_POST['message'].'</p>';
	}
	
	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Помилка...';
	} else {
		$message = 'Повідомлення відправленно!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>