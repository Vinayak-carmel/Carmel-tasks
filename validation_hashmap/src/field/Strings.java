package field;

public class Strings {
    final static String STRING_REGEX = "^[a-zA-Z0-9~!?.$%&_,;'\"\\s]+$";
    final static String INTEGER_REGEX = " /^\\d+$/";
    final static String DEFAULT_REQUIRED_ERROR_MSG = " is required.";
    final static String DEFAULT_TYPE_ERROR_MSG = " contains invalid value.";
    final static String DEFAULT_ALLOWED_SPECIAL_CHARS_ERROR = " contains invalid characters.";
    final static String DEFAULT_REGEXP_ERROR = " contains invalid input.";
    final static String DEFAULT_RANGE_MIN_ERROR = "  is less than the allowed range.";
    final static String DEFAULT_RANGE_MAX_ERROR = "  is greater that the allowed range.";
    final static String DEFAULT_LENGTH_ERROR_MSG = " exceeds the allowed length.";
    final static String DEFAULT_FORMAT_ERROR_MSG = " format is invalid.";
}
