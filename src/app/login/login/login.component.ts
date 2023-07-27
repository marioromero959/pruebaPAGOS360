import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login:FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _authService:AuthService,
    private router:Router,
    ) {
    this.login = this.formBuilder.group({
      nombre: ['',Validators.required],
      email: ['',[Validators.required,Validators.email]],
    })
   }

  ngOnInit(): void {
  }

  get nameField(){
    return this.login.get('nombre') 
  }
  get emailField(){
    return this.login.get('email') 
  }

ingresar(){
  if(this.login.invalid){
    this.login.markAllAsTouched();
  }else{
    this._authService.login(this.login.value).subscribe(
      res=>{
        localStorage.setItem('api-key',res)
        this.router.navigate(['/cobranzas'])
      }
    )
  }  
}
}
