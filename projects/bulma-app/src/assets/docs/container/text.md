# Container

#### A simple container to center your content horizontally.

To use a Bulma Container component in your application, you need to import the `BulmaContainerModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaContainerModule } from 'ngx-bulma';

@NgModule({
  imports: [BulmaContainerModule]
  // ...
})
export class AppModule {}
```

## Basic

To display the Container component in your Angular application, add the `buContainer` directive to a `<div>` tag.

| Directive     | Description                              |     |     |     |     |
| ------------- | ---------------------------------------- | --- | --- | --- | --- |
| `buContainer` | For initializing Container in your HTML  |

| Property | Description                                                                                           |
| -------- | ----------------------------------------------------------------------------------------------------- |
| `type`   | Depending on the breakpoints of the screen you can set the value to `fluid`, `widescreen` or `fullhd` |
