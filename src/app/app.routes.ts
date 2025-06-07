import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { Forms} from './forms/forms';

export const routes: Routes = [
    {path : 'home',component: Home},
      {path : 'about',component: About},
        {path : 'contacts',component: Contacts},
          {path : 'form',component: Forms}
];
