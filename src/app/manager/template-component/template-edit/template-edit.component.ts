import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { TemplateService } from '../../services/template.service';
import { Template } from '../../models/template';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-template-edit',
  templateUrl: './template-edit.component.html',
  styleUrls: ['./template-edit.component.scss']
})
export class TemplateEditComponent implements OnInit {
  @ViewChild('errorSwal') private errorSwal: SwalComponent;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private templateService : TemplateService,
    private router: Router,
    private toastrService: ToastService,
  ) { }
  id: string;
  messInvoice: string = 'Hóa đơn mẫu';
  messReleaseAnnouncement: string = 'Bảng kê mẫu';
  form: FormGroup;
  
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.templateService.getTemplate(this.id)
        .then(
          (response:Template) =>{
            this.form = this.fb.group({
              Id: new FormControl(response.Id),
              Name: new FormControl(response.Name, [Validators.required, Validators.minLength(3)]),
              Form: new FormControl(response.Form, [Validators.required, Validators.minLength(3)]),
              Serial: new FormControl(response.Serial, [Validators.required, Validators.minLength(3)]),
              Amount: new FormControl(response.Amount, [Validators.required]),
              BeginNo: new FormControl(response.BeginNo, [Validators.required]),
              CurrentNo: new FormControl(response.CurrentNo, [Validators.required]),
              ReleaseDate: new FormControl(response.ReleaseDate, [Validators.required]),
            });
          }
        )
        .catch(
          ()=>{
            this.goHome();
          }
        )
    });
    
  }
  goHome() {
    this.router.navigate(['../..'], { relativeTo: this.route });
  }

  update()
  {
    if(this.form.valid)
    {
      this.templateService.updateTemplate(this.form.value)
        .then(
          () =>{
            this.serverShowSuccess();
            this.goHome();
          }
        )
        .catch(
          (error)=>{
            console.log(error);
            this.errorSwal.show();
          }
        )
    }
    else
    {
      this.errorSwal.show();
    }
  }

  serverShowSuccess() {
    this.toastrService.success('Sửa template thành công');
  }
}
