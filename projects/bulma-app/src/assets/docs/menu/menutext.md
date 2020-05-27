# Menu

#### A simple menu, for any type of vertical navigation.

Menu is just container holds `menu-header` , `menu-label` and `menu-list`.

To display a Menu component in your app and verify that everything works.
You need to import the `BulmaMenuModule` that you want to display by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaMenuModule} from 'ngx-bulma'
  @NgModule({
    imports: [BulmaMenuModule]
  });
```

To use the BulmaMenu component in your Angular application.
Add below components sequentially for using bulma menu component
and you are good to go and you will see menu list ,also you can add nested menu .
