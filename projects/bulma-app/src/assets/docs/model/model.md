# Model
The Model service can be used to open modal dialogs with bulma Design styling and animations,In which you can include any content you want.

To display a Model component in your app and verify that everything works.
You need to import the BulmaModalModule that you want to display by adding the following lines to your app.module.ts file.

 ```typescript
import { BulmaModalModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaModalModule]
  });
 ```
To use the BulmaModal component in your Angular application.
Add below components sequentially for using bulma card component.

```
<bu-modal  [open]="isModalActive">
        <bu-model-head>
            <bu-model-title>
                    Modal title
            </bu-model-title>
          
        </bu-model-head>
        <bu-model-content>
            <p>content</p>
        </bu-model-content>
        <bu-model-footer>
                <button class="button is-success">Save changes</button>
                <button class="button" (click)="closemodel()">Cancel</button>
        </bu-model-footer>
</bu-modal>
<button class="button" (click)="toggleModal()">open  model</button>
```
Bulma doesnot have any implemention of  toggle the model,so implemented  by adding some function toggleModal(),closemodel() and isModalActive boolean properties in your .ts file.

```
  isModalActive = false;
  toggleModal() {
    this.isModalActive = !this.isModalActive;
  }
  closemodel() {
    this.isModalActive = false;
  }

```
######  The Modal structure is very simple:
- Modal: the main container
- Modal-background: a transparent overlay that can act as a click target to close the modal
- Modal-content: a horizontally and vertically centered container, with a maximum width of 640px, in which you can include any content
- Modal-close: a simple cross located in the top right corner

