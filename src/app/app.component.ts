import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formsdata';
  students :any[];
  public choice = "";
  setvalue(myvalue:any){
this.choice=myvalue.target.value;
  }
  constructor(){
    this.students=[
      { id:'1',name:'raaj'},
      { id:'2',name:'raa'},
      { id:'2',name:'ra'},
      { id:'3',name:'r'},
    ]
  }
  getstudent(){
    this.students=[
      { id:1,name:'raaj'},
      { id:2,name:'raa'},
      { id:2,name:'ra'},
      { id:3,name:'r'},
    ]
  }
  TrackbyStudentId(index:number,name:any):string{
    return this.students.
  }

}
