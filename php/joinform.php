<?php 

// error_reporting(-1);
// ini_set('display_errors', 'On');
// set_error_handler("var_dump");

if(isset($_POST['submit'])){
    
    // $to = "aadit.sangvikar@gmail.com"; 

    // $from = $_POST['email']; 
    // $full_name = $_POST['full_name'];
    // $school = $_POST['school'];
    // $grade = $_POST['grade'];
    // $extra = $_POST['extra'];

    // $subject = "Black Knights Join Form Submission";
    


    
    // $headers = array("From: aadit.sangvikar@gmail.com",
    //     "Reply-To: aadit.sangvikar@gmail.com",
    //     "X-Mailer: PHP/" . PHP_VERSION
    // );
    // $headers = implode("\r\n", $headers);

    // @mail($to,$subject,$message,$headers);
    mail("aadit.sangvikar@gmail.com", "Here is the subject line", $_POST["insert your message here"]. "From: an@email.address");
    
   
    
}
?>
