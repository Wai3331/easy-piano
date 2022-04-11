import { Component, OnInit } from '@angular/core';
import { ScreenOrientation } from '@awesome-cordova-plugins/screen-orientation/ngx';
import { Media,MediaObject } from '@awesome-cordova-plugins/media/ngx';
import {File,FileEntry} from '@awesome-cordova-plugins/file/ngx';

declare var  C3,Db,D3,Eb,E3,F3,Gb,G3,Ab,A3,Bb,B3;

@Component({
  selector: 'app-piano2',
  templateUrl: './piano2.page.html',
  styleUrls: ['./piano2.page.scss'],
})
export class Piano2Page {
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
  this.audioFile.startRecord();
  this.recording = false;

}

  CallplayC3(){
    C3();
  }

  CallplayDb(){
    Db();
  }

  CallplayD3(){
    D3();
  }

  CallplayEb(){
    Eb();
  }

  CallplayE3(){
    E3();
  }

  CallplayF3(){
    F3();
  }

  CallplayGb(){
     Gb();
  }

  CallplayG3(){
    G3();
  }

  CallplayAb(){
    Ab();
  }

  CallplayA3(){
    A3();
  }

  CallplayBb(){
    Bb();
  }

  CallplayB3(){
    B3();
  }

  


}
