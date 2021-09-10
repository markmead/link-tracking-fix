export function linkTrackingFix() {
  const as = [...document.getElementsByTagName('a')]

  for (let a of as) {
    const cs = a.children

    for (let c of cs) {
      if (c.tagName === 'BUTTON') {
        ccs = c.children
        for (let cc of ccs) cc.style.pointerEvents = 'none'
      } else {
        c.style.pointerEvents = 'none'
      }
    }
  }
}
