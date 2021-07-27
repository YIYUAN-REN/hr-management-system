import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedDriverFile!: File;
  selectedVisaFile!:File;
  selectedAvatarFile!:File;
  currentFileUpload!: File;

  constructor(private uploadService:FileUploadService, private router:Router) { }

  ngOnInit(): void {
  }

  selectDriverFile(event:any) {
    this.selectedDriverFile = event.target.files;
  }
  selectVisaFile(event:any) {
    this.selectedVisaFile = event.target.files;
  }
  selectAvatarFile(event:any) {
    this.selectedAvatarFile = event.target.files;
  }

  upload(){
    this.uploadService.pushFileToStorage(this.selectedAvatarFile, "avatar").subscribe(
      (Response)=>{
        console.log(Response);
        // this.uploadService.pushFileToStorage(this.selectedDriverFile, "driver").subscribe(
        //   (Response)=>{
        //     console.log(Response);
        //     this.uploadService.pushFileToStorage(this.selectedVisaFile, "visa").subscribe(
        //       (Response)=>{
                
        //         this.router.navigate(["pending"]);
        //       }
        //     );
        //   }
        // );
      }
    );
  }
}
