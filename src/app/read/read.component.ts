import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Tutorial } from './../models/tutorial.model';
import { AppState } from './../app.state';
import { Observable } from 'rxjs';
import { AddTutorial, RemoveTutorial } from './../actions/tutorial.actions';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css'],
})
export class ReadComponent implements OnInit {
  tutorials: Observable<Tutorial[]>;
  constructor(private store: Store<AppState>) {
    // this is the way we access ngrx store
    // tutorial comes from app.module.ts
  }

  deleteTutorial(id: number) {
    console.log(id);
    this.store.dispatch(new RemoveTutorial(id));
  }

  ngOnInit() {
    // this.tutorials = this.store.select('tutorial');
    this.tutorials = this.store.select((store) => store.tutorial);
  }
}
