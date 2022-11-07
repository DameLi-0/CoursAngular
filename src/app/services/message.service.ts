import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class MessageService {
    constructor() {}

    messages: String[] = [];

    addMessage(message: string)
    {   
        /* ajouté Student */
        this.messages.push(message)

        /* effacer message */
        setTimeout(() => {
            this.messages.splice(0)
        }, 1000);
    }
}