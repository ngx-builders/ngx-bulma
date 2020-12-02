# Table

#### The inevitable HTML table, with special case cells

You can create a Bulma `table` simply by attaching a single table CSS class on a <table> HTML element.

To use a box component in your application, you need to import the `BulmaTableModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaTableModule } from 'ngx-bulma/table';

@NgModule({
  imports: [BulmaTableModule],
  // ...
})
export class AppModule {}
```

## Basic

To use Bulma modifiers the Table component in your Angular application, add the `buTable` directive in the `<table>` tag. The `<table>` tag supports following type sttributes:

| Directive | Description                     |
| --------- | ------------------------------- |
| `buTable` | For customizing a Table element |
