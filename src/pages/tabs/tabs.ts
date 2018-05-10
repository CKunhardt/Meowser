import { Component } from '@angular/core';

import { MyCatsPage } from '../my-cats/my-cats';
import { ProfilePage } from '../profile/profile';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MyCatsPage;
  tab2Root = HomePage;
  tab3Root = ProfilePage;

  constructor() {

  }
}
