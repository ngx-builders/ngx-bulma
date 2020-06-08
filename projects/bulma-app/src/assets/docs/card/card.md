# Card

#### An all-around flexible and composable component

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options.

To use a Card component in your application, you need to import the `BulmaCardModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaCardModule} from 'ngx-bulma';

@NgModule({
  imports: [BulmaCardModule]
});
```

## Basic Card Details

The most basic card needs only of `<bu-card>` element with some content. However, Bulma components provides a number of preset sections that you can use inside of `<bu-card>`

| Components          | Description                                |
| ------------------- | ------------------------------------------ |
| `<bu-card>`         | Parent Card Component                      |
| `<bu-card-header>`  | Card Header                                |
| `<bu-card-title>`   | Card Title                                 |
| `<bu-card-content>` | Primary card content                       |
| `<bu-card-footer>`  | Section anchored to the bottom of the card |

An example card is shown below:
