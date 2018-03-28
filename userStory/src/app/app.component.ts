import { Component } from '@angular/core';
// import { AngularFirestore,AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

interface userStory {
  user: string,
  story: string,
  key?: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userStory: userStory =
    {
      'user': '',
      'story': ''
    }
  //For Local Only
  // userStoryTable: userStory[] = [
  //   { "user": "Rocky", "story": "Yo Adrian" },
  //   { "user": "Terminator", "story": "I'll be back" },
  //   { "user": "Titan", "story": "I'm the king of the world!" },
  //   { "user": "The Prince", "story": "Hello. My name is Inigo Montoya. You killed my father. Prepare to die." }
  // ];
  // private itemsCollection: AngularFirestoreCollection<userStory>;
  itemsRef: AngularFireList<any>
  userStoryTable: Observable<userStory[]>;
  constructor(db: AngularFireDatabase) {
    this.itemsRef = db.list('stories');
    this.userStoryTable = this.itemsRef.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
    // this.userStoryTable=this.itemsCollection.valueChanges();
  }

  onSubmit(): void {
    try {
      this.itemsRef.push(this.userStory);
      // console.log('this runs !!!');
      this.userStory = {
        user: '',
        story: ''
      };
    }
    catch (e) {
      console.log("form err", e)
    }
  }
}
