```
        <bu-message buMessage theme='info'>
            <bu-message-header>
                <p>Header</p>
                  <button class="delete" aria-label="delete" (click)="showMyContainer=!showMyContainer"></button>
            </bu-message-header>
            <bu-message-content *ngIf="showMyContainer">
                <p>Content..........</p>
            </bu-message-content>
        </bu-message>
 ```