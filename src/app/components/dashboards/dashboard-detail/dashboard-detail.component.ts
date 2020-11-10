import { Subscription } from 'rxjs';

import { animate, group, state, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';

import { OpenAnimationService } from '../shared/services/open-animation.service';

@Component({
  selector: 'easy-dashboard-detail',
  templateUrl: './dashboard-detail.component.html',
  styleUrls: ['./dashboard-detail.component.scss'],
  animations: [
    trigger('toggleAnimation', [
      state('open',
        style({ opacity: 1, width: '70%' }),
      ),
      state('close',
        style({ opacity: 0, width: 0 }),
      ),
      transition('closed <=> open', animate('2s')),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class DashboardDetailComponent implements OnInit, OnDestroy {

  show = false;
  animationSub: Subscription;

  @HostBinding('@toggleAnimation')
  get toggleAnimation(): string {
    return this.show ? 'open' : 'close';
  }

  constructor(private animationService: OpenAnimationService) { }

  ngOnInit() {
    this.animationSub = this.animationService._dashboardAnimationOn
      .subscribe((status: boolean) => this.show = status);
  }

  ngOnDestroy() {
    this.animationSub.unsubscribe();
    this.animationService.setAnimationStatus(false);
  }

}
