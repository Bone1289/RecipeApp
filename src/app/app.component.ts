import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  ngOnInit(): void {
    var config = {
      apiKey: "AIzaSyC2a6BsFHr1Nl3_B6u2sAbGq6-wYtIGfPU",
      authDomain: "recipe-book-43ee9.firebaseapp.com",
      databaseURL: "https://recipe-book-43ee9.firebaseio.com",
      projectId: "recipe-book-43ee9",
      storageBucket: "recipe-book-43ee9.appspot.com",
      messagingSenderId: "259487650002"
    };
    firebase.initializeApp(config);
  }
  loadedFeature = 'recipe';

  onNavigate(feature: string){
      this.loadedFeature = feature;
  }
}
