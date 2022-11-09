import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';
import { MessagerieService } from '../../services/messagerie.service';

@Component({
  selector: 'app-messagerie-displayer',
  templateUrl: './messagerie-displayer.component.html',
  styles: ['']
})

export class MessagerieDisplayerComponent implements OnInit {
  messageFromMessagerieService: Message[]; 

  constructor(private messagerieService: MessagerieService) { 
    this.messageFromMessagerieService = this.messagerieService.getMessages();
  }

  ngOnInit(): void {
    
  }

}
