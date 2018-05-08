import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

private userDetails:FormGroup;
constructor(){
        this.userDetails=new FormGroup({
          fname:new FormControl("Angular",[Validators.required,
                                          Validators.minLength(6),
                                        Validators.maxLength(9)]),
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
  console.log(this.userDetails.value);
}
}