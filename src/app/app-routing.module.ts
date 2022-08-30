import { NgModule } from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import { BodyComponent } from "./layaut/body/body.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
    {
        path:"",
        component: MainPageComponent
    },
    {
        path: "nav",
        component: BodyComponent
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}