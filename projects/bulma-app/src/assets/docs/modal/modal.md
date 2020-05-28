# Modal

##### A handy modal, which comes with multilevel content feature and classy look with all features.In which you can include any content you want.

To display a Modal component in your app and verify that everything works.
You need to import the `BulmaModalModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaModalModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaModalModule]
 });
```

The most basic Modal needs only of `<bu-modal>` element with some content. However, Bulma components provides a number of preset sections that you can use inside of `</bu-modal>`

| Components           | Description            |
| -------------------- | ---------------------- |
| `<bu-modal>`         | Parent Modal Component |
| `<bu-modal-header>`  | Modal Header           |
| `<bu-modal-title>`   | Modal Title            |
| `<bu-modal-content>` | Modal content          |
| `<bu-modal-footer>`  | Bottom of the Modal    |

| Property | Description                        |
| -------- | ---------------------------------- |
| `[open]` | Flag to check modal is open or not |

To use the Basic BulmaModal component in your Angular application.
you just need to add above modal elements sequentially in you `HTML` and you are ready to go.
