import { Component } from '@angular/core';
import { RouterLinkActive } from '@angular/router';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-request-make',
    templateUrl: './request-make.component.html',
    styleUrls: ['./request-make.component.css'],
    standalone: true,
    imports: [MatIcon, RouterLinkActive]
})
export class RequestMakeComponent {

}
