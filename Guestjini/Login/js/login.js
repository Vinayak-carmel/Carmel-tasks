function load() {
    InitModel(login_model);
    validateForm();
}

function showPswd(pswd, image) {
    var showPassword = document.getElementById(pswd);
    var show = document.getElementById(image);
    if (show.alt == 'unclick') {
        showPassword.type = 'text';
        show.alt = 'clicked';
        show.src = '../ICONS/guestjini-login-assets/Artboard 1 copy 32@16x.png';
    } else {
        showPassword.type = 'password';
        show.alt = 'unclick';
        show.src = '../ICONS/guestjini-login-assets/Artboard 1 copy 16@16x.png';
    }
}