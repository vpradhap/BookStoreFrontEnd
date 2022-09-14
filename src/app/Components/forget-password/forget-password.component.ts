import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {
  forgotForm! : FormGroup
  constructor(private form:FormBuilder,private user:UserService) { }

  ngOnInit(): void {
    this.forgotForm = this.form.group({
      email:['',[Validators.required,Validators.email]]
    })
  }

  onSubmit(){
    if(this.forgotForm.valid){
      let data={
        email:this.forgotForm.value.email,
      }
      this.user.Forgotpassword(data).subscribe((res:any)=>{
        console.log('Token sent to email Successfully',res);
      });
    }
    else{
      console.log("Invalid data",this.forgotForm.value);
    }
    //this.forgotForm.reset();
  }
}
