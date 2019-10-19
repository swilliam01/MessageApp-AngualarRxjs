import { Component, OnInit } from '@angular/core';
import { MsgServiceService } from '../msg-service.service'
import { personObj } from '../personObj';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {
 
  myPost: any;

  constructor(private msgService: MsgServiceService) {
   }

  ngOnInit() {
      this.msgService.getJSON().subscribe(data => {
        this.myPost = data;
      console.log("this is the data", this.myPost);
     }); 
  }

  add(name, message: any): void {
    // name = name.trim();
    // message = message.trim();
    if (!name && !message) { return; }
    this.msgService.addPost({ name, message } as unknown as personObj)
      .subscribe(m => {
        this.myPost.push(m);
        console.log(m);
      });
  }
  genId(myPost: personObj[]): number {
    return myPost.length > 0 ? Math.max(...myPost.map(m => m.id)) + 1 : 1;
  }

}
