import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { CobranzasRoutingModule } from './cobranzas-routing.module';
import { CobranzasComponent } from './cobranzas/cobranzas.component';
import { FilterPipe } from '../shared/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CobranzasComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    CobranzasRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [DatePipe]
})
export class CobranzasModule { }
