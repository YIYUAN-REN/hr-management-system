import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { I20UploadService } from '../../../../service/visa/i20/i20-upload.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-i20',
  templateUrl: './i20.component.html',
  styleUrls: ['./i20.component.css']
})
export class I20Component implements OnInit {

  message!: Text;
  showFile = false;
  fileUploads!: Observable<any>;

  // for uploads
  selectedFiles: FileList | undefined;
  currentFileUpload!: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient,private uploadService:I20UploadService) {}

  ngOnInit(): void {
  }

  
  selectFile(event: any) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles!.item(0) as File;
    this.uploadService.pushFileToStorage(this.currentFileUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    this.selectedFiles = undefined;
  }


  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.uploadService.getFiles();
    }
  }

  next(){
    this.router.navigate(['employee/visa/uploadStemReceipt']);
  }

}
