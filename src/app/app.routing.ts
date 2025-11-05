import { HomeComponent } from "../components/home/home.component";
import { CineComponent } from "../components/cine/cine.component";
import { MusicaComponent } from "../components/musica/musica.component";
//NECESITAMOS UNA SERIE DE MODULOS SQUE SE ENCUENTRAN DENTRO DE ANGULAR/ROUTER
import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { NotfoundComponent } from "../components/notfound/notfound.component";

//NECESITAMOS UN ARRAY CON LAS RUTAS, DICHO ARRAY SERA DE TIPO Routes
const appRoutes: Routes = [
    //DEFINIMOS LAS RUTAS
    {path: "", component: HomeComponent},
    {path: "cine", component: CineComponent},
    {path: "musica", component: MusicaComponent},
    {path: "**", component: NotfoundComponent} //RUTA DE FALLBACK
]
//DESDE ESTA CLASE DEBEMOS EXPORTA NUESTRO ARRAY DE ROUTES COMO PROVIDER
export const appRoutingProvider: any[] = [];
//LAS PROPIAS RUTAS A EXPORTAR
export const routing: ModuleWithProviders<any> =
RouterModule.forRoot(appRoutes);