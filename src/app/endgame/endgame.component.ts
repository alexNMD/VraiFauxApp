import { Component } from "@angular/core";
import { QuestionService } from "~/app/question/question.service";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    selector: 'endgame',
    templateUrl: './endgame.component.html',
    styleUrls: ['./endgame-style.css']
})

export class EndgameComponent {
    game_settings: any;

    constructor(private questionService: QuestionService, private routerExtensions: RouterExtensions) {
        this.game_settings = questionService.getGameSetting();
    }

    replay() {
        this.questionService.replay();
        this.routerExtensions.navigateByUrl('/home');
    }

    // A implémenter
    share() {}

}
