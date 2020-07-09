# Textarea

#### The multiline textarea and its variations

The Bulma textarea is the multiline version of the input element. To use a Textarea component in your application, you need to import the `BulmaTextareaModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaTextareaModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaTextareaModule]
  // ...
})
export class AppModule {}
```

To display the Bulma textarea component in your Angular application, add the `buTextarea` directive in the `<textarea>` tag.

| Directive    | Description                                         |
| ------------ | --------------------------------------------------- |
| `buTextarea` | For displaying a textarea element as Bulma textarea |

| Properties | Description                                                                              |
| ---------- | ---------------------------------------------------------------------------------------- |
| `theme`    | Set the theme of the textarea                                                            |
| `size`     | Set the size of the textarea                                                             |
| `hovered`  | Set the hover state of the textarea, default value is false                              |
| `focus`    | Set the focus state of the textarea, default value is false                              |
| `rounded`  | Make the edges rounded, giving the textarea a capsule like shape, default value is false |
