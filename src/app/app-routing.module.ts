import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "~/app/home/home.component";
import { QuestionComponent } from "~/app/question/question.component";
import { EndgameComponent } from "~/app/endgame/endgame.component";
import { OptionComponent } from "~/app/option/option.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "question", component: QuestionComponent },
    { path: "endgame", component: EndgameComponent },
    { path: 'options', component: OptionComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
