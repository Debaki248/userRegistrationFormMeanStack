import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/user-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

flag:boolean | undefined;
showErrorMessage:string = "Something went wrong.please contact admin";
flagOne: boolean | undefined;
showSuceesMessage : string = "User created";
  constructor(private userService:UserServiceService) { 
    
  }

  ngOnInit(): void {
    
  }
  sendFormData(data:any,form:NgForm) {
    console.log("Data is => ",data.value+"form is => ",form.value);
    /*
      this.userService.postUser(data).subscribe(    
        res => {
          this.showSuceesMessage = true;
          setTimeout(() =>{
            this.showSuceesMessage =false,4000
          });
          this.resetForm(form);
        },
          err => {
          if(err.status == 422){
            this.showErrorMessage = err.error.join('<br>');
          }else{
            this.showErrorMessage = "Something went wrong.please contact admin";
          }
        });
      
        this.userService.postUser(data).subscribe({
          next:(res) => {
            this.showSuceesMessage = 'submitted'
            console.log("response => ",res);
          }
        });
        */

          this.userService.postUser(data,form).subscribe({
              next:(res) => {
                this.flag = true;
                setTimeout(() =>{
                  this.flag = false,
                  form.reset();
                },9000);
                console.log("flag line-58 ",this.flag);
              },
              error:(err:any) => {
                if(err.status == 422){
                  this.showErrorMessage = err.error.join('<br>');
                }else{
                  this.flagOne = true;
                  setTimeout(() =>{
                    this.flagOne = false,
                    form.reset();
                  },9000);
                }
                console.log("flagOne line no -71 => ",this.flagOne);
              }
          })
          

      }
}
