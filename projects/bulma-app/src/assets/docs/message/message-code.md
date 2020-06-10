```javascript
<bu-message>
  <bu-message-header>
    <p>Header</p>
    <button class="delete" aria-label="delete" (click)="showMyContainer=!showMyContainer"></button>
  </bu-message-header>
  <bu-message-content *ngIf="showMyContainer">
    <p>Content..........</p>
  </bu-message-content>
</bu-message>
```

Add `showMyContainer` property in your `app.component.ts` to make it work.

```javascript
export class MessageComponent implements OnInit {
  showMyContainer = true;
  constructor() {}
  ngOnInit() {}
}
```
