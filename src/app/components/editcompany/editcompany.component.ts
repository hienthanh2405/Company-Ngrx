import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-editcompany',
  templateUrl: './editcompany.component.html',
  styleUrls: ['./editcompany.component.css']
})
export class EditcompanyComponent implements OnInit {

  globalID: any;

  constructor(
    private companyService : CompanyService,
    private route : ActivatedRoute,
    private router : Router,
    private store: Store<AppState>
  ) { 
    this.route.paramMap.subscribe((params: ParamMap) =>
      {this.globalID =  params.get('globalID');
    });
  }

  ngOnInit() { }

  onClickEdit(form){
    let com = {
      nameCompany : form.value.nameCompany,
      titleCompany : form.value.titleCompany
    };

    this.companyService.updateCompamy(this.globalID,com).subscribe(
      data => {
        console.log("Edit request is successful ", data);
        this.companyService.getCompanies().subscribe(res => {
          this.router.navigate(['listcompany']);
        });

      },
      error => {
        console.log("Error", error);
      });
  }
}
