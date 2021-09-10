# `<a>` Tag Not Tracking Fix

This is a simple fix for `<a>` tags not tracking in Google Anayltics

### When Would They Not Track?

The most common example is when you have a link with inner HTML:

```html
<a>
  Click me!
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" width="24" height="24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
  </svg>
</a>
```

If he user clicks the `<svg>` the link will work but this CAN result in the click not being registered in Google Anayltics (maybe other tracking software)
