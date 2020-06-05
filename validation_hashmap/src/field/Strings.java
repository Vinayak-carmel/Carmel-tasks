package field;

public class Strings {
    final static String STRING_REGEX = "^[a-zA-Z0-9~!?.$%&_,;'\"\\s]+$";
    final static String INTEGER_REGEX = "^\\d+$";
    final static String EMAIL_REGEX = "^[_A-Za-z0-9-+]+(\\.[_A-Za-z]+)*@" + "[A-Za-z]+(\\.[A-Za-z]+)*(\\.[A-Za-z]{2,3})$";
    final static String FLOAT_REGEX = "^[+-]?([0-9]*[.])?[0-9]+";
    final static String DATE_REGEX = "^(1[0-2]|0[1-9])/(3[01]|[12][0-9]|0[1-9])/[0-9]{4}$";
    final static String DEFAULT_REQUIRED_ERROR_MSG = " is required.";
    final static String DEFAULT_TYPE_ERROR_MSG = " contains invalid value.";
    final static String DEFAULT_ALLOWED_SPECIAL_CHARS_ERROR = " contains invalid characters.";
    final static String DEFAULT_REGEXP_ERROR = " contains invalid input.";
    final static String DEFAULT_RANGE_MIN_ERROR = "  is less than the allowed range.";
    final static String DEFAULT_RANGE_MAX_ERROR = "  is greater that the allowed range.";
    final static String DEFAULT_LENGTH_ERROR_MSG = " exceeds the allowed length.";
    final static String DEFAULT_FORMAT_ERROR_MSG = " format is invalid.";
    final static String DEFAULT_DATE_FORMAT_ERROR_MSG = " format is invalid and Enter the date in MM/DD/YYYY format.";
}
