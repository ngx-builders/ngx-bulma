# Message

#### Colored message blocks, to emphasize part of your page.

The Bulma message is a multi-part component which contains:

- the message container
- the optional `bu-message-header` that can hold a title and a delete element
- the `bu-message-content` for the longer body of the message.

To use a Message component in your application, you need to import the `BulmaMessageModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaMessageModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaMessageModule]
  // ...
})
export class AppModule {}
```

## Basic Message Details

The most basic Message component needs only of `<bu-message>` element with some content. However, Bulma components provides number of preset sections that you can use inside of `<bu-message>`.

| components             | Description              |
| ---------------------- | ------------------------ |
| `<bu-message>`         | Parent Message Component |
| `<bu-message-header>`  | Message Header           |
| `<bu-message-content>` | Message content          |
