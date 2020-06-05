package field;

public class Absract {

    private String name;
    private String type;
    private String value;
    private boolean mandatory;
    private int maxLength;
    private int rangeMin;
    private int rangeMax;
    private Integer errorCode;
    private String errorMessage;


    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    public void setMandatory(boolean mandatory) {
        this.mandatory = mandatory;
    }

    public int getMaxLength() {
        return maxLength;
    }

    public void setMaxLength(int maxLength) {
        this.maxLength = maxLength;
    }

    public int getRangeMin() {
        return rangeMin;
    }

    public void setRangeMin(int rangeMin) {
        this.rangeMin = rangeMin;
    }

    public int getRangeMax() {
        return rangeMax;
    }

    public void setRangeMax(int rangeMax) {
        this.rangeMax = rangeMax;
    }

    public Integer getErrorCode() {
        return errorCode;
    }

    public void setErrorCode(Integer errorCode) {
        this.errorCode = errorCode;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public Absract(String[][]_field) {

        try{
            // Do we have the required attributes of a field?

            // 1. The size of the array should be atleast 4 rows (name, type, mandatory, value)
            System.out.println("Array length " + _field.length);
            if(_field.length < 4){
                throw new Exception("Total no of required attributes is 4, but only " + _field.length + " is given");
            }

            // 2. Do we have the field name attribute?
            if(!_hasFieldAttribute(_field,"name")){
                throw new Exception("Attribute name is not given.");
            }

            // 3. Do we have the field type attribute?
            if(!_hasFieldAttribute(_field,"type")){
                throw new Exception("Attribute type is not given.");
            }

            // 4. Do we have the field mandatory attribute?
            if(!_hasFieldAttribute(_field,"mandatory")){
                throw new Exception("Attribute mandatory is not given.");
            }

            // 5. Do we have the field value attribute?
            if(!_hasFieldAttribute(_field,"value")){
                throw new Exception("Attribute value is not given.");
            }

            // Set the values to the private members
            String booleanvalue = _field[2][1];
            mandatory = Boolean.parseBoolean(booleanvalue);
            this.setName(_field[0][1]);
            this.setType(_field[1][1]);
            this.setValue(_field[3][1]);
            this.setMandatory(mandatory);
            this.setRangeMax(1);
            this.setRangeMin(1);
            this.setMaxLength(255);

            for (int i = 0; i<_field.length; i++){
                System.out.println(_field[i][0]  + " " + _field[i][1]);
            }

        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }

    public boolean isValid(){
        // Based on the field type we should invoke the appropriate validation function
            try{
           // Check the mandatory rule
              if (!mandatory){
                throw new Exception( "Field is not mandatory");

            }else{
                 boolean result;
                 switch(this.type){
                     case "string":
                         result = isString();
                         break;
                     case "int":
                         result = isInteger();
                         break;
                     case "float":
                         result = isFloat();
                         break;
                     case "date":
                         result = isDate();
                         break;
                     case "email":
                         result = isEmail();
                        break;
                     default:
                        result = isString();
                        break;
                }
            return result;
            }
            }catch (Exception e){
            System.out.println(e.getMessage());
    }
            return true;
    }

    //1. Check weather the give String is valid or not.
    private boolean isString(){
        if (!mandatoryChecker(mandatory,value)){
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }

        if(!lengthChecker(maxLength,value)){
            this.setErrorCode(200);
            this.setErrorMessage(name + Strings.DEFAULT_LENGTH_ERROR_MSG);
            return false;
        }

        if (!checkStringRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            return false;
        }
        return true;
    }

    //2. Check weather the give Integer number is valid or not.
    private boolean isInteger(){
        if (!mandatoryChecker(mandatory, value)) {
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }

        if(!checkIntRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            return false;
        }
        return true;
    }

    //3. Check weather the give Float Number is valid or not.
    private boolean isFloat(){
        if (!mandatoryChecker(mandatory, value)) {
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }

        if(!checkFloatRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            return false;
        }
        return true;
    }

    //4. Check weather the give Date is valid or not.
    private boolean isDate(){
        if (!mandatoryChecker(mandatory, value)) {
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }
        if (!checkDateRegex( value)) {
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_DATE_FORMAT_ERROR_MSG);
            return false;
        }
        return true;
    }

    private boolean isEmail(){
        if (!mandatoryChecker(mandatory, value)) {
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }

        if (!lengthChecker(maxLength,value)) {
            this.setErrorCode(200);
            this.setErrorMessage(name + Strings.DEFAULT_LENGTH_ERROR_MSG);
            return false;
        }

        if(!checkEmailRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            return false;
        }
        return true;
    }

    // Helper functions
    //1. Check the Field attributes.
    private boolean _hasFieldAttribute(String[][]_field, String _attribute){
        boolean found = false;
        for(int i=0; i<_field.length; i++){
            if(_field[i][0] == _attribute ){
                found= true;
                break;
            }
        }
        return found;
    }

    //2.Check the Mandatory rule.
    private  Boolean mandatoryChecker(boolean isMandatory, String value){
        return !isMandatory || (value != null && !value.isEmpty());
    }

    //3.Check the Length rule.
    private  boolean lengthChecker(Integer maxLength, String value) {
        return value.length() <= maxLength;
    }

    //4.Check the Regular Expression rule.
    private  boolean checkStringRegex(String value) {
        if (value.length() == 0){
            System.out.println("String length is zero");
            return true;
        }
        return value.matches(Strings.STRING_REGEX);
    }

    private boolean checkIntRegex(String value){
        if(!value.equals(" ")){
            return (value.matches(Strings.INTEGER_REGEX));
        }else{
            return false;
        }
    }

    private boolean checkDateRegex(String value){
        if (!value.equals(" ")){
            return (value.matches(Strings.DATE_REGEX));
        }
        return false;
    }

    private boolean checkEmailRegex(String value){
        if(!value.equals(" ")){
            return value.matches(Strings.EMAIL_REGEX);
        }else{
            return false;
        }
    }
    private boolean checkFloatRegex(String value){
        if (!value.equals(" ")){
            return value.matches(Strings.FLOAT_REGEX);
        }
        return false;
    }
}
