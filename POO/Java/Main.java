
class Main {
    public static void main(String[] args) {
        System.out.println("Hola Mundo");

        UberX uberX = new UberX("AMQ123", new Account("Andres Herrera", "AND123"), "VW", "Polo");
        // car.license = "AMQ123";
        // car.driver = "Andres Herrera";
        // car.passenger = 4;
        uberX.setPassenger(4);
        uberX.printDataCar();

        UberVan uberVan = new UberVan("QWE567", new Account("Lorena Rojas", "ROE123"));
        // car2.license = "QWE567";
        // car2.driver = "Lorena Rojas";
        uberVan.setPassenger(6);
        uberVan.printDataCar();
    }
}