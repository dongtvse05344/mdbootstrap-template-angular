import { Component, OnInit, ViewChild } from '@angular/core';
import { PageModel } from 'src/app/core/models/PageModel';
import { TemplateService } from '../../services/template.service';
import { Template } from '../../models/template';

@Component({
  selector: 'app-template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.scss']
})
export class TemplateListComponent implements OnInit {
  @ViewChild('basicModal') basicModal: any;
  constructor(
    private templateSerive: TemplateService
  ) { }

  data: PageModel<Template> = new PageModel<Template>();

  index: number = 1;
  pageSize: number = 5;
  pageNumbers: Array<Number>;
  pageSizeNumbers: Number[] = [5, 10, 20, 50];
  content: string = "";
  nameSearch: string = "";
  PDFsrc = null;

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
    this.PDFsrc = null;
    this.templateSerive.getInvoice(template.Id)
      .subscribe(res => {
        var file = new Blob([res], { type: 'application/pdf' });
        var fileURL = URL.createObjectURL(file);
        this.PDFsrc = fileURL;
        this.basicModal.show();
      });
    //this.content = this.templateSerive.getInvoice_Link(template.Id);
  }

}
