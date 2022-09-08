import { Component, OnInit } from '@angular/core';
import { SignUpData } from 'src/app/models/sign-up-data.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpData: SignUpData;
  confirmPassword: string;

  constructor(private api: ApiService) {
    this.signUpData = { fullName: '', email: '', password: '' };
    this.confirmPassword = '';
  }

  ngOnInit(): void {
  }

  signUp() {
    console.log(this.signUpData);
    if (this.signUpData.password === this.confirmPassword && this.signUpData.password !== '') {
      this.api.post(this.signUpData, 'api/Users').subscribe((response: any) => {
        console.log(response);
      });
    }

    setTimeout(() => {
      this.api.get('api/Users').subscribe((response: any) => {
        console.log(response);
      });
    }, 2000)
  }
}
