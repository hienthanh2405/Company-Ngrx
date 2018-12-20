import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from 'src/app/models/company.model';
import { AppState } from 'src/app/app.state';
import { Store } from '@ngrx/store';
import { GetListCompanyAction, GetListCompanyActionSucces } from 'src/app/actions/company.actions';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-listcompany',
  templateUrl: './listcompany.component.html',
  styleUrls: ['./listcompany.component.css']
})
export class ListcompanyComponent implements OnInit {
  companies$: Observable<Company[]>;
  listCompany: Company[]
  ;

 constructor(private store: Store<AppState>, private companyService: CompanyService ) {
  this.store.dispatch(new GetListCompanyAction());

  }
  ngOnInit() {
    this.store.select('companyList').subscribe((data) => { 
      this.listCompany = data, console.log(data[0],"dto")
    });
  }


  //Function delete
  onDelete(globalID) {
    if (confirm("Press a button!")) {
      console.log(globalID);
      this.companyService.deleteCompany(globalID).subscribe(res => {
          this.companyService.getCompanies().subscribe(data => {
            // console.log(res);
            (this.listCompany = data),
              this.store.dispatch(new GetListCompanyAction);
              this.store.select("companies").subscribe(res => {
              this.listCompany = res
            });
          });
      }
      );
    } 
    else {
      alert("unsuccessful !");
    }
  }  

}
