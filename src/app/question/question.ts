export class Question {
    text: string;
    answer: boolean;
    difficulty: number;
    isDone: boolean;
    theme: string;

    constructor(text: string, answer: boolean, difficulty: number, theme: string) {
        this.text = text;
        this.answer = answer;
        this.difficulty = difficulty;
        this.isDone = false;
        this.theme = theme;
    }
}
