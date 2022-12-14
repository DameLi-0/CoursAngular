import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageSimpleDisplayerComponent } from './lib/message-simple-displayer/message-simple-displayer.component';
import { MessagerieDisplayerComponent } from './lib/messagerie-displayer/messagerie-displayer.component';
import { BodyModule } from './modules/module-body/body.module';
import { FooterModule } from './modules/module-footer/footer.module';
import { HeaderModule } from './modules/module-header/header.module';


@NgModule({
  declarations: [
    AppComponent,
    MessagerieDisplayerComponent,
    MessageSimpleDisplayerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    HeaderModule,
    BodyModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
