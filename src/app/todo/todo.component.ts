import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
squired:any[];
xisNext : boolean;
winner : string;
  constructor() { }

  ngOnInit(): void {
    this.newgame();
  }
  newgame(){
    this.squired = Array(9).fill(null);
    this.winner = null;
    this.xisNext = true;
  }
  get player(){
    return this.xisNext ? 'x':'o';
  }

}
