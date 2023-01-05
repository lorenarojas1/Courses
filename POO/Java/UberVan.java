import java.util.ArrayList;
import java.util.Map;

public class UberVan extends Car{
    Map<String, Map<String,Integer>> typeCarAccepted;
    ArrayList<String> seatMaterial;

    public UberVan(String license, Account driver) {
        super(license, driver);
    }

    /*
    public UberVan(String license, Account driver,
    Map<String, Map<String,Integer>> typeCarAccepted,
    ArrayList<String> seatMaterial) {
        super(license, driver);
        this.typeCarAccepted = typeCarAccepted;
        this.seatMaterial = seatMaterial;
    }
    */

    @Override
    public void setPassenger(Integer passenger) {
        if(passenger == 6){
            this.passenger = passenger;
        } else {
            System.out.println("Must assign 6 passengers");
        }
    }
}