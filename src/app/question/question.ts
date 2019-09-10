export class Question {
    text: string;
    answer: boolean;
    difficulty: number;

    constructor(text: string, answer: boolean, difficulty: number) {
        this.text = text;
        this.answer = answer;
        this.difficulty = difficulty;
    }
}
