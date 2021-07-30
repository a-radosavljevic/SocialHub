class Property {
    public value: string;
    public error: string;

    constructor(value: string = "", error: string = "") {
        this.value = value;
        this.error = error;
    }
}

export default Property;