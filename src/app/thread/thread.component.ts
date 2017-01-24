import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Thread } from '../thread.model';
import { ThreadService } from '../thread.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css'],
  providers: [ThreadService]
})
export class ThreadComponent implements OnInit {
  threadId: number;
  threadToDisplay: Thread;
  constructor(private route: ActivatedRoute, private location: Location, private threadService: ThreadService,  private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.threadId = parseInt((urlParametersArray['id']))
    });
    this.threadToDisplay = this.threadService.getThreadById(this.threadId);
  }
  goToEditThreadPage() {
    this.router.navigate(['thread-edit', this.threadId]);
  }
  deleteThreadClick() {
    this.threadService.deleteThread(this.threadId)
  }
}
