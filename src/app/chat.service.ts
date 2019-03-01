import { Injectable } from "@angular/core";
import { Message } from "./message";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  messages: Message[] = [];

  addMessage(message: Message) {
    this.messages.push(message);
  }

  getMessages() {
    return this.messages;
  }

  constructor() {}
}
