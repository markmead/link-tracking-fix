# Link Tracking Fix 🔗

This fixes the issue (original found in Google Analytics) of link tags not being tracked correctly when they have child elements.

## Install

```
npm install link-tracking-fix
yarn add link-tracking-fix
```

## Usage

```js
import { LinkTrackingFix } from "link-tracking-fix"

new LinkTrackingFix()
```

## Disable on Certain Links

There might be an occasion when you'd want to disable this fix, to do so you can add `data-disable-link-tracking-fix` to the link tag.

```html
<a href="/" data-disable-link-tracking-fix>
  Hello!
  <span role="img">👉</span>
</a>
```

## When Would They Not Track?

The most common example would be a link tag with an icon.

```html
<a href="/">
  Hello!
  <span role="img">👉</span>
</a>
```

Without this package when a user clicks the `<span>` element Google Analytics (maybe other tracking software) won't pick that up as a clicked link.

This is bad if you are tracking how many users are clicking your links, especially contact links.

## What About Links with Buttons?

That's been handled 😅
