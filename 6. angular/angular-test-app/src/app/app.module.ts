import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CanLoadTest } from '../core/can-load-test';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WelcomeChildComponent } from './components/welcome/welcome-child.component';
import { DoublePipe } from '../core/double.pipe';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CardService } from './card.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    WelcomeChildComponent,
    DoublePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [CanLoadTest, CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
