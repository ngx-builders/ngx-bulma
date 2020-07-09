# Hero

#### An imposing hero banner to showcase something

The hero component allows you to add a **full width banner** to your webpage, which can optionally cover the full height of the page as well.

To use a Bulma Hero component in your application, you need to import the `BulmaHeroModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaHeroModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaHeroModule]
  // ...
})
export class AppModule {}
```

## Basic

To display the Hero component in your Angular application, use the `<bu-hero>` tag.

| Component | Description            |
| --------- | ---------------------- |
| `bu-hero` | Parent Hero Component. |

| Properties | Description                                                    |
| ---------- | -------------------------------------------------------------- |
| `color`    | Set the color of the Hero Component                            |
| `size`     | Set the size of the Hero Component                             |
| `gradient` | Set the gradient of the Hero Component, default value is false |
