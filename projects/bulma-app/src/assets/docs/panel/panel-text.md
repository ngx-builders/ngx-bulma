# Panel

#### A composable panel, for compact controls

To use a Panel component in your application, you need to import the `BulmaPanelModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaPanelModule} from 'ngx-bulma';

@NgModule({
  imports: [BulmaPanelModule]
});
```

## Basic Panel Details

The most basic Panel component needs only of `<bu-panel>` element with some content. However, Bulma components provides number of preset sections that you can use inside of `</bu-panel>`.

| Components           | Description            |     |     |     |
| -------------------- | ---------------------- | --- | --- | --- |
| `<bu-panel>`         | Parent Panel Component |     |     |     |
| `<bu-panel-heading>` | Panel Header           |     |     |     |
| `<bu-panel-block>`   | Panel content          |     |     |     |
