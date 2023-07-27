import { Component, OnInit } from '@angular/core';
import { CobranzasService } from 'src/app/services/cobranzas.service';
import { Pedido, Data } from "./../../shared/interface";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DatePipe } from '@angular/common';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-cobranzas',
  templateUrl: './cobranzas.component.html',
  styleUrls: ['./cobranzas.component.scss']
})
export class CobranzasComponent implements OnInit {

  dataCobranzas: Data[] = []
  filterForm: FormGroup = new FormGroup({})
  loaded: boolean = false
  message: string = ''

  constructor(
    private _cobranzasService: CobranzasService,
    private formBuilder: FormBuilder,
    private datePipe: DatePipe
  ) {
    this.filterForm = this.formBuilder.group({
      searchFilter: '',
      date: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.message = "Seleccione una fecha para acceder a los registros"
    this.dateField?.valueChanges
      .pipe(map(val=>{
        if(val===null){
          this.dataCobranzas = []
        }
      })
      ).subscribe()

  }

  //Getters
  get dateField() {
    return this.filterForm.get('date');
  }

  searchData(): any {
    const fecha = this.datePipe.transform(this.filterForm.value.date, 'dd-MM-yyyy') || '';
    if (this.dateField?.valid) {
      this._cobranzasService
        .getReporteCobranzas(fecha)
        .subscribe(
          (pedido: Pedido) => {
            this.dataCobranzas = pedido.data
            if (this.dataCobranzas.length == 0) {
              this.loaded = true
              this.message = '¡Ups al parecer no se encontraron registros disponibles, vuelva a intentar!'
            }
          }
        )
    } else {
      this.dateField?.markAsTouched()
    }
  }

}
