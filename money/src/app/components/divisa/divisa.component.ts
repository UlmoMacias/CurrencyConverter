import { Component, OnInit } from '@angular/core';
import { Divisa } from "../../_models/divisa";
import { DivisaService } from "../../_services/divisa.service";
import { FormBuilder, Validators, FormGroup } from '@angular/forms';


declare var $:any;

@Component({
  selector: 'app-divisa',
  templateUrl: './divisa.component.html',
  styleUrls: ['./divisa.component.css']
})
export class DivisaComponent implements OnInit {

  divisa: Divisa | any;
  //divisaForm: FormGroup;
  //submitted: false;
  rates: Map<string, number>;

  constructor(private divisaService:DivisaService) { }

  ngOnInit(): void {
    
    //this.divisaForm = this.formBuilder.group({
     // base: ['', Validators.required],
      
    //})
    
    this.getValues("usd");
  }

  getTextBoxVal(item) {
    console.log(item.value)
    this.getValues(item.value);
  }

  getValues(id){
    this.divisa = new Divisa("", "", "",null);
    this.divisaService.getValues(id).subscribe(
      res => {
        console.log(res)
        console.log(res.rates)
        this.rates = res.rates
        
        this.divisa = new Divisa(res.base, res.date, res.time_last_updated,this.rates);
        this.divisa = res

      },
      err => console.error(err)
    )
  }


}
