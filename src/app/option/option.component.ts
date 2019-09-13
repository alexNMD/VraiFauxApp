import { Component } from "@angular/core";
import { QuestionService } from "~/app/question/question.service";
import { EventData } from "tns-core-modules/data/observable";
import { ListPicker } from "tns-core-modules/ui/list-picker";

@Component({
    selector: 'option',
    templateUrl: './option.component.html',
    styleUrls: ['./option-style.css']
})

export class OptionComponent {
    game_settings: any;
    actualThemeIndex = this.questionService.getTheme().indexOf(this.questionService.game_settings.theme);
    themes = this.questionService.getTheme();

    constructor(private questionService: QuestionService) {
        this.game_settings = questionService.getGameSetting();
    }

    changeDifficulty() {
        this.questionService.changeDifficulty();
        this.game_settings = this.questionService.getGameSetting();
    }

    changeTheme(args: EventData) {
        const picker = <ListPicker>args.object;
        this.questionService.changeTheme(picker.selectedIndex);
        this.game_settings = this.questionService.getGameSetting();
    }
}
