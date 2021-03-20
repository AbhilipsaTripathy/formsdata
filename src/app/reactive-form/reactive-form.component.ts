import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators,FormControl, AbstractControl,FormArray} from '@angular/forms';
import { RegistationService } from '../registation.service';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
myform:FormGroup;
get email(){
  return this.myform.get('email');
}
get alternatemail(){
  return this.myform.get('alternatemail') as FormArray;
}
addalternateemail(){
  this.alternatemail.push(this.fb.control(''));
}
    constructor( private fb:FormBuilder,private reg:RegistationService) {}
    
  ngOnInit(): void {
    this.myform=this.fb.group({
      name : ['',[Validators.required]],
      password :['',[Validators.required]],
      confpassword:['',[Validators.required,this.passwordconforming]],
      email:[''],
      subscrib:[false],
      address:this.fb.group({
        city:['',[Validators.required]],
        state:['',[Validators.required]],
        postalcode:['',[Validators.required]]
      }),
      alternatemail:this.fb.array([])
          });
      this.myform.get('subscrib').valueChanges
      .subscribe(checkvalue =>{
        const email = this.myform.get('email');
        if(checkvalue){
          email.setValidators(Validators.required);

        }else{
          email.clearValidators();
        }
        email.updateValueAndValidity();
      })
      
  }
  postdata(){
    console.log(this.myform.value);
    this.reg.resister(this.myform.value).subscribe(
      respose =>console.log(respose),
      error => console.log(error)
      
    )
    this.myform.reset();
  }
  loadApidata(){
    this.myform.setValue({
      name: "Abhilipsa",
      password:"1234",
      confpassword:"1234",
      address:{
        city:"cuttack",
        state:"odisha",
        postalcode:"754134"

      }
    })
  }
  passwordconforming(c:AbstractControl){
    if(c.get('password').value !== c.get('confpassword').value){
      return{invalid:true};
    }

  }
}
