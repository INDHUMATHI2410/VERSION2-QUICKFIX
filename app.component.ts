import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'OnlineRepairingAgency';
  constructor(){}
  // registerForm=this.fb.group({
  //   uname:[,[Validators.required]],
  //   password:[,[Validators.required]],
  //   email:[,[Validators.required]]
  // });
  // addUser(){
  //   this.service.adduser(this.registerForm.value).subscribe(data=>{
  //     alert("data saved");
  //   });
  // }
  // getUserData(){
  //   this.service.retrieveOneUser(this.registerForm.controls['uname'].value).subscribe(data=>{
  //     alert(JSON.stringify(data));
  //   });
  // }
}
