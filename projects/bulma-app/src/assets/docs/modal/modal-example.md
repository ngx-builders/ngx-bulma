```html
<button class="button" (click)="toggleModal()">open modal</button>

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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
      metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
      justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
      sollicitudin vel erat vel, interdum mattis neque.
    </p>
  </bu-modal-content>
  <bu-modal-footer>
    <button class="button is-success">Save changes</button>
    <button class="button" (click)="closeModal()">Cancel</button>
  </bu-modal-footer>
</bu-modal>
```

##### Bulma doesn't have any implemention of toggle the modal,so implemented by adding some function.

###### `toggleModal(), closeModal() and isModalActive boolean properties in your .ts file`.

```javascript
  isModalActive = false;
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  closeModal() {
    this.isModalActive = false;
  }

```
