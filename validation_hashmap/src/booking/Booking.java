package booking;

import field.Field;

enum rules{
    name("fullname"),type("string"),mandatory("true"),value("Vinayak");

    private String rule;

    public String getRule() {
        return this.rule;
    }

    rules(String rule) {
        this.rule = rule;
    }
}
public class Booking {

    private Field fullname;
    private Field checkin;
    private Field checkout;

    public Field getFullname() {
        return fullname;
    }

    public void setFullname(Field fullname) {
        this.fullname = fullname;
    }

    public Field getCheckin() {
        return checkin;
    }

    public void setCheckin(Field checkin) {
        this.checkin = checkin;
    }

    public Field getCheckout() {
        return checkout;
    }

    public void setCheckout(Field checkout) {
        this.checkout = checkout;
    }

    public boolean createBooking(){
    rules[] fields = rules.values();
    for (rules rule : fields){
        System.out.println(rule.name() + " " + rule.getRule());
    }

        String[][] field = {
                {"name","fullname"},
                {"type","string"},
                {"mandatory","true"},
                {"value","Vinayak"},
        };

        this.fullname = new Field(field);
        this.fullname.isValid();
//        System.out.println(fullname.getErrorMessage());
//        System.out.println("entered full_name is " + fullname.isValid());

        return true;
    }
}
