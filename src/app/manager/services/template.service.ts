import { Injectable } from '@angular/core';
import { Template } from '../models/template';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PageModel } from 'src/app/core/models/PageModel';
import { ResponseContentType } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {

  constructor(
    private httpClient: HttpClient
  ) { }

  createTemplate(template: Template) {
    return this.httpClient.post<string>(
      `${environment.endPoint}${environment.apiPaths.template.main}`, template
    ).toPromise();
  }
  createTemplateFile(id: String, formData: FormData) {
    var header = new HttpHeaders();
    //header = header.set('Content-Type', null);
    header = header.set('Accept', "multipart/form-data");
    return this.httpClient.post<any>(
      `${environment.endPoint}${environment.apiPaths.template.main}/${id}${environment.apiPaths.template.file}`,
      formData,
      {
        headers: header
      },
    ).toPromise();
  }

  getTemplates(index: number, pageSize: number, nameSearch: string) {
    return this.httpClient.get<PageModel<Template>>(
      `${environment.endPoint}${environment.apiPaths.template.main}?index=${index}&pageSize=${pageSize}`
    )
      .toPromise();
  }
  getTemplate(id: string) {
    return this.httpClient.get<Template>(
      `${environment.endPoint}${environment.apiPaths.template.main}/${id}`,
    ).toPromise();
  }

  updateTemplate(template: Template) {
    return this.httpClient.put(
      `${environment.endPoint}${environment.apiPaths.template.main}`,
      template
    ).toPromise();
  }
  deleteTemplate(id: string) {
    return this.httpClient.delete(
      `${environment.endPoint}${environment.apiPaths.template.main}/${id}`,
    ).toPromise();
  }

  getInvoice(id) {
    let headers = new HttpHeaders();
    headers.set('Accept', 'application/pdf');
    return this.httpClient.get(
      `${environment.endPoint}${environment.apiPaths.template.main}/${id}/invoice`,
      {
        headers: headers,
        responseType: 'blob'
      }
    )
  }

  getInvoice_Link(id) {
    return `${environment.endPoint}${environment.apiPaths.template.main}/${id}/invoice`;
  }
}
