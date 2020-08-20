/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 * SL.No   Date		Description
 1       10-Apr-2015   Updated regular expression check
 2       19-Apr-2015   Updated radio field type
 */
var defaultRequiredErrorMsg = " is required.";
var defaultTypeErrorMsg = " contains invalid value.";
var defaultAllowedSpecialCharsError = " contains invalid characters.";
var defaultRegExpError = " contains invalid input.";
var defaultRangeMinError = "  is less than the allowed range.";
var defaultRangeMaxError = "  is greater that the allowed range.";
var defaultLengthErrorMsg = " exceeds the allowed length.";
var defaultFormatErrorMsg = " format is invalid.";

function InitModel(model) {
    model.errorText = [];
    model.isValid = true;
    model.getField = function(key) {
        if (!key) {
            return null;
        }
        key = key.trim();
        if (key === '') {
            return null;
        }
        var totalLength = this.fields.length;
        var i = 0;
        for (i = 0; i < totalLength; i++) {
            if (this.fields[i].name === key) {
                return this.fields[i];
            }
        }
        return null;
    };
    model.validateField = function(field, value) {
        if (!field.type) {
            field.type = "string";
        }
        var result;
        switch (field.type) {
            case 'string':
                result = validateString(field, value);
                break;
            case 'int':
                result = validateInteger(field, value);
                break;
            case 'float':
                result = validateFloat(field, value);
                break;
            case 'date':
                result = validateDate(field, value);
                break;
            case 'number':
                result = validateNumber(field, value);
                break;
            case 'email':
                result = validateEmail(field, value);
                break;
            default:
                result = validateString(field, value);
                break;
        }
        console.log(result);
        return result;
    };
    model.setFieldData = function(key, value) {
        if (!this.data) {
            this.data = {};
        }
        var fieldDescription = this.getField(key);
        if (fieldDescription) {
            if (fieldDescription.validate) {
                var validateResult = this.validateField(fieldDescription, value);
                if (validateResult['success']) {
                    this.data[key] = value;
                    return true;
                } else {
                    this.isValid = false;
                    this.errorText.push({ name: key, displayName: fieldDescription.displayName, error: validateResult['errorText'] });
                    return false;
                }
            } else {
                this.data[key] = value;
                return true;
            }
        }
    };

    model.setFromArray = function(_data) {
        if (!_data || !(_data.length) < 1) {
            return false;
        }
        $.each(_data, function(key, value) {
            model.setFieldData(key, value);
        });
        return model;
    };

    model.readForm = function() {
        this.errorText = [];
        this.isValid = true;
        switch (this.type) {
            case 'multiCluster':
                this.data = readMultiCluster();
                break;
            default:
                this.data = readSimple();
                break;
        }
        return this.data;
    };

    function readSimple() {
        var totalLength = model.fields.length;
        var i = 0;
        var field;
        for (i = 0; i < totalLength; i++) {
            field = model.fields[i];
            var val = readFieldValue(field.type, field.name);
            if (val) {
                model.setFieldData(field.name, val);
            } else {
                model.setFieldData(field.name, '');
            }
        }
        return model.data;
    }

    function readFieldValue(type, name) {
        var val = '';
        switch (type) {
            case 'richtext':
                {
                    val = $("#" + name + "Area .Editor-container #contentarea").html().replace(/"/g, "'");
                }
                break;
            case 'date':
                {
                    if ($("#" + name).val()) {
                        if ($("#" + name).val().trim() != "") {
                            var tmpVal = $("#" + name).val().split('/');
                            tmpVal = tmpVal[1] + '/' + tmpVal[0] + '/' + tmpVal[2];
                            tmpVal = new Date(tmpVal)
                            val = tmpVal.getFullYear() + '-' + (tmpVal.getMonth() + 1) + '-' + tmpVal.getDate();
                        }
                    }
                }
                break;
            case 'datetime':
                {
                    if ($("#" + name).val()) {
                        if ($("#" + name).val().trim() != "") {
                            var tmpVal = $("#" + name).val().split('/');
                            tmpVal = tmpVal[1] + '/' + tmpVal[0] + '/' + tmpVal[2];
                            tmpVal = new Date(tmpVal)
                            val = tmpVal.getFullYear() + '-' + (tmpVal.getMonth() + 1) + '-' + tmpVal.getDate() + ' ' + tmpVal.getHours() + ':' + tmpVal.getMinutes() + ':' + tmpVal.getSeconds();
                        }
                    }
                }
                break;
            case 'radio':
                {
                    val = getRadioCheckedValue(name);
                }
                break;
            case 'checkbox':
                {
                    val = getCheckboxCheckedValue(name);
                }
                break;
            default:
                {
                    val = $("#" + name).val();
                }
                break;
        }
        if (!val) {
            val = "";
        }
        return val.trim();
    }

    function getRadioCheckedValue(radio_name) {
        var oRadio = $('input[name="' + radio_name + '"]');

        for (var i = 0; i < oRadio.length; i++) {
            if (oRadio[i].checked) {
                return oRadio[i].value;
            }
        }

        return '0';
    }

    function getCheckboxCheckedValue(check_name) {
        var oCheck = $('input[name="' + check_name + '"]');

        for (var i = 0; i < oCheck.length; i++) {
            if (oCheck[i].checked) {
                return oCheck[i].value;
            }
        }

        return '0';
    }


    function readMultiCluster() {
        var jsonData = [];
        var clusterData = {};
        $("." + model.dataHolderClass).each(function() {
            var totalLength = model.fields.length;
            var i = 0;
            var field;
            clusterData = {};
            for (i = 0; i < totalLength; i++) {
                field = model.fields[i];
                var val = $(this).data(field.name);
                if (val) {
                    clusterData[field.name] = val;
                } else {
                    clusterData[field.name] = "";
                }
            }
            jsonData.push(clusterData);
        });
        model.data = jsonData;
        return model.data;
    }
    model.getErrorTextPlain = function() {
        var totalErrors = this.errorText.length;
        var i = 0;
        var returnText = "";
        for (i = 0; i < totalErrors; i++) {
            returnText += this.errorText[i].error + "\n";
        }
        return returnText;
    };

    model.getErrorTextHTML = function() {
        var totalErrors = this.errorText.length;
        var i = 0;
        var returnText = "";
        for (i = 0; i < totalErrors; i++) {
            returnText += this.errorText[i].error + "<br>";
        }
        return returnText;

    };

    model.getErrorFieldsList = function() {
        var totalErrors = this.errorText.length;
        var i = 0;
        var returnText = "";
        for (i = 0; i < totalErrors; i++) {
            returnText += this.errorText[i].displayName + "</br>\n";
        }
        return returnText;

    };
}

function validateEmail(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkEmail(field, val)) {
        result["success"] = false;
        if (field.typeErrorMessage) {
            if (field.typeErrorMessage.trim() !== "") {
                result["errorText"] = field.typeErrorMessage.trim();
            } else {
                result["errorText"] = field.displayName + defaultTypeErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultTypeErrorMsg;
        }
        return result;
    }
    if (field.length) {
        if (field.length > 0) {
            if (val.length > field.length) {
                result["success"] = false;
                if (field.lengthErrorMsg.trim() !== "") {
                    //result["errorText"] = 'In ' + field.displayName + ', ' + field.lengthErrorMsg.trim();
                    result["errorText"] = field.lengthErrorMsg.trim();
                } else {
                    result["errorText"] = field.displayName + defaultLengthErrorMsg;
                }
                return result;
            }
        }
    }
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }
    result["success"] = true;
    result["errorText"] = "";
    return result;
}

function validateInteger(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkNumber(field, val)) {
        result["success"] = false;
        if (field.typeErrorMessage) {
            if (field.typeErrorMessage.trim() !== "") {
                //result["errorText"] = 'In ' + field.displayName + ', ' + field.typeErrorMessage.trim();
                result["errorText"] = field.typeErrorMessage.trim();
            } else {
                result["errorText"] = field.displayName + defaultTypeErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultTypeErrorMsg;
        }
        return result;
    }
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }
    result["success"] = true;
    result["errorText"] = "";
    return result;
}

function validateFloat(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkDecimal(field, val)) {
        result["success"] = false;
        if (field.typeErrorMessage) {
            if (field.typeErrorMessage.trim() !== "") {
                result["errorText"] = field.typeErrorMessage.trim();
            } else {
                result["errorText"] = field.displayName + defaultTypeErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultTypeErrorMsg;
        }
        return result;
    }
    if (!checkMinVal(field, val)) {
        result["success"] = false;
        if (field.rangeMinError) {
            if (field.rangeMinError.trim() !== "") {
                result["errorText"] = field.rangeMinError.trim();
            } else {
                result["errorText"] = field.displayName + defaultRangeMinError;
            }
        } else {
            result["errorText"] = field.displayName + defaultRangeMinError;
        }
        return result;
    }
    if (!checkMaxVal(field, val)) {
        result["success"] = false;
        if (field.rangeMaxError) {
            if (field.rangeMaxError.trim() !== "") {
                result["errorText"] = field.rangeMaxError.trim();
            } else {
                result["errorText"] = field.displayName + defaultRangeMaxError;
            }
        } else {
            result["errorText"] = field.displayName + defaultRangeMaxError;
        }
        return result;
    }
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }

    result["success"] = true;
    result["errorText"] = "";
    return result;
}

function validateNumber(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkNumber(field, val)) {
        result["success"] = false;
        if (field.typeErrorMessage) {
            if (field.typeErrorMessage.trim() !== "") {
                result["errorText"] = field.typeErrorMessage.trim();
            } else {
                result["errorText"] = field.displayName + defaultTypeErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultTypeErrorMsg;
        }
        return result;
    }
    if (!checkMinVal(field, val)) {
        result["success"] = false;
        if (field.rangeMinError) {
            if (field.rangeMinError.trim() !== "") {
                result["errorText"] = field.rangeMinError.trim();
            } else {
                result["errorText"] = field.displayName + defaultRangeMinError;
            }
        } else {
            result["errorText"] = field.displayName + defaultRangeMinError;
        }
        return result;
    }
    if (!checkMaxVal(field, val)) {
        result["success"] = false;
        if (field.rangeMaxError) {
            if (field.rangeMaxError.trim() !== "") {
                result["errorText"] = field.rangeMaxError.trim();
            } else {
                result["errorText"] = field.displayName + defaultRangeMaxError;
            }
        } else {
            result["errorText"] = field.displayName + defaultRangeMaxError;
        }
        return result;
    }
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }

    result["success"] = true;
    result["errorText"] = "";
    return result;
}

function validateDate(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }
    result["success"] = true;
    result["errorText"] = "";
    return result;
}

function validateString(field, val) {
    var isValid = true;
    var result = {};
    var errorText = "";
    if (!checkRequired(field, val)) {
        result["success"] = false;
        if (field.requiredErrorMsg) {
            if (field.requiredErrorMsg.trim() !== "") {
                result["errorText"] = field.requiredErrorMsg.trim();
            } else {
                result["errorText"] = field.displayName + defaultRequiredErrorMsg;
            }
        } else {
            result["errorText"] = field.displayName + defaultRequiredErrorMsg;
        }
        return result;
    }
    if (field.length) {
        if (field.length > 0) {
            if (val.length > field.length) {
                result["success"] = false;
                if (field.lengthErrorMsg.trim() !== "") {
                    //result["errorText"] = 'In ' + field.displayName + ', ' + field.lengthErrorMsg.trim();
                    result["errorText"] = field.lengthErrorMsg.trim();
                } else {
                    result["errorText"] = field.displayName + defaultLengthErrorMsg;
                }
                return result;
            }
        }
    }
    if (field.regExp) {
        if (field.length > 0) {
            result["success"] = false;
            if (!val.match(field.regExp)) {
                if (field.lengthErrorMsg.trim() !== "") {
                    result["errorText"] = field.regExpError.trim();
                } else {
                    result["errorText"] = field.displayName + defaultFormatErrorMsg;
                }
            }
        }
        return result;
    }
    result["success"] = isValid;
    result["errorText"] = errorText;
    return result;
}

function checkRequired(field, val) {
    if (field.required) {
        if (!val || val === "") {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function checkMinVal(field, val) {
    if (field.validate && val !== "" && field.rangeMin !== "") {
        var min = parseInt(field.rangeMin);
        if (val < min) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function checkMaxVal(field, val) {
    if (field.validate && val !== "" && field.rangeMax !== "") {
        var max = parseInt(field.rangeMax);
        if (val > max) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function checkNumber(field, val) {
    if (field.validate && val !== "") {
        return /^\d+$/.test(val);
    } else {
        return true;
    }
}

function checkDecimal(field, val) {
    if (field.validate && val !== "") {
        return /^\d*\.?\d*$/.test(val);
    } else {
        return true;
    }
}

function checkEmail(field, val) {
    if (field.validate && val !== "") {
        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
    } else {
        return true;
    }

}

function clearAllCookies() {
    var cookies = $.cookie();
    for (var cookie in cookies) {
        $.removeCookie(cookie);
    }
}

function validateForm() {
    login_model.readForm();
    if (login_model.isValid) {
        alert('SAVE')
            // saveRecord();
    } else {
        // updateFormMessage('frm-error', CONST_FORM_ERROR_DEFAULT_TITLE, model_user.getErrorTextHTML());
        alert("Has a Error")
    }
}