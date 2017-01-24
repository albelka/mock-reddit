import { Injectable } from '@angular/core';
import { Thread } from './thread.model';
import { THREADS } from './mock-threads';

@Injectable()
export class ThreadService {

  constructor() { }

  getThreads() {
    return THREADS
  }
  getThreadById(threadId: number) {
    for (var i = 0; i < THREADS.length; i++) {
      if (THREADS[i].id===threadId) {
        return THREADS[i]
      }
    }
  }
  addThread(title: string, author:string, content: string, category: string) {
    var id = THREADS.length +1
    var newThread: Thread = new Thread(title, author, content, category, id)
    THREADS.push(newThread)
    console.log(newThread)
  }
  deleteThread(){

  }
}
