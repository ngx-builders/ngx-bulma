# Textarea

#### The Bulma Css `Textarea` comes with different variations, It defines a multi-line input field.

To display a # Textarea component in your app and verify that everything works.
You need to import the BulmaTextareaModule that you want to display by adding the following lines to your app.module.ts file.

```javascript
import { BulmaTextareaModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaTextareaModule]
 });
```

TO Use the Textarea component in your Angular application ,add `buTextarea` in textarea tag.

| Element      | Description                                       |     |     |     |
| ------------ | ------------------------------------------------- | --- | --- | --- |
| `buTextarea` | For initializing Textarea in your HTML.           |     |     |     |
| `theme`      | For specifying different themes to Input          |     |     |     |
| `size`       | For specifying different sizes to Input           |     |     |     |
| `hovered`    | For enabling hover in Textarea use hovered="true" |
| `focus`      | For enabling hover in Textarea use focus="true"   |
| `rounded`    | To make round shape Textarea use rounded="true"   |
