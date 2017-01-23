import { Pipe, PipeTransform } from '@angular/core';
import { Thread } from './thread.model'

@Pipe({
  name: 'categoryfilter',
  pure: false
})
export class CategoryPipe implements PipeTransform {

  transform(input: Thread[], threadCategory) {
    var output: Thread[] = [];
    console.log(threadCategory)
    if (threadCategory === "awww") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === threadCategory) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (threadCategory === "politics") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === threadCategory) {
          output.push(input[i]);
        }
      }
      return output;
    } else if (threadCategory === "askReddit") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].category === threadCategory) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
