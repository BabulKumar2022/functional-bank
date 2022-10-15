document.getElementById('login-submit').addEventListener('click', function(){
   //get user email
   const emailField = document.getElementById('user-email');
   const userEmail = emailField.value;
//    console.log(userEmail)
//get user password
    const passwordField = document.getElementById('user-pass');
    const userPassword = passwordField.value;
    // console.log(userPassword)

    //validation
    //cheek user email and password
    if(userEmail == 'babul@gmail.com' && userPassword =='123456'){
        // console.log('valid user')
        window.location.href = 'banking.html';

    }else{
        alert('Incorrect password or email')
    }
})