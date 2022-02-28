function validate_phone() {
    let phone = document.getElementById('phone').value;
    if (phone.length != 10) 
        return false;

    for (let i = 0; i < phone.length; i++) 
        if (isNaN(phone[i])) 
            return false;

    return true;
} 

function validate_email() {
    let email = document.getElementById('email').value;
    email = email.split('@');
    if (email.length != 2)
        return false;
    
    domain = email[1].split('.');
    if (domain.length != 2)
        return false;

    for (let i = 0; i < email[0].length; i++) 
        if (!email[0].match(/^[0-9a-z]+$/))
            return false;
    return true;
}

function validate() {
    if (!validate_email(document.getElementById('email').value) ) {
        alert('Invalid email!');
        return;
    }
    else if (!validate_phone(document.getElementById('phone').value) ) {
        alert('Invalid phone!');
        return;
    }
    alert('Order confirmed!');
}

document.getElementsByClassName('confirm-btn')[0].addEventListener('click', validate);

window.addEventListener('keypress', function(e) {
    if (e.key != 'Enter')
        return;
    validate();
});