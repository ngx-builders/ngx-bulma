# Input

#### The `<input>` tag specifies an input field where the user can enter data.

##### The following type attributes are supported:

`type="text"`
`type="password"`
`type="email"`
`type="tel"`

To display a Input component in your app and verify that everything works.
You need to import the BulmaInputModule that you want to display by adding the following lines to your app.module.ts file.

```javascript
import { BulmaInputModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaInputModule]
 });
```

### Basic

To use the Input component in your Angular application.
Add `buInput` in Input tags.

| Property  | Description                                    |     |     |     |
| --------- | ---------------------------------------------- | --- | --- | --- |
| `buInput` | For initializing buInput in your HTML          |     |     |     |
| `theme`   | For specifying different themes to Input       |     |     |     |
| `size`    | For specifying different sizes to Input        |     |     |     |
| `hovered` | For enabling hover in Input use hovered="true" |
| `focus`   | For enabling hover in Input use focus="true"   |
| `rounded` | To make round shape Input use rounded="true"   |
