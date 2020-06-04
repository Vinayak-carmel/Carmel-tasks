package booking;

import field.Field;

public class Booking {

    private Field fullname;
    private Field checkin;
    private Field checkout;


    public enum rules{

    }

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

        String[][] field = {
            {"name","fullname"},
            {"type","string"},
            {"mandatory","true"},
            {"value","Vinayak"},
        };

        this.fullname = new Field(field);

        this.fullname.isValid();
        System.out.println(fullname.getErrorMessage());
        System.out.println(fullname.isValid());

        return true;
    }
}
