import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  kajalForm:FormGroup;
  kajalarray:any=[];
  selectindex:any;
  editbtn=false;
  subBtn=false;
  gender = ["Male","Female"];
  qualifications = ["Qualification","MCA", "BSC", "BCA"];
  checkbox  = ["Cooking","Dancing","Singing"];

  constructor(private FormBuilder: FormBuilder) {
    this.kajalForm= FormBuilder.group({
      idd:['', [Validators.required]],
      name:['', [Validators.required]],
      country:['', [Validators.required]],
      city:['', [Validators.required]],
      gender :['',[Validators.required]],
      qualifications :['',[Validators.required]],
      checkbox :['',[Validators.required]],
    })
    let data= localStorage.getItem("TABLE_LIST")
    if(data){
      this.kajalarray=JSON.parse(data);
    }
   }


  ngOnInit(): void {
  }
  formSubmit(){ 
    this.subBtn=true;
    if(this.kajalForm.valid){
      console.log('form value', this.kajalForm.value)
      this.kajalForm.value.id=this.randomID();
      this.kajalarray.push(this.kajalForm.value);
      localStorage.setItem("TABLE_LIST" , JSON.stringify(this.kajalarray));
      console.log('array', this.kajalarray);
      alert("Details Submitted Successfully")
      this.clear();
    }else{
      alert("Please Enter Correct Details")
    }
   
  }

  formUpdate(){
    this.subBtn=true;
    if(this.kajalForm.valid){
this.editbtn=false;
this.kajalarray[this.selectindex].idd=this.kajalForm.value.idd;
this.kajalarray[this.selectindex].name=this.kajalForm.value.name;
this.kajalarray[this.selectindex].country=this.kajalForm.value.country;
this.kajalarray[this.selectindex].city=this.kajalForm.value.city;
this.kajalarray[this.selectindex].gender=this.kajalForm.value.gender;
this.kajalarray[this.selectindex].qualifications=this.kajalForm.value.qualifications;
this.kajalarray[this.selectindex].checkbox=this.kajalForm.value.checkbox;



localStorage.setItem("TABLE_LIST" , JSON.stringify(this.kajalarray));
this.clear();
}else{
  alert("Please Enter Correct Details")
}
  }

  update(obj:any){
    this.editbtn=true;
    this.selectindex=this.kajalarray.findIndex((x: any) => x.id === obj.id);
    this.kajalForm.patchValue({
      idd:obj.idd,
      name:obj.name,
      country:obj.country,
      city:obj.city,
      gender:obj.gender,
      qualifications:obj.qualifications,
      checkbox:obj.checkbox,
    })
  }
  delTb(id:any){
    this.selectindex=this.kajalarray.findIndex((x: any) => x.id === id);
    this.kajalarray.splice(this.selectindex,1);
    localStorage.setItem("TABLE_LIST" , JSON.stringify(this.kajalarray));

    
  }

  formClear(){
    this.kajalForm.reset();

  }
  
  get f(){
    return this.kajalForm.controls;
  }
  clear(){
    this.kajalForm.reset();
  }
  randomID() {
    return '_' + Math.random().toString(36).substr(2, 9);
  }
}

