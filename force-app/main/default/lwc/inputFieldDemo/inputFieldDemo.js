// helloExpressions.js
import { LightningElement, track } from 'lwc';

export default class HelloExpressions extends LightningElement {
    // variables are defined as we want to set values to make uppsercase
    firstName = '';
    lastName = '';

     fullName1 = {firstName : '',lastName : ''};
     
        

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
            //this.fullName1.firstName = event.target.value;
            this.fullName1.firstName = 'John' + this.firstName;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
            //this.fullName1.lastName = event.target.value;
            this.fullName1.lastName = 'Doe'+this.lastName;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
    get uppercasedFullName1() {
        return `${this.fullName1.firstName} ${this.fullName1.lastName}`.toUpperCase();
    }
}