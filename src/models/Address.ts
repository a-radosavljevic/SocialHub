class Address {
    public street: string;
    public suite: string;
    public city: string;
    public zipcode: string;

    constructor(street: string, suite: string, city: string, zipcode: string){
        this.street = street;
        this.suite = suite;
        this.city = city;
        this.zipcode = zipcode;
    }
}

export default Address;