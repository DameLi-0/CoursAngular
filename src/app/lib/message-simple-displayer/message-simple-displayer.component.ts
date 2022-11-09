import { Component, Input, OnInit } from '@angular/core';
import { Message } from 'src/app/models/message.model';

@Component({
    selector: 'app-message-simple-displayer',
    template: `<h1>{{message.id}}</h1>
    <h2>{{message.titre}}</h2>
    <h3>{{message.detail}}</h3>`
})

export class MessageSimpleDisplayerComponent implements OnInit {

    @Input() message!: Message;

    constructor() { }

    ngOnInit() { }

}