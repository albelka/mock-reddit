import { Component, OnInit } from '@angular/core';
import { ThreadService } from '../thread.service';

@Component({
  selector: 'app-thread-new',
  templateUrl: './thread-new.component.html',
  styleUrls: ['./thread-new.component.css'],
  providers: [ThreadService]
})
export class ThreadNewComponent{


  constructor(private threadService: ThreadService) { }

  submitForm(title, author, category, content) {

    this.threadService.addThread(title, author, category, content);
  }
}
