import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { AcercadeComponent } from './pages/acercade-component/acercade-component';
import { Cardproductos } from './components/cardproductos/cardproductos';
import { Cardproducto } from './components/cardproducto/cardproducto';

export const routes: Routes = [

    {
        path:'inicio',
        component:Inicio
    },
    {
        path:'acercade',
        component:AcercadeComponent
    },
    {
        path:'productos',
        component:Cardproductos
    },
    {
        path:'producto/:id',
        component:Cardproducto
    },
    {
        path:'**',
        component:Inicio
    }
    
];
