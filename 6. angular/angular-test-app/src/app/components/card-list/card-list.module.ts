import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AddCardComponent } from '../add-card/add-card.component';
import { CardComponent } from '../card/card.component';
import { MyDirective } from '../card/example.directive';
import { CardListComponent } from './card-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CardListComponent,
  },
];

@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
  exports: [CardListComponent],
  declarations: [
    CardListComponent,
    CardComponent,
    AddCardComponent,
    MyDirective,
  ],
  providers: [],
})
export class CardModule {}
