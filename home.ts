import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public students = [];

  name : string;
  age : number;
  gender : string;

  constructor(public navCtrl: NavController) {

  }

  addStudent(){
    let student = {
      name : this.name,
      age : this.age,
      gender : this.gender
    }
    
    this.students.push(student);
  }


}
