var mailIsEmpty = true;
var passwordIsEmpty = true;

$(function(){
    $('#mailInput').keyup(function(){
        mailIsEmpty = ($(this).val() == '');
        maybeEnableLogin();
    });});


$(function(){
    $('#passwordInput').keyup(function(){
        passwordIsEmpty = ($(this).val() == '');
        maybeEnableLogin();
    });});

function maybeEnableLogin()
{
    if(mailIsEmpty || passwordIsEmpty) {
        //If there is no text within the input then disable the button
        $('#loginButton').attr('disabled', 'disabled');
    } else {
        //If there is text in the input, then enable the button
        $('#loginButton').removeAttr('disabled');
    }
}	