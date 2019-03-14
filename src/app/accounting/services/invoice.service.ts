import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageModel } from 'src/app/core/models/PageModel';
import { Invoice } from '../models/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  constructor(
    private httpClient: HttpClient
  ) { }

  convertToWord(gNum : number)
  {
    return this.httpClient.get<string>(
      `${environment.endPoint}${environment.apiPaths.invoice.main}${environment.apiPaths.invoice.word}/${gNum}`,
     
    ).toPromise();
  }

  createInvoice(invoice:any)
  {
    return this.httpClient.post(
      `${environment.endPoint}${environment.apiPaths.invoice.main}`, invoice

    ).toPromise();
  }

  updateInvoice(invoice:any)
  {
    return this.httpClient.put(
      `${environment.endPoint}${environment.apiPaths.invoice.main}`, invoice

    ).toPromise();
  }
  getPageInvoices(index:number, pageSize:number,month:number, year:number, taxNo:string)
  {
    return this.httpClient.get<PageModel<Invoice>>(
      `${environment.endPoint}${environment.apiPaths.invoice.main}?index=${index}&pageSize=${pageSize}&month=${month}&year=${year}&taxNo=${taxNo}`,
    ).toPromise();
  }

  getInvoicePDF(id:string)
  {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/pdf');
    
    return this.httpClient.get(
      `${environment.endPoint}${environment.apiPaths.invoice.main}/${id}/file`,
      {
        headers: headers,
        responseType: 'blob'
      }
    );
  }

  getInvoiceDetail(id:string)
  {
    return this.httpClient.get<Invoice>(
      `${environment.endPoint}${environment.apiPaths.invoice.main}/${id}`
    ).toPromise();
  }
  approveInvoice(id:string)
  {
    return this.httpClient.put<any>(
      `${environment.endPoint}${environment.apiPaths.invoice.main}/${id}/Approve`,
      {
      }
    ).toPromise();
  }

  deleteInvoice(id:string)
  {
    return this.httpClient.delete<any>(
      `${environment.endPoint}${environment.apiPaths.invoice.main}/${id}`,
      {
      }
    ).toPromise();
  }
  getCodeSign()
  {
    return this.httpClient.post<any>(
      `${environment.endPoint}${environment.apiPaths.CurrentSign.main}${environment.apiPaths.CurrentSign.code}`,
      {

      }
    ).toPromise();
  }
  reGetCodeSign()
  {
    return this.httpClient.post<any>(
      `${environment.endPoint}${environment.apiPaths.CurrentSign.main}${environment.apiPaths.CurrentSign.recode}`,
      {

      }
    ).toPromise();
  }
}
