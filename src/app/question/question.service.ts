import { Injectable } from "@angular/core";
import {Question} from "~/app/question/question";

@Injectable({
    providedIn: "root"
})

export class QuestionService {
    questions: Question[] = [
        new Question("La France a gagnée 2 fois la coupe du monde", true, 0),
        new Question("Nous sommes 3 milliards sur la Terre", false, 0),
        new Question('L\'eau bout à 100°', true, 0),
        new Question('Notre squelette se compose de 206 os', true, 1),
        new Question('L\'eau froide gèle plus vite que l\'eau chaude', false, 1),
    ];

    levels = [
        {'id': 0, 'label': 'Facile'},
        {'id': 1, 'label': 'Difficile'},
    ];

    game_settings = {
        'life': 3,
        'joker': 2,
        'difficulty': this.levels[0],
        'theme': 'default',
        'score': 0,
    };

    questionAnswered(questionAnswered: Question) {
        this.questions.filter((question) => questionAnswered === question)[0].isDone = true;
    }

    randomSelection() {
        let sortQuestions = [];
        let game_settings = this.game_settings;
        this.questions.forEach(function (question) {
            if (!question.isDone && question.difficulty == game_settings.difficulty.id) {
                sortQuestions.push(question);
            }
        });
        if (sortQuestions.length != 0) {
            var rand = sortQuestions[Math.floor(Math.random() * sortQuestions.length)];
            return rand;
        } else {
            return false;
        }


    }

    getGameSetting() {
        return this.game_settings;
    }

    replay() {
        this.game_settings.life = 3;
        this.game_settings.joker = 2;
        this.game_settings.score = 0;
        this.questions.forEach(function (element) {
            element.isDone = false;
        })
    }
    changeDifficulty(newValue) {
        this.game_settings.difficulty = this.levels[newValue];
    }
}
