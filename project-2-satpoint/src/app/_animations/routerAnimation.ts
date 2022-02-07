import { animate, style, transition, trigger } from "@angular/animations";

export const routeAnimation = 
    trigger("routeAnimation", [
        transition("* => *", [ //any state to any state
            style({
                background: "blue"
            }),
            animate(2000)
        ])  
    ])

