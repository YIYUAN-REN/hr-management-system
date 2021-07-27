import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UploadStemreceiptService } from '../../../../service/visa/uploadStemReceipt/upload-stemreceipt.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';



@Component({
  selector: 'app-upload-stem-receipt',
  templateUrl: './upload-stem-receipt.component.html',
  styleUrls: ['./upload-stem-receipt.component.css']
})
export class UploadStemReceiptComponent implements OnInit {
  message!: Text;
  showFile = false;
  fileUploads!: Observable<any>;

  // for uploads
  selectedFiles: FileList | undefined;
  currentFileUpload!: File;
  progress: { percentage: number } = { percentage: 0 };


  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient,private uploadService:UploadStemreceiptService) {}

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
    this.router.navigate(['employee/visa/optstemreceipt']);
  }
}
