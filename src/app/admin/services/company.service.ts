import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageModel } from 'src/app/core/models/PageModel';
import { environment } from 'src/environments/environment';
import { Company } from '../models/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(
    private httpClient: HttpClient
  ) { }

  GetCompanies(index: number, pageSize: number, name :string, taxNo : string, address : string, tel : string): Promise<PageModel<Company>> {
    return this.httpClient.get<PageModel<Company>>(
      `${environment.endPoint}${environment.apiPaths.company.main}?index=${index}&pageSize=${pageSize}&name=${name}&taxNo=${taxNo}&address=${address}&tel=${tel}`,
    ).toPromise();
  }
  GetCompany(id : string) : Promise<Company>{
    return this.httpClient.get<Company>(
      `${environment.endPoint}${environment.apiPaths.company.main}/${id}`,
    ).toPromise();
  }
  ToggleId(id : string): Promise<any>{
    return this.httpClient.put<any>(
      `${environment.endPoint}${environment.apiPaths.company.main}/${id}/${environment.apiPaths.company.toggleActive}`,
      {
      }
    ).toPromise();
  }

  CreateCompany(company : Company) : Promise<any>{
    return this.httpClient.post<any>(
      `${environment.endPoint}${environment.apiPaths.company.main}`,
      company
    ).toPromise();
  }
  UpdateCompany(company : Company) : Promise<any>{
    return this.httpClient.put<any>(
      `${environment.endPoint}${environment.apiPaths.company.main}`,
      company
    ).toPromise();
  }
  
  DeleteCompany(id: string) : Promise<any>{
    return this.httpClient.delete<any>(
      `${environment.endPoint}${environment.apiPaths.company.main}/${id}`
    ).toPromise();
  }

  GetMST(taxNo : string) : Promise<Company>{
    return this.httpClient.get<Company>(
      `${environment.endPoint}${environment.apiPaths.company.main}/${environment.apiPaths.company.enterprise}?taxNo=${taxNo}`
    ).toPromise();
  }
}
