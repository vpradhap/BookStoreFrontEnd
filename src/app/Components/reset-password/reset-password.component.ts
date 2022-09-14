import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/Services/UserService/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetForm! : FormGroup;
  hide=true;
  hide1=true;
  token: any;
  constructor(private form:FormBuilder,private activate:ActivatedRoute,private user:UserService,
    private router:Router) { }

  ngOnInit(): void {
    this.resetForm = this.form.group({
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmpassword:['',[Validators.required,Validators.minLength(8)]],
    })
    this.token= this.activate.snapshot.paramMap.get('token');
  }

  onSubmit(){
    if (this.resetForm.valid) {
      let reqData = {
        Password: this.resetForm.value.password,
        ConfirmPassword: this.resetForm.value.confirmpassword
      }
      this.user.Resetpassword(reqData, this.token).subscribe((response: any) => {
        console.log("Password changed successfully", response);
        this.router.navigateByUrl('login')
      });
    }
  }
}
