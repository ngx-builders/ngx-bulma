# Tag

#### Small tag labels to insert anywhere

To use the Tag component in your application, you need to import the `BulmaTagModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaTagModule } from '@ngx-builders/ngx-bulma/tag';

@NgModule({
  imports: [BulmaTagModule],
  // ...
})
export class AppModule {}
```

## Basic

To display the Tag component in your Angular application, use `<bu-tag>` tag.

| Component | Description           |     |
| --------- | --------------------- | --- |
| `bu-tag`  | Parent Tag Component. |

| Properties | Description                                                                         |     |
| ---------- | ----------------------------------------------------------------------------------- | --- |
| `theme`    | Set the theme of the Tag                                                            |     |
| `light`    | Set the the light version of the theme, default value is false                      |     |
| `size`     | Set the size of the Tag                                                             |     |
| `rounded`  | Make the edges rounded, giving the tag a capsule like shape, default value is false |     |
| `delete`   | Render the tag as delete button, default value is false                             |     |
