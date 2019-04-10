import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { LoaderState } from '../../models/Loader';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit, OnDestroy {

  constructor(
    private loaderService: LoaderService,
  ) {
    console.log(2);
    this.subscription = this.loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
   }
   private subscription: Subscription

  show = false;
  value =21 ;
  ngOnInit() {
    
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }
}
