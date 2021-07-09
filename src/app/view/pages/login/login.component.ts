import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../../controller/service/client.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clientService:ClientService) { }

  ngOnInit(): void {
    const user = localStorage.getItem('currentUser');
    
          console.log(user);
          // localStorage.removeItem('currentUser');
  }
  public logIn(email:string,psw:string){
    this.clientService.findByEmailAndPsw(email,psw);
    
  }

}
