import { Component, OnInit } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message';


@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  messages:Message[] = [];

  constructor(private chatService:ChatService) { }

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }

}
