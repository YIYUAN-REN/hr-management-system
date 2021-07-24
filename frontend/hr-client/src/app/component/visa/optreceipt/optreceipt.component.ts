import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OptreceiptService } from '../../../service/visaService/optreceipt.service';


@Component({
  selector: 'app-optreceipt',
  templateUrl: './optreceipt.component.html',
  styleUrls: ['./optreceipt.component.css']
})
export class OptreceiptComponent implements OnInit {

  message!: Text;
  constructor(private optreceiptService: OptreceiptService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.optreceiptService.getMessage().subscribe((data)=>{
      this.message = data.message;
    });
  }
  uploads(){
    this.router.navigate(['upload'],{relativeTo:this.route}); 
  }
  next(){
    this.router.navigate(['hr/visa/optead']);
  }
}
