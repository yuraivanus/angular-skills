import { Component } from "@angular/core";

@Component({
    selector: 'app-first',
    templateUrl: './first.component.html',
    styleUrls: ['./first.component.css']
})
export class FirstComponent {

    onClick() {
        this.isShow = !this.isShow;
    }

    
     Name: string = "";
     Lastname: string = "";
     age: number = 22;
     name: string = "";
     lastname: string = "";
     ages: string = "";
     job: string = "";
     isShow: boolean = true;

    // isDisabled: boolean = false;
    // newElement: number = "";

    // onClick() {
    //     alert("Hey, "+ this.name);
    // }

    // showDiv() {
    //     this.isShow = !this.isShow;
    // }

    // numbers: any = [1, 2, 3, 4, 5, 6, 7];

    // addElement() {
    //     this.numbers.push(this.newElement);
    // }
}