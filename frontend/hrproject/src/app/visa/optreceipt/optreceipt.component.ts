import { Component, OnInit } from '@angular/core';
import { OptreceiptService } from '../../services/optreceipt.service'

@Component({
  selector: 'app-optreceipt',
  templateUrl: './optreceipt.component.html',
  styleUrls: ['./optreceipt.component.css']
})
export class OptreceiptComponent implements OnInit {

  message!: Text;
  constructor(private optreceiptService: OptreceiptService) { }

  ngOnInit(): void {
    this.optreceiptService.getMessage().subscribe((data)=>{
      this.message = data.message;
    });

    
  }
}
