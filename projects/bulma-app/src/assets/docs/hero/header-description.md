# Hero

#### An imposing hero banner to showcase something

The hero component allows you to add a **full width banner** to your webpage, which can optionally cover the full height of the page as well.

To display a Hero component in your app and verify that everything works.
You need to import the `BulmaHeroModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaHeroModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaHeroModule]
 });
```

### Basic

To use the Container component in your Angular application.
Add `buContainer` in any div tags.

| Component | Description            |
| --------- | ---------------------- |
| `bu-hero` | Parent Hero Component. |

| Properties | Description                                       |
| ---------- | ------------------------------------------------- |
| `color`    | For specifying colors to Hero Component.          |
| `size`     | For specifying different sizes to Hero Component. |
| `gradient` | For enabling gradient in Hero Component .         |
