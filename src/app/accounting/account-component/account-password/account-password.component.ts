import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { VALID_ELEMENTS } from '@angular/core/src/sanitization/html_sanitizer';
import { AccountService } from '../../services/account.service';
import { SwalComponent } from '@toverux/ngx-sweetalert2';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-password',
  templateUrl: './account-password.component.html',
  styleUrls: ['./account-password.component.scss']
})
export class AccountPasswordComponent implements OnInit {
  @ViewChild('errorSwal') private errorSwal: SwalComponent;

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
    private route: ActivatedRoute,


  ) { }
  form: FormGroup;
  ngOnInit() {
    this.form = this.fb.group({
      CurrentPassword: new FormControl('', Validators.required),
      NewPassword: ['', [Validators.required, Validators.minLength(6)]],
      ConfirmPassword: [''],
    }, { validator: this.checkPasswords })
  };
  checkPasswords(group: FormGroup) { // here we have the 'passwords' group
    let pass = group.get('NewPassword').value;
    let confirmPass = group.get('ConfirmPassword').value;

    return pass === confirmPass ? null : { notSame: true }
  }

  changePassword() {
    console.log(this.form.value);
    if (this.form.valid) {
      this.accountService.changePassword(this.form.value)
        .then(
          () => {
            this.goHome();
          }
        ).catch
        (
          (e) => {
            this.errorSwal.show();
            console.error(e);
          }
        )
    } else {
      this.errorSwal.show();
    }
  }

  goHome() {
    this.router.navigate(['..'], {relativeTo: this.route});
}
}

