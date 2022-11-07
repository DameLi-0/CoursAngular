import { Injectable } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Injectable({
  providedIn: 'root'
})

export class MessagerieService {

  constructor() { }

  public messages: Message[] = 
  [{
    id: 1,
    titre: 'TitreTEST',
    detail: 'detailTEST'
  }];

  addMessage(message: Message){
    this.messages.push(message);
  }

  readAllMessages(){
    return this.messages;
  }


}
