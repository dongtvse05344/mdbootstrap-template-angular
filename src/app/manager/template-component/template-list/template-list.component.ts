import { Component, OnInit } from '@angular/core';
import { PageModel } from 'src/app/core/models/PageModel';
import { TemplateService } from '../../services/template.service';
import { Template } from '../../models/template';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {

  constructor(
    private templateSerive: TemplateService
  ) { }

  data: PageModel<Template> = new PageModel<Template>();

  index: number = 1;
  pageSize: number = 5;
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];
  content : string = "";
  nameSearch: string = "";

  setPageSize(num: number) {
    this.index = 1;
    this.pageSize = num;
    this.getData();
  }
  setIndex(num: number) {
    this.index = num;
    this.getData();
  }

  getData() {
    this.templateSerive.getTemplates(this.index, this.pageSize, this.nameSearch)
      .then(
        (response: PageModel<Template>) => {
          this.data = response;
          this.pageNumbers = new Array<Number>();
          for (var i = response.Left; i <= response.Right; i++) {
            this.pageNumbers.push(i);
          }
          console.log(this.data);
        }
      );
  }

  ngOnInit() {
    this.getData();
  }
  search() {

  }
  delete(template: Template) {
    this.templateSerive.deleteTemplate(template.Id)
      .then(
        (response) => {
          this.getData();
        }
      )
      .catch(
        (error) => {
          console.error(error);
        }
      )
  }
  getInvoice(template: Template) {
    this.templateSerive.getInvoice(template.Id)
      .subscribe(res => {
        let url = window.URL.createObjectURL(res);
        this.content = url;
        var link = document.createElement('iframe');
        link.setAttribute('src', url);
        document.body.appendChild(link);
      });
    //this.content = this.templateSerive.getInvoice_Link(template.Id);
  }

}
