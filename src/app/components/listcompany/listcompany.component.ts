import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetListCompanyAction, GetListCompanyActionSucces, GetCompanyActionSucces, DeleteCompanyActionSucces } from 'src/app/actions/company.actions';
import { CompanyService } from 'src/app/services/company.service';
import { ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {
  companies$: Observable<Company[]>;
  listCompany: Company[];
  globalId: any;
  ;

 constructor(private store: Store<AppState>,
   private companyService: CompanyService,
   private route : ActivatedRoute, ) {
    this.store.dispatch(new GetListCompanyAction());
    this.route.paramMap.subscribe((params: ParamMap) =>
      {this.globalId =  params.get('globalId');
    });
  }
  
  ngOnInit() {
    this.store.select('companyList').subscribe((data) => { 
      this.listCompany = data, console.log(data[0],"dto")
    });
  }

  onDelete(globalId){
    if(confirm("Press a button delete")){
      this.store.dispatch(new DeleteCompanyActionSucces(globalId));
      this.store.select("companies").subscribe(res => {
        this.listCompany = res;
      });
    }
    else{
      alert('Unsuccessfull');
    }
  }

  //Function delete
  // onDelete(globalId) {
  //   if (confirm("Press a button!")) {
  //     this.companyService.deleteCompany(globalId).subscribe(res => {
  //         this.companyService.getCompanies().subscribe(data => {
  //           (this.listCompany = data),
  //             this.store.dispatch(new GetListCompanyAction);
  //             this.store.select("companies").subscribe(res => {
  //             this.listCompany = res
  //           });
  //         });
  //     }
  //     );
  //   } 
  //   else {
  //     alert("unsuccessful !");
  //   }
  // }  

}
