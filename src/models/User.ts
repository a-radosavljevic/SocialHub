import Address from './Address';

class User {
    private id: number;
    private name: string;
    private email: string;
    private address: Address;

    constructor(id: number, name: string, email: string, address: Address){
        this.id = id;
        this.name = name;
        this.email = email;
        this.address = address;
    }
}

export default User;