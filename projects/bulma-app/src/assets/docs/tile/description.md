# Tiles

#### A single tile element to build 2-dimensional Metro-like, Pinterest-like, or whatever-you-like grids

To use a Bulma Tile component in your application, you need to import the `BulmaTileModule` by adding the following lines to your `app.module.ts` file.

```javascript
import { BulmaTileModule } from '@ngx-builders/ngx-bulma/tile';

@NgModule({
  imports: [BulmaTileModule],
  // ...
})
export class AppModule {}
```

## Basic

To display the Tile component in your Angular application, use the `buTile` directive with the `<div>` or `<article>` tag.

| Directive | Description                                  |
| --------- | -------------------------------------------- |
| `buTile`  | For displaying an HTML element as Bulma tile |

| Properties       | Description                                                         |     |     |     |
| ---------------- | ------------------------------------------------------------------- | --- | --- | --- |
| `theme`          | Set the theme of the Tile                                           |     |
| `horizontalSize` | Set the horizontal size of the Tile. It accepts values from 1 to 12 |     |
| `direction`      | Set the direction of the Tile                                       |     |

## Modifiers

The `tile` element has 16 modifiers:

- **3 contextual** modifiers
  - ancestor
  - parent
  - child

To use the contextual modifiers for the `buTile` directive, pass the modifier name to the directive. e.g. `buTile="ancestor"`

- **1 directional** modifier
  - vertical

To use the directional modifiers for the `buTile` directive, pass the modifier name to the `direction` property. e.g. `direction="vertical"`

- **12 horizontal size** modifiers
  - from 1
  - to 12

To use the horizontal size modifiers for the `buTile` directive, pass the modifier value to the `horizontalSize` property. e.g. `horizontalSize="8"`
