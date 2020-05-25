# Container

A simple container to center your content horizontally.

To display a Container component in your app and verify that everything works.
You need to import the BulmaContainerModule that you want to display by adding the following lines to your app.module.ts file.

```javascript
import { BulmaContainerModule} from 'ngx-bulma'
 @NgModule({
   imports: [BulmaContainerModule]
 });
```

### Basic

To use the Container component in your Angular application.
Add `buContainer` in any div tags.

| Element       | Description                              |     |     |     |
| ------------- | ---------------------------------------- | --- | --- | --- |
| `buContainer` | For initializing Container in your HTML. |     |     |     |

| Property | Description                                                                |     |     |     |
| -------- | -------------------------------------------------------------------------- | --- | --- | --- |
| `type`   | Depending upon breakpoints of screen you can choose fluid,widescreen,fluid |     |     |     |
