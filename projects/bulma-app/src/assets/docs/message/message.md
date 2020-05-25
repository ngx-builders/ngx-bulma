# Message

#### To signify anything in your page, message component is well designed to use.

The Bulma message is a multi-part component,consist of the message container.
the optional message-header that can hold a title and a delete element and lastly
the message-body for the longer body of the message.

To display a Message component in your app and verify that everything works.
You need to import the BulmaMessageModule that you want to display by adding the following lines to your app.module.ts file.

```javascript
import { BulmaMessageModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaMessageModule]
  });
```

The most basic Message component needs only of `<bu-message>` element with some content. However, Bulma components provides number of preset sections that you can use inside of `</bu-message>`.

| Element                | Description              |     |     |     |
| ---------------------- | ------------------------ | --- | --- | --- |
| `<bu-message>`         | Parent Message Component |     |     |     |
| `<bu-message-header>`  | Message Header           |     |     |     |
| `<bu-message-content>` | Message content          |     |     |     |
