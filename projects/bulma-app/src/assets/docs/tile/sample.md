```javascript
<div buTile="ancestor">
  <div buTile direction="vertical" horizontalSize="8">
    <div buTile>
      <div buTile="parent" direction="vertical">
        <article buTile="child" theme="primary" class="notification">
          <p class="title">Vertical...</p>
          <p class="subtitle">Top tile</p>
        </article>
        <article buTile="child" theme="warning" class="notification">
          <p class="title">...tiles</p>
          <p class="subtitle">Bottom tile</p>
        </article>
      </div>
      <div buTile="parent">
        <article buTile="child" theme="info" class="notification">
          <p class="title">Middle tile</p>
          <p class="subtitle">With an image</p>
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/640x480.png">
          </figure>
        </article>
      </div>
    </div>
    <div buTile="parent">
      <article buTile="child" theme="danger" class="notification">
        <p class="title">Wide tile</p>
        <p class="subtitle">Aligned with the right tile</p>
        <div class="content">
           <!-- Content -->
        </div>
      </article>
    </div>
  </div>
  <div buTile="parent">
    <article buTile="child" theme="success" class="notification">
      <div class="content">
        <p class="title">Tall tile</p>
        <p class="subtitle">With even more content</p>
        <div class="content">
           <!-- Content -->
        </div>
      </div>
    </article>
  </div>
</div>
```
