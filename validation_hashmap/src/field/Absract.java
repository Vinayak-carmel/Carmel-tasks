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
            this.setRangeMax(50);
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
        boolean valid = true;
//    try{
//        // Check the mandatory rule
//        if (!mandatory){
//            throw new Exception( "Field is not mandatory");
//        }
//    }catch (Exception e){
//        System.out.println(e.getMessage());
//    }

        // Based on the field type we should invoke the appropriate validation function

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

        return valid;
    }

    // Helper functions
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

    private boolean isString(){
        if (!mandatoryChecker(mandatory,value)){
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            System.out.println(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }
        if(!lengthChecker(maxLength,value)){
            this.setErrorCode(200);
            this.setErrorMessage(name + Strings.DEFAULT_LENGTH_ERROR_MSG);
            System.out.println(name + Strings.DEFAULT_LENGTH_ERROR_MSG);
            return false;
        }
        if (!checkStringRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            System.out.println(name + Strings.DEFAULT_REGEXP_ERROR);
            return false;
        }

        return false;

    }

    private boolean isInteger(){
        if (!mandatoryChecker(mandatory, value)) {
            this.setErrorCode(100);
            this.setErrorMessage(name + Strings.DEFAULT_REQUIRED_ERROR_MSG);
            System.out.println(name +Strings.DEFAULT_REQUIRED_ERROR_MSG);
            return false;
        }
        if (!lengthChecker(rangeMax,value)) {
            this.setErrorCode(200);
            this.setErrorMessage(name + Strings.DEFAULT_LENGTH_ERROR_MSG);
            System.out.println(name+ Strings.DEFAULT_LENGTH_ERROR_MSG);
            return false;
        }
        if(!checkIntRegex(value)){
            this.setErrorCode(300);
            this.setErrorMessage(name + Strings.DEFAULT_REGEXP_ERROR);
            System.out.println(name + Strings.DEFAULT_REGEXP_ERROR );
            return false;
        }
        return false;
    }

    private boolean isFloat(){
        System.out.println("this is isfloat method");
        return false;
    }
    private boolean isDate(){
        System.out.println("this is isdate method");
        return false;
    }
    private boolean isEmail(){
        System.out.println("this is isEmail method");
        return false;
    }

    private  Boolean mandatoryChecker(boolean isMandatory, String enteredString){
        return !isMandatory || (enteredString != null && !enteredString.isEmpty());
    }
    private  boolean lengthChecker(Integer maxLength, String enteredString) {
        return enteredString.length() <= maxLength;
    }
    private  boolean checkStringRegex(String enteredString) {
        if (enteredString.length() == 0){
            return true;
        }
        return enteredString.matches(Strings.STRING_REGEX);
    }
    private boolean checkIntRegex(String value){
        if (!value.equals(null)){
            return true;
        }
        return value.matches(Strings.INTEGER_REGEX);
    }

}
