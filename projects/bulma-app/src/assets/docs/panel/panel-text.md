# Panel

##### To emphasize important notes in your application ,The utilitarian `panel` simple to use.

To display a panel component in your app and verify that everything works. You need to import the BulmaPanelModule that you want to display by adding the following lines to your app.module.ts file.

```javascript
import { BulmaPanelModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaPanelModule]
 });
```

The most basic Panel component needs only of `<bu-panel>` element with some content. However, Bulma components provides number of preset sections that you can use inside of `</bu-panel>`.

| Element              | Description            |     |     |     |
| -------------------- | ---------------------- | --- | --- | --- |
| `<bu-panel>`         | Parent Panel Component |     |     |     |
| `<bu-panel-heading>` | Panel Header           |     |     |     |
| `<bu-panel-block>`   | Panel content          |     |     |     |
