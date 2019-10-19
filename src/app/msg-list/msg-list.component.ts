import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-msg-list',
  templateUrl: './msg-list.component.html',
  styleUrls: ['./msg-list.component.scss']
})
export class MsgListComponent implements OnInit {

  @Input() displayPost: any;

  constructor() {
    
   }

  ngOnInit() {
  }
}
