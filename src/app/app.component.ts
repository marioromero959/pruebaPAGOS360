import { Component, OnInit } from '@angular/core';
import { CobranzasService } from './services/cobranzas.service';
import { Pedido , Data} from "./shared/interface";
import { FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  dataCobranzas:Data[] = []
  filterForm:FormGroup = new FormGroup({})  

  constructor(
    private _cobranzasService:CobranzasService,
    private formBuilder:FormBuilder
    ){
      this.filterForm = this.formBuilder.group({
        date:''
      })
    }


  ngOnInit(): void {
    const date = '17-10-2022'
    this.list(date)
  }

  list(date:string):any{
    this._cobranzasService.getReporteCobranzas(date).subscribe((pedido:Pedido)=>{
      this.dataCobranzas = pedido.data
      console.log(this.dataCobranzas);
    })
  }

}
