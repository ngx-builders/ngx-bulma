# Button

#### Bulma Button comes different colors ,sizes and styles.

To display a Button component in your app and verify that everything works.
You need to import the `BulmaButtonModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaButtonModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaButtonModule]
 });
```

### Basic

To use the Button component in your Angular application.
Add `buButton` in Button tags.

| Property   | Description                               |     |     |     |
| ---------- | ----------------------------------------- | --- | --- | --- |
| `buButton` | For initializing buButton in your HTML    |     |     |     |
| `theme`    | For specifying different themes to Button |     |     |     |
| `color`    | For specifying colors to Button           |     |     |     |
| `size`     | For specifying different sizes to Button  |     |     |     |
