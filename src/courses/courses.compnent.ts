import { CoursesService } from './courses.service';

import { Component } from "@angular/core";

@Component({
    selector: 'courses',
    template: `
    <h2>{{title}}</h2>
    <h2 [textContent]="title"></h2>

    <ul> 
      <li *ngFor="let course of courses">
      {{course}} 
      </li>

    </ul>
    <img src="{{imageUrl}}"/>
    <img [src]="imageUrl"/>

    <table>
     <tr>
     <td [attr.colSpan]="colSpan" >rrrr </td>    
   </tr>    

    </table>
    
    <button class="btn btn-primary" [class.active]="isActive" >Save bootstrap with class binding</button>
    
        <br>
        <br>

    <button [style.backgroundColor]="isActive ? 'blue':'white'">Save with style binding</button>

    <br>
    <br>

    <div (click)="onDivClicked()">
    <button (click)="onSave($event)" >Save with event binding</button>
    </div>

    <!-- <input [value]="email"  (keyup.enter)="email=$any($event.target).value; onKeyUp()" /> -->
    <input [(ngModel)]="email"  (keyup.enter)="onKeyUp()" />

    {{course.title |uppercase|lowercase }}<br/>
    {{course.students |number }}<br/>
    {{course.rating |number:'2.1-1'}}<br/>
    {{course.price | currency:'USD':true:'3.2-2'}}<br/>
    {{course.releaseDate | date:'long'}}<br/>
    <br/>

    {{text| summary:10}}
    `
})

export class CoursesCompenent {

    title = "List Of Courses";
    courses;
    imageUrl = 'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg';
    colSpan = 2;

    email = "rrrr";


    course = {
        title: "The Complete Angular Course",
        rating: 4.9745,
        students: 30123,
        price: 190.95,
        releaseDate: new Date(2016, 3, 1)
    }

    text = 'sdffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffsdfsdgfdfghfdghfd'
    isActive = false;
    constructor(service: CoursesService) {
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }


    onSave($event) {
        $event.stopPropagation(); // to stop calling the parent event
        console.log('Button was Clicked', $event);
    }

    onDivClicked() {
        console.log('Div was Clicked');

    }

    onKeyUp() {
        console.log(this.email + "dd");



    }
}