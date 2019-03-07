import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private authGuardService: AuthService,
    private router: Router

  ) { }

  ngOnInit() {
    var roles = this.authGuardService.getRoles();
    console.log(roles);
    if(roles ==null)
    {
      this.router.navigate(['login']);

    } 
    else
    if(roles.includes(environment.RoleName.Admin))
    {
      this.router.navigate(['admin']);
    }
    else
    if(roles.includes(environment.RoleName.RoleManager.value))
    {
      this.router.navigate(['manager']);
    }
    else
    if(roles.includes(environment.RoleName.RoleAccountingManager.value))
    {
      this.router.navigate(['accounting']);
    }
  }

}
