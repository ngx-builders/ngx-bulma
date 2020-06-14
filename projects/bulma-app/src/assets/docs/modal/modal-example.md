```javascript
<button buButton  (click)="toggleModal()">Launch modal</button>

<bu-modal [open]="isModalActive">
  <bu-modal-header>
    <bu-modal-title>
      Modal title
    </bu-modal-title>
    <button class="delete" aria-label="close" (click)="closeModal()"></button>
  </bu-modal-header>
  <bu-modal-content>
    <h1>Hello World</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan, metus ultrices
      eleifend gravida, nulla nunc varius lectus, nec rutrum justo nibh eu lectus. Ut vulputate
      semper dui. Fusce erat odio, sollicitudin vel erat vel, interdum mattis neque.
    </p>
  </bu-modal-content>
  <bu-modal-footer>
    <button buButton theme="success">Save changes</button>
    <button buButton (click)="closeModal()">Cancel</button>
  </bu-modal-footer>
</bu-modal>
```
