import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm! : FormGroup
  hide=true;
  constructor(private form:FormBuilder,private user:UserService,private router:Router,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
    this.loginForm = this.form.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
    })
  }

  onSubmit(){
    if(this.loginForm.valid){
      let data={
        EmailId:this.loginForm.value.email,
        Password:this.loginForm.value.password
      }
      this.user.Login(data).subscribe((res:any)=>{
        console.log('Login Successfull',res);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('name',res.data.fullName);
        localStorage.setItem('mobile',res.data.mobileNumber);
        this.router.navigateByUrl('home/books');
        this.snackbar.open('Login Successfull','Ok',{duration:3000,horizontalPosition:'left'});
      },(error:any)=>{
        console.log('Login Failed',error);
        this.snackbar.open('Login Failed','Try again',{duration:3000,horizontalPosition:'left'});
      });
    }
    else{
      console.log("Invalid data",this.loginForm.value);
      this.snackbar.open('Invalid data','',{duration:3000,horizontalPosition:'left'});
    }
  }
}
