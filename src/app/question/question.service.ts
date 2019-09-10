import { Injectable } from "@angular/core";
import {Question} from "~/app/question/question";

@Injectable({
    providedIn: "root"
})

export class QuestionService {
    questions: Question[] = [
        new Question("La France a gagnée 2 fois la coupe du monde", true, 1),
        new Question("Nous sommes 3 milliards sur la Terre", false, 1),
        new Question('L\'eau bout à 100°', true, 1),
        new Question('Notre squelette se compose de 206 os', true, 2),
        new Question('L\'eau froide gèle plus vite que l\'eau chaude', false, 2),
    ];

    game_settings = {
        'life': 3,
        'joker': 2,
        'difficulty': 1,
        'theme': 'default',
        'score': 0,
    };

    randomSelection() {
        var rand = this.questions[Math.floor(Math.random() * this.questions.length)];
        return rand;
    }

    getGameSetting() {
        return this.game_settings;
    }
}
