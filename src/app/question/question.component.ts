import { Component, OnInit } from "@angular/core";
import { QuestionService } from "./question.service";
import { Question } from "./question";
import * as dialogs from "tns-core-modules/ui/dialogs";

@Component({
    selector: 'question-component',
    templateUrl: './question.component.html',
    styleUrls: ['./question-style.css'],
})

export class QuestionComponent {
    question: Question;
    response: boolean;
    answered = false;
    game_settings: any;
    lifes = [];
    jokers = [];
    responseStatus = '';
    endgame = false;

    constructor(private questionService: QuestionService) {
        this.question = this.questionService.randomSelection();
        this.game_settings = this.questionService.getGameSetting();
        this.lifes = Array(this.game_settings.life).fill(0).map((x,i)=>i);
        this.jokers = Array(this.game_settings.joker).fill(0).map((x,i)=>i);
    }

    userResponse(question: Question, userResponse) {
        this.answered = true;
        this.response = question.answer;
        this.questionService.questionAnswered(question);
        if (question.answer === userResponse) {
            this.responseStatus = "Bonne réponse !";
            this.game_settings.score += 1;
        } else {
            this.responseStatus = "Mauvaise réponse !";
            this.game_settings.life -= 1;
            if (this.game_settings.life == 0) {

            }
            this.lifes = Array(this.game_settings.life).fill(0).map((x,i)=>i);
        }
    }

    nextQuestion() {
        if (this.questionService.randomSelection()) {
            this.question = this.questionService.randomSelection();
            this.answered = false;
        } else {
            this.endgame = true;
        }
    }

    useJoker(question) {
        dialogs.confirm({
            title: "JOKER",
            message: "Es-tu bien sûr d'utiliser un joker ?",
            okButtonText: "Envoie la sauce !",
            cancelButtonText: "Pas sûr finalement..",
        }).then(result => {
            // result argument is boolean
            if (result) {
                this.game_settings.joker -= 1;
                this.jokers = Array(this.game_settings.joker).fill(0).map((x,i)=>i);

                this.answered = true;
                this.responseStatus = "";
                this.response = question.answer;
                this.questionService.questionAnswered(question);
            }
        });
    }

}
