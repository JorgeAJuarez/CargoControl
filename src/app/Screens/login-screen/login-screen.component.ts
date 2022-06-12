import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  constructor(private _router: Router) { }
  formBuilder: UntypedFormBuilder= new UntypedFormBuilder();

  public loginForm:UntypedFormGroup=this.formBuilder.group({
    username: '',
    password: '',
    valid:false
  });

  public onSubmit(): void {
    console.log(this.loginForm);
    // redirect to dashboard
    this._router.navigate(['/admin-dashboad']);

    
  }

  ngOnInit(): void {
  }

}
