import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import * as TutorialActions from './../actions/tutorial.actions';
import { v4 as uuid } from 'uuid';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  newTutorialItem: Tutorial = { name: '', url: '' };
  constructor(private store: Store<AppState>) {}

  AddTutorial() {
    this.newTutorialItem.id = uuid();
    this.store.dispatch(new TutorialActions.AddTutorial(this.newTutorialItem));
    this.newTutorialItem = { name: '', url: '' };
  }
  ngOnInit(): void {}
}
