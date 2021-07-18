// Login
function login(type){

console.log(type, type == '1');
    $('#page-top').removeClass('login_body');
    $('#page-top').addClass('main_body');
    $("#agricultor_nav").show();
    $("#login").hide();
    if (type == '1') {
        $('#title_name').text('Sejá Bem vindo Agricultor!');
    }else{
        $('#title_name').text('Sejá Bem vindo Agrônomo!');
    }
    
    // disabledConsultLogin(true);
    // $('#error_login').text('');

    // let data = {
    //     "email": $("#email_login").val(),
    //     "password": $("#password_login").val()
    // }

    // consultData("login", "POST", data)
    // .then( async result => {
    //     if(result.status == 400){
    //         $('#error_login').text('Email ou senha incorretos.');
    //     }
    //     if(result.status == 200){
    //         localStorage.clear();
    //         let data = await result.json().then(result => {return result});
    //         localStorage.setItem('access_nlw', JSON.stringify(data));
    //         $("#login").hide();
    //         validAces();
    //     }
    // }).catch(async e => {			

	// }).finally(result => {
        
    //     disabledConsultLogin(false);
    // });
}
function disabledConsultLogin(valid){
    if(valid){       
        $('#error_login').text('');
        $('.btn').prop('disabled', true);
        $('#email_login').prop('disabled', true);
        $('#password_login').prop('disabled', true);    
        // $('#login_recover_account').hide();        
    }else{       
        $('.btn').prop('disabled', false);
        $('#email_login').prop('disabled', false);
        $('#password_login').prop('disabled', false);
        // $('#login_recover_account').show();
    }   
}

function sair(){
    $('#page-top').removeClass('main_body');
    $('#page-top').addClass('login_body');
    $("#agricultor_nav").hide();
    $("#login").show();
    localStorage.clear();
}


$(document).ready(function(){
    $('.login-info-box').fadeOut();
    $('.login-show').addClass('show-log-panel');
});


$('.login-reg-panel input[type="radio"]').on('change', function() {
    if($('#log-login-show').is(':checked')) {
        $('.register-info-box').fadeOut(); 
        $('.login-info-box').fadeIn();
        
        $('.white-panel').addClass('right-log');
        $('.register-show').addClass('show-log-panel');
        $('.login-show').removeClass('show-log-panel');
        
    }
    else if($('#log-reg-show').is(':checked')) {
        $('.register-info-box').fadeIn();
        $('.login-info-box').fadeOut();
        
        $('.white-panel').removeClass('right-log');
        
        $('.login-show').addClass('show-log-panel');
        $('.register-show').removeClass('show-log-panel');
    }
});
  
