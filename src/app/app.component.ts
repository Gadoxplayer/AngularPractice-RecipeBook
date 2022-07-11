import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature: string = 'recipe';

  title = 'je-angular-pj';
  
  onNavigate(featureNavigation: string) {
    this.loadedFeature = featureNavigation;
  }
}
