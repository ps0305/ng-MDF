import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

private userDetail:FormGroup;
constructor(){
        this.userDetails=new FormGroup({
          fname:new FormControl(),
          lname:new FormControl(),
          uemail:new FormControl(),
          addr:new FormGroup({
            ucity:new FormControl(),
            uaddr:new FormControl()
          }),
          gender:new FormControl(),
          ucountry:new FormControl()
         });
}
public register(){
  console.log(this.userDetail.value);
}
}