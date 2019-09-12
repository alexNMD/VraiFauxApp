import { Component } from "@angular/core";
import { Switch } from "tns-core-modules/ui/switch";
import { QuestionService } from "~/app/question/question.service";
import { EventData } from "tns-core-modules/data/observable";

@Component({
    selector: 'option',
    templateUrl: './option.component.html',
    styleUrls: ['./option-style.css']
})

export class OptionComponent {
    game_settings: any;
    levelCheck: boolean;

    constructor(private questionService: QuestionService) {
        this.game_settings = questionService.getGameSetting();
        if (this.game_settings.difficulty.id == 0) {
            this.levelCheck = false;
        } else {
            this.levelCheck = true;
        }
    }

    changeDifficulty(args: EventData) {
        let mySwitch = args.object as Switch;
        let newValue: number;
        let isChecked = mySwitch.checked;
        if (isChecked) {
            newValue = 1
        } else {
            newValue = 0
        }
        this.questionService.changeDifficulty(newValue);
        this.game_settings = this.questionService.getGameSetting();
    }
}
