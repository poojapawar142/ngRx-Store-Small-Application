import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { AddTutorial } from 'src/actions/tutorial.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private store : Store<AppState>) { }

  //This will simply call the AddTutorial action
  addTutorial(name , url){
    this.store.dispatch(new AddTutorial({name : name , url : url}))
  }
  ngOnInit() {
  }

}
