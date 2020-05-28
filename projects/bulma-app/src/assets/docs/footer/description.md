# Footer

#### A simple responsive footer which can include anything: lists, headings, columns, icons, buttons, etc.

The Bulma **footer** is a simple container, with lots of bottom padding, making it great as the last element of any webpage.

To display a Footer component in your app and verify that everything works.
You need to import the `BulmaFooterModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaFooterModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaFooterModule]
 });
```

| Component   | Description              |
| ----------- | ------------------------ |
| `bu-footer` | Parent Footer Component. |
