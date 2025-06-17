import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contacts } from './contacts/contacts';
import { Forms} from './forms/forms';
import { Login} from '../app/login/login';
import { Register } from './register/register';
export const routes: Routes = [
   { path: 'register', component: Register },
   {path : 'login',component:Login},
    {path : 'home',component: Home},
      {path : 'about',component: About},
        {path : 'contacts',component: Contacts},
          {path : 'form',component: Forms},
           { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'Login', loadComponent: () => 
    import('../app/login/login').then(calls=> calls.Login) },
  { path: 'Home', loadComponent: () => 
    import('../app/home/home').then(calls=> calls.Home) },
  { path: 'About', loadComponent: () => 
    import('../app/about/about').then(calls=> calls.About) },
  { path: 'Contacts', loadComponent: () => 
    import('../app/contacts/contacts').then(calls=> calls.Contacts) },
 { path: 'Forms', loadComponent: () => 
    import('../app/forms/forms').then(calls=> calls.Forms) },
];

