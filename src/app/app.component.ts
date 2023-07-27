import { Component } from '@angular/core';
import { CobranzasService } from './services/cobranzas.service';
import { Pedido , Data} from "./shared/interface";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataCobranzas:Data[] = []
  filterForm:FormGroup = new FormGroup({})  
  loaded:boolean = true

  constructor(
    private _cobranzasService:CobranzasService,
    private formBuilder:FormBuilder,
    private datePipe: DatePipe
    ){
      this.filterForm = this.formBuilder.group({
        searchFilter:'',
        date:['',Validators.required]
      })
    }

    //Getters
    get dateField(){
      return this.filterForm.get('date');
    }

  searchData():any{
    const fecha = this.datePipe.transform(this.filterForm.value.date, 'dd-MM-yyyy') || '';
    if(this.dateField?.valid){
      this._cobranzasService
        .getReporteCobranzas(fecha)
        .subscribe((pedido:Pedido)=>{
          this.dataCobranzas = pedido.data
        })
    }else{
      this.dateField?.markAsTouched()
    }
  }

}
