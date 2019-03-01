import { Component, OnInit } from "@angular/core";
import { Message } from "../message";
import { ChatService } from "../chat.service";

@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.css"]
})
export class ChatComponent implements OnInit {
  message: Message = new Message();

  messages: Message[] = [];

  send() {
    this.chatService.addMessage(this.message);
    let tmpFrom = this.message.from;
    this.message = new Message();
    this.message.from = tmpFrom;
  }

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.messages = this.chatService.getMessages();
  }
}
