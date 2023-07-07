import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string;
  lastname: string;
  mobile_phone: string;
  email: string;
  password: string;

  constructor(private http: HttpClient)
   { 

   }

  register(): void 
  {
    let bodyData  = {
      "name": this.name,
      "lastname": this.lastname,
      "mobile_phone": this.mobile_phone,
      "email": this.email,
      "password": this.password,
      "profile": "PATIENT"
      
    };

    this.http.post('http://localhost:8080/sugcm/v1/auth/register', bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Usuario registrado");
    });
  }
}
