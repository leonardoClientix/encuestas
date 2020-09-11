import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ResponseModule {

   public name?: any;
   public email?: any;
   public rol?:any;
   public macro_process?: any;
   public idQuestion?: any;
   public question?:any;
   public option?:any;
   public date?:any;
   public state?:any;
   public colors?;

  
   public idQuiz: any;
   public id: any;
   public description: any;
   public typeDesign: any;
   public options: any[];
   public text: any;
   public creation_date:Date;
   public update_date:Date = new Date();
  

}
