import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Media,MediaObject } from '@awesome-cordova-plugins/media/ngx';
import {File,FileEntry} from '@awesome-cordova-plugins/file/ngx';


declare var  C,CSharp,D,DSharp,E,F,FSharp,G,GSharp,A,ASharp,B,C2,CSharp2,D2,DSharp2,E2;

@Component({
  selector: 'app-piano',
  templateUrl: './piano.page.html',
  styleUrls: ['./piano.page.scss'],
})
export class PianoPage{
  audioFile:MediaObject;
  activeScreenOrt: string;
  recording: boolean = false;
  constructor(private screenOrientation: ScreenOrientation, 
    private media:Media, 
    private file:File){
      // Find screen current orientation
      this.activeScreenOrt = this.screenOrientation.type; 
    
      this.screenOrientation.onChange().subscribe(
        () => {
          this.activeScreenOrt = this.screenOrientation.type;
        }
      );    


}
lockToPortrait(){
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
}
// Lock to landscape
lockToLandscape(){
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
}
// Unlock screen orientation 
unlockScreenOrientation(){
  this.screenOrientation.unlock();
}
handleAddToRecording(){
  this.recording = true;

  this.audioFile= this.media.create(this.file.externalRootDirectory+'/audiofile.mp3');
  this.audioFile.startRecord();
}

handleRemoveFromRecording(){
  this.audioFile.stopRecord();
  this.recording = false;

}

ionViewDidLoad(){
  this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
}

  CallplayC(){
    C();
  }

  CallplayCSharp(){
    CSharp();
  }

  CallplayD(){
    D();
  }

  CallplayDSharp(){
    DSharp();
  }

  CallplayE(){
    E();
  }

  CallplayF(){
    F();
  }

  CallplayFSharp(){
    FSharp();
  }

  CallplayG(){
    G();
  }

  CallplayGSharp(){
    GSharp();
  }

  CallplayA(){
    A();
  }

  CallplayASharp(){
    ASharp();
  }

  CallplayB(){
    B();
  }

  CallplayC2(){
    C2();
  }

  CallplayCSharp2(){
    CSharp2();
  }

  CallplayD2(){
    D2();
  }

  CallplayDSharp2(){
    DSharp2();
  }

  CallplayE2(){
    E2();
  }

}
