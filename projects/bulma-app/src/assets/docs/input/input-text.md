# Input

#### The text input and its variations

To use an Input component in your application, you need to import the `BulmaInputModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaInputModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaInputModule]
  // ...
})
export class AppModule {}
```

## Basic

To display the Input component in your Angular application, add the `buInput` directive in the `<input>` tag. The `<input>` tag supports following type sttributes:

- `type="text"`
- `type="password"`
- `type="email"`
- `type="tel"`

| Directive | Description                                    |
| --------- | ---------------------------------------------- |
| `buInput` | For displaying an input element as Bulma input |

| Properties | Description                                                                           |
| ---------- | ------------------------------------------------------------------------------------- |
| `theme`    | Set the theme of the Input                                                            |
| `size`     | Set the size of the Input                                                             |
| `hovered`  | Set the hover state of the Input, default value is false                              |
| `focus`    | Set the focus state of the Input, default value is false                              |
| `rounded`  | Make the edges rounded, giving the Input a capsule like shape, default value is false |
