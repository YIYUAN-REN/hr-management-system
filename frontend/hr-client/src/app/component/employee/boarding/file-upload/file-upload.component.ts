import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FileUploadService } from '../file-upload.service';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  selectedFiles: FileList | undefined;
  selectedDriverFile!: File;
  selectedVisaFile!:File;
  selectedAvatarFile!:File;
  currentFileUpload!: File;

  constructor(private uploadService:FileUploadService, private router:Router) { }

  ngOnInit(): void {
  }

  selectDriverFile(event:any) {
    this.selectedFiles = event.target.files;
    this.selectedDriverFile = this.selectedFiles!.item(0) as File;
    this.selectedFiles = undefined;
  }
  selectVisaFile(event:any) {
    this.selectedFiles = event.target.files;
    this.selectedVisaFile = this.selectedFiles!.item(0) as File;
    this.selectedFiles = undefined;
  }
  selectAvatarFile(event:any) {
    this.selectedFiles = event.target.files;
    this.selectedAvatarFile = this.selectedFiles!.item(0) as File;
    this.selectedFiles = undefined;
  }

  upload(){
    this.uploadService.pushFileToStorage(this.selectedAvatarFile, "avatar").subscribe(
      (Response)=>{
        console.log(Response);
        this.uploadService.pushFileToStorage(this.selectedDriverFile, "driver").subscribe(
          (Response)=>{
            console.log(Response);
            this.uploadService.pushFileToStorage(this.selectedVisaFile, "visa").subscribe(
              (Response)=>{
                console.log(Response);
                this.router.navigate(["pending"]);
              }
            );
          }
        );
      },
      (error)=>{
        console.log(error)
      }
    );
  }
}
