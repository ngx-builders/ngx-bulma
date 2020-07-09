# Progress Bar

#### Native HTML progress bars

To use a bulma progress bar in your application, you need to import the `BulmaProgressbarModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaProgressbarModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaProgressbarModule]
  // ...
})
export class AppModule {}
```

### Basic

To display the Progressbar component in your Angular application, add the `buProgress` directive in the `<progress>` element.

| Directive    | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `buProgress` | For displaying a progress bar element as Bulma progress bar |

| Properties | Description                                                                                                                         |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `theme`    | Set the theme of the progress bar                                                                                                   |
| `size`     | Set the size of the progress bar                                                                                                    |
| `value`    | Set the current value of the progress bar. If not set then the progress bar will be displayed as an **indeterminate** progress bar  |
| `max`      | Set the upper limit of value property of the progress bar. If not set then the value in the **value** property is considered as max |
