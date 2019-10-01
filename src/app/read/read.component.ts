import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Tutorial } from 'src/models/tutorial.model';
import { AppState } from '../app.state';
import { Store } from '@ngrx/store';
import { RemoveTutorial } from 'src/actions/tutorial.actions';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.scss']
})
export class ReadComponent implements OnInit {

  //We're defining an observable named tutorials which we will later display in the template.
  tutorials: Observable<Tutorial[]>;

  // We're accessing the store from ngrx within the constructor, and then selecting tutorial which is defined as a the property from app.module.ts 
  //in StoreModule.forRoot({}). This calls the tutorial reducer and returns the tutorial state.
  constructor(private store: Store<AppState>) { 
    this.tutorials = store.select('tutorial');
  }
  ngOnInit() {
  }

  //This will call our RemoveTutorial action and pass in the index.
  delTutorial(index) {
    this.store.dispatch(new RemoveTutorial(index) )
  }
 

}
