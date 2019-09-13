import { Injectable } from "@angular/core";
import {Question} from "~/app/question/question";

@Injectable({
    providedIn: "root"
})

export class QuestionService {
    themes = ['TOUT', 'Science', 'Culture Générale'];
    levels = [
        { 'id': 1, 'label': 'Facile' },
        { 'id': 2, 'label': 'Normal' },
        { 'id': 3, 'label': 'Difficile' },
    ];
    game_settings = {
        'life': 3,
        'joker': 2,
        'difficulty': this.levels[0],
        'theme': this.themes[0],
        'score': 0,
    };

    questions: Question[] = [
        new Question("La France a gagnée 2 fois la coupe du monde", true, 1, 'Culture Générale'),
        new Question("Nous sommes 3 milliards sur la Terre", false, 1, 'Culture Générale'),
        new Question('L\'eau bout à 100°', true, 1, 'Culture Générale'),
        new Question('Notre squelette se compose de 206 os', true, 2, 'Science'),
        new Question('L\'eau froide gèle plus vite que l\'eau chaude', false, 2, 'Science'),
        new Question('Christophe Colomb a découvert l\'Amérique', false, 2, 'Culture Générale'),
        new Question('Victor Hugo a écrit "les Misérables', true, 1, 'Culture Générale'),
        new Question('Les antibiotiques tuent les bactéries et les virus', false, 2, 'Science'),
        new Question('L\'ONU (Organisation des Nations unies) a été créée en 1991', false, 2, 'Culture Générale'),
        new Question('Le renard est un félin', false, 1, 'Culture Générale'),
        new Question('La durée d’un jour a toujours été de 24 heures', false, 2, 'Culture Générale'),
        new Question('Les éléphants ont peur des souris', false, 1, 'Culture Générale'),
        new Question('Le sens de rotation de l’eau dans un lavabo dépend de l’hémisphère dans lequel on se trouve', false, 2, 'Science'),
        new Question('L’homme a plus de poils que la femme', false, 1, 'Science'),
        new Question('Il est impossible d’éternuer les yeux ouverts', true, 1, 'Culture Générale'),
        new Question('Le taureau est excité par la couleur rouge', false, 2, 'Science'),
        new Question('Les connexions Wi-Fi peuvent être perturbées par les fours à micro-ondes', true, 1, 'Science'),
        new Question('Pluton est une planète', false, 2, 'Science'),
        new Question('L’homme n’utilise que 10% de son cerveau', false, 1, 'Science'),
        new Question('Cléopâtre était égyptienne', false, 2, 'Culture Générale'),
    ];


    questionAnswered(questionAnswered: Question) {
        this.questions.filter((question) => questionAnswered === question)[0].isDone = true;
    }

    randomSelection() {
        let sortQuestions = [];
        let game_settings = this.game_settings;
        this.questions.forEach(function (question) {
            if (game_settings.theme == 'TOUT') {
                if (!question.isDone && question.difficulty <= game_settings.difficulty.id) {
                    sortQuestions.push(question);
                }
            } else {
                if (!question.isDone && question.difficulty <= game_settings.difficulty.id && question.theme == game_settings.theme) {
                    sortQuestions.push(question);
                }
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

    changeDifficulty() {
        let nbLevels = this.levels.length;
        let actualLevels = this.game_settings.difficulty.id;

        if (nbLevels == actualLevels) {
            this.game_settings.difficulty = this.levels[0];
        } else {
            this.game_settings.difficulty = this.levels[actualLevels];
        }
    }

    getTheme() {
        return this.themes;
    }

    changeTheme(id) {
        this.game_settings.theme = this.themes[id];
    }
}
