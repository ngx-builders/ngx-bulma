# Message
  The Bulma message is a multi-part component,consist of the message container.
     the optional message-header that can hold a title and a delete element and lastly
     the message-body for the longer body of the message.

To display a Menu component in your app and verify that everything works.
You need to import the BulmaMessageModule that you want to display by adding the following lines to your app.module.ts file.

```typescript
import { BulmaCardModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaCardModule]
  });
 ```
 To use the Basic BulmaMessage component in your Angular application,modify in your HTML file.
showMyContainer() function is  responsible for toggling your content.  
 ```
        <bu-bulma-message class="message">
            <bu-message-header>
                <p>Header</p>
                <button class="delete" aria-label="delete" (click)="showMyContainer=!showMyContainer"></button>
            </bu-message-header>
            <bu-message-content *ngIf="showMyContainer">
                <p>Content..........</p>
            </bu-message-content>
        </bu-bulma-message>
 ```
 you just need to add showMyContainer property in your app.component.ts to make it works.
 ```
export class MessageComponent implements OnInit {
    showMyContainer = true;
    constructor() { }
    ngOnInit() {
      }
}

 ```
Basic Message Details

The most basic card needs only of ```<bu-bulma-message class="message">```  element with some content. However, Bulma components provides a number of preset sections that you can use inside of ```</bu-bulma-message>```.

| Element  | Description  |   |   |   |
|---|---|---|---|---|
|```<bu-message-header>```   |Message Header   |   |   |   |
|```<bu-message-header> ```   |Message Title   |   |   |   |
|```<bu-message-content>```   |Primary card content   |   |   |   |


