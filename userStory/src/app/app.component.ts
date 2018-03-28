import { Component } from '@angular/core';
interface userStory {
  user: string,
  story: string
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
    onSubmit():void
    {
      console.log('this runs !!!');
      
    }
}
