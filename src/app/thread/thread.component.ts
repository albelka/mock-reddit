import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Thread } from '../thread.model';
import { ThreadService } from '../thread.service';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css'],
  providers: [ThreadService]
})
export class ThreadComponent implements OnInit {
  threadId: number;
  threadToDisplay: Thread;
  constructor(private route: ActivatedRoute, private location: Location, private threadService: ThreadService) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.threadId = parseInt((urlParametersArray['id']))
    });
    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
  }
}
