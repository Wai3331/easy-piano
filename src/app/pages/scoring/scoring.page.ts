import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { HTTP,HTTPResponse } from '@awesome-cordova-plugins/http/ngx';
declare var AudioContext;
declare var webkitAudioContext;
@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.page.html',
  styleUrls: ['./scoring.page.scss'],
})
export class ScoringPage {
   currentUser="User";
   newMsg='';

  

  constructor() { }

  messages=[
  {
    user:'AI',
    msg: 'Please upload audio file to get scoring.'
  },
  {
    user:'AI',
    msg: 'Click the submit button without upload file to get help.'
  },
  ];

  @ViewChild(IonContent) content: IonContent


  sendMessage(){
    if(this.newMsg==''){
      this.messages.push({
       user:'User',
       msg:'Help'
     }); 
     this.messages.push({
      user:'AI',
      msg:'There are four score level for your performance. Try your best to get S grade.'+'Let start with uploading your file'
    });   
    }
    else{
      this.messages.push({
      user:'User',
      msg:this.newMsg
    });   

     if(this.newMsg.includes('poor')){
       setTimeout(() => {
             this.messages.push({
      user:'AI',
      msg:'Your performance is not so good. Try to read tutorials before practice. Your Grade is C'
    }); 
       }, 4500);

   }
    else if(this.newMsg.includes('nice')){
      setTimeout(() => {
              this.messages.push({
        user:'AI',
        msg:'Your performance is nice. Keep pratice to be better. Your Grade is B'
      }); 
      }, 4500);

    }
    else if(this.newMsg.includes('good')){
      setTimeout(() => {
             this.messages.push({
       user:'AI',
       msg:'Your performance is good. Keep going. Your Grade is A'
     }); 
      }, 4500);
 
    }
    else if(this.newMsg.includes('excellent')){
      setTimeout(() => {
            this.messages.push({
       user:'AI',
       msg:'Your performance is wonderful. Keep Working. Your Grade is S'
     }); 
      }, 4500);
  
    }
    else if(this.newMsg.includes('audiofile')){
      setTimeout(() => {
              this.messages.push({
       user:'AI',
       msg:'Your performance is not so good. Try to read tutorials before practice. Your Grade is C'
     }); 
      }, 4500);

    }
    else{
      setTimeout(() => {
              this.messages.push({

        user:'AI',
        msg:'Your performance is nice. Keep pratice to be better. Your Grade is B'
      }); 
      }, 4500);

    }
  }
    this.newMsg='';
    setTimeout(()=>{
    this.content.scrollToBottom(200);
    });

  }
}
