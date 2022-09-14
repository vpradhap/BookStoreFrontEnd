import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  signupForm! : FormGroup
  hide=true;
  constructor(private form:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.signupForm = this.form.group({
      fullname:['',[Validators.required,Validators.minLength(3)]],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      mobile:['',[Validators.required,Validators.pattern("[1-9]{1}[0-9]{9}")]]
    })
  }

  onSubmit(){
    if(this.signupForm.valid){
      let data={
        FullName:this.signupForm.value.fullname,
        EmailId:this.signupForm.value.email,
        Password:this.signupForm.value.password,
        MobileNumber:this.signupForm.value.mobile
      }
      this.user.Register(data).subscribe((res:any)=>{
        console.log('Signup Successfull',res);
      });
    }
    else{
      console.log("Invalid data",this.signupForm.value);
    }
  }
}

