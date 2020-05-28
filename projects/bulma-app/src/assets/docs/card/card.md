# Card Component

A card is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you’re familiar with Bootstrap 3, cards replace our old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

To display a card component in your app and verify that everything works.
You need to import the `BulmaCardModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaCardModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaCardModule]
 });
```

To use the bulmacard component in your Angular application.
Add below components sequentially.

Basic Card Details

The most basic card needs only of `<bu-card>` element with some content. However, Bulma components provides a number of preset sections that you can use inside of `</bu-card>`

| Components          | Description                                |
| ------------------- | ------------------------------------------ |
| `<bu-card>`         | Parent Card Component                      |
| `<bu-card-header>`  | Card Header                                |
| `<bu-card-title>`   | Card Title                                 |
| `<bu-card-content>` | Primary card content                       |
| `<bu-card-footer>`  | Section anchored to the bottom of the card |

Below is sample card Example.
