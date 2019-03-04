import { Component, OnInit, ViewChild } from '@angular/core';
import { TemplateService } from '../../services/template.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'ng-uikit-pro-standard';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.scss']
})
export class TemplateCreateComponent implements OnInit {
  @ViewChild('errorSwal') private errorSwal: SwalComponent;

  constructor(
    private templateService: TemplateService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private toastrService: ToastService,

  ) { }

  messInvoice: string = 'Hóa đơn mẫu';
  messReleaseAnnouncement: string = 'Bảng kê mẫu';
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      Name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Form: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Serial: new FormControl('', [Validators.required, Validators.minLength(3)]),
      Amount: new FormControl('', [Validators.required]),
      BeginNo: new FormControl('', [Validators.required]),
      CurrentNo: new FormControl('', [Validators.required]),
      ReleaseDate: new FormControl('', [Validators.required]),
    });
  }
  formData: FormData = new FormData();;
  create() {
    if (this.form.valid) {
      this.templateService.createTemplate(this.form.value)
        .then(
          (response: string) => {
            var id = response;
            console.log(id);
            this.templateService.createTemplateFile(id, this.formData)
              .then(
                (response) => {
                  this.serverShowSuccess();
                  this.goHome();
                }
              )
          }
        )
        .catch(
          (error) => {
            console.error(error);
          }
        )
    }
    else {
      this.errorSwal.show();
    }
  }

  goHome() {
    this.router.navigate(['..'], { relativeTo: this.route });
  }

  onInvoiceChange(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      //console.log(file);
      this.formData.set('Invoice', file);
      this.messInvoice = file.name;
    }
  }

  on_Change(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const file = event.target.files[0];
      //console.log(file);
      this.formData.set('ReleaseAnnouncement', file);
      this.messReleaseAnnouncement = file.name;
    }
  }

  serverShowSuccess() {
    this.toastrService.success('Thêm template thành công');
  }
}
