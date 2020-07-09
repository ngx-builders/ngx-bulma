# Button

#### The classic button, in different colors, sizes, and states

To use a Button component in your application, you need to import the `BulmaButtonModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaButtonModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaButtonModule],
  // ...
})
export class AppModule {}
```

## Basic

To display the Button component in your Angular application, add the `buButton` directive in the `<button>` tag.

| Directive  | Description                                     |
| ---------- | ----------------------------------------------- |
| `buButton` | For displaying a Button element as Bulma button |

| Properties | Description                                                                            |     |     |     |
| ---------- | -------------------------------------------------------------------------------------- | --- | --- | --- |
| `theme`    | Set the theme of the Button                                                            |     |
| `color`    | Set the color of the Button                                                            |     |
| `size`     | Set the size of the Button                                                             |     |
| `outlined` | Set the outlined style of the Button, default value is false                           |     |
| `inverted` | Set the inverted style of the Button, default value is false                           |     |
| `rounded`  | Make the edges rounded, giving the button a capsule like shape, default value is false |     |
| `hovered`  | Set the hover state of the Button, default value is false                              |     |
| `focus`    | Set the focus state of the Button, default value is false                              |     |
| `active`   | Set the active state of the Button, default value is false                             |     |
| `loading`  | Set the loading state of the Button, default value is false                            |     |
