function nextNav(dest) {
    location.href = dest;

}

function login(errorID, emailID, pswdID, borderID, invalidID, forgot) {

    var errorMsg = document.getElementsByClassName(errorID);
    var emailBox = document.getElementById(emailID);
    var passwordBox = document.getElementById(pswdID);
    var invalidMsg = document.getElementById(invalidID);
    var border = document.getElementById(borderID);
    var forgotPadding = document.getElementById(forgot);


    if (emailBox.value == "" || passwordBox.value == "") {
        emailBox.style.border = '1px solid #BF574A';
        border.style.border = '1px solid #BF574A';
        border.style.marginTop = '5.6%';
        errorMsg[0].style.display = "block";
        errorMsg[1].style.display = "block";
        forgotPadding.style.paddingTop = "0";
    } else if (emailBox.value !== 'example@address.com' || passwordBox.value !== '12345') {
        invalidMsg.style.display = "block"
        emailBox.style.marginTop = '0';
    }
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

function forgotPswd(error, inputText, invalid) {

    var errorMsg = document.getElementById(error);
    var inputField = document.getElementById(inputText);
    var mobileNum = document.getElementsByClassName(invalid);

    if (inputField.value == "") {
        inputField.style.border = '1px solid #BF574A';
        errorMsg.style.display = "block";
    } else if (inputField.value !== 'example@address.com') {
        mobileNum[0].style.display = 'block';
        inputField.style.marginTop = '0';
    } else {
        nextNav('../HTML/lonin-screen-3.html')
    }


}


function appAccess(textField, msg, regemail, space) {

    var textValue = document.getElementsByClassName(textField);
    var errorMsg = document.getElementsByClassName(msg);
    var credential = document.getElementById(regemail);
    var spaceZero = document.getElementById(space);

    if (textValue[0].value == "" || textValue[1].value == "") {
        textValue[0].style.border = '1px solid #BF574A';
        textValue[1].style.border = '1px solid #BF574A';
        errorMsg[0].style.display = 'block';
        errorMsg[1].style.display = 'block';
    } else if (textValue[0].value !== "example@address.com" || textValue[1].value !== "7795347907") {
        credential.style.display = 'block';
        spaceZero.style.paddingTop = '0';
    } else {
        nextNav('../HTML/lonin-screen-16.html')
    }
}

function accActivation(textField, msg, newoutline, confoutline) {

    var textValue = document.getElementsByClassName(textField);
    var errorMsg = document.getElementsByClassName(msg);
    var newborderColor = document.getElementById(newoutline)
    var confborderColor = document.getElementById(confoutline)

    if (textValue[0].value == "" || textValue[1].value == "") {
        newborderColor.style.border = '1px solid #BF574A';
        confborderColor.style.border = '1px solid #BF574A';
        errorMsg[0].style.display = 'block';
        errorMsg[1].style.display = 'block';
    } else if (textValue[0].value === textValue[1].value) {
        nextNav('../HTML/lonin-screen-18.html')
    } else {
        confborderColor.style.border = '1px solid #BF574A';
        errorMsg[1].style.display = 'block';
    }
}

function otpEnter(invalidOtp, borderColor, space) {

    var invalidotp = document.getElementById(invalidOtp);
    var Otpborder = document.getElementsByClassName(borderColor);
    var topSpace = document.getElementById(space);
    OTP = Otpborder[0].value + Otpborder[1].value + Otpborder[2].value + Otpborder[3].value;

    if (OTP === '1234') {
        nextNav('../HTML/lonin-screen-14.html');
    } else {
        Otpborder[0].style.border = '1px solid #BF574A';
        Otpborder[1].style.border = '1px solid #BF574A';
        Otpborder[2].style.border = '1px solid #BF574A';
        Otpborder[3].style.border = '1px solid #BF574A';
        invalidotp.style.display = 'block'
        topSpace.style.paddingTop = '0';
    }


}