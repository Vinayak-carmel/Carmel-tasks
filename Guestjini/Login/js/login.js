var defaultRequiredErrorMsg = " is required.";
var defaultTypeErrorMsg = " contains invalid value.";
var defaultAllowedSpecialCharsError = " contains invalid characters.";
var defaultRegExpError = " contains invalid input.";
var defaultRangeMinError = "  is less than the allowed range.";
var defaultRangeMaxError = "  is greater that the allowed range.";
var defaultLengthErrorMsg = " exceeds the allowed length.";
var defaultFormatErrorMsg = " format is invalid.";

function load(email) {
    var val = document.getElementById(email).value;
    init(model, val);
}

function init(model, val) {
    var value = val;
    console.log(value);
    console.log(model.fields[0].required);
}

function validateField(type, value) {
    var fieldType = type;
    var val = value;
    var result;
    switch (fieldType) {
        case 'email':
            result = validateEmail(val);
            break;

        default:
            alert('done')
            break;
    }
}

function validateEmail(val) {
    alert("emailvalidation")
    var isValid = true;
    var result = {};

}

function namecheckLenght(val) {

}