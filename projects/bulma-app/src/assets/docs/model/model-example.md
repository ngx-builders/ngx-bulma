```
<button class="button" (click)="toggleModal()" >open model</button>

<bu-modal [open]="isModalActive">
        <bu-model-head>
                <bu-model-title>
                        Modal title
                </bu-model-title>
                <button class="delete" aria-label="close" (click)="closemodel()"></button>
        </bu-model-head>
        <bu-model-content>
                <h1>Hello World</h1>
                <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla accumsan,
                        metus ultrices eleifend gravida, nulla nunc varius lectus, nec rutrum
                        justo nibh eu lectus. Ut vulputate semper dui. Fusce erat odio,
                        sollicitudin vel erat vel, interdum mattis neque.
                </p>
        </bu-model-content>
        <bu-model-footer>
                <button class="button is-success">Save changes</button>
                <button class="button" (click)="closemodel()">Cancel</button>
        </bu-model-footer>
</bu-modal>
```
##### Bulma doesn't have any implemention of  toggle the model,so implemented  by adding some function. 
###### ```toggleModal(), closemodel() and isModalActive boolean properties in your .ts file```.

```
  isModalActive = false;
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  closemodel() {
    this.isModalActive = false;
  }

```