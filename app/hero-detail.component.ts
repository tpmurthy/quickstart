import {Component, Input} from "@angular/core";
import {Hero} from "./hero";


@Component({
  selector: 'my-hero-detail',
  template: `
              <div *ngIf="heroDet">
                <h2>{{heroDet.name}} details!</h2>
                <div><label>id: </label>{{heroDet.id}}</div>
                <div>
                  <label>name: </label>
                  <input [(ngModel)]="heroDet.name" placeholder="name"/>
                </div>
              </div>
            `
})
export class HeroDetailComponent {

  @Input()
  heroDet:Hero;
}
