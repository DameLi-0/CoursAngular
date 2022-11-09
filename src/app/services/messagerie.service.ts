import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagerieService {

  constructor() { }

  private messages: Message[] = 
  [{
    id: 1,
    titre: 'TitreTEST',
    detail: 'detailTEST'
  }];

  addMessage(messages: Message){
    this.messages.push(messages);

    setTimeout(() => {this.messages}, 5000);
  }

  clearMessages(){
    this.messages = [];
  }

  /*setMessages(messages: Message[]){
    this.messages = messages;
  }*/

  getMessages(){
    return this.messages;
  }

  
}
