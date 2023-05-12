import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
// import {} from "../Services/SnackService.js"


function _drawSnack(){
    let snack = appState.snack
    let template = ''
    snack.forEach(s => template += s.SnackTemplate);
    setHTML('app', template)
}

export class SnacksController {
    constructor(){
        console.log('Working on Snacks Controller')
        // _drawSnack()
    }
}