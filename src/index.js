export class LinkTrackingFix {
  constructor() {
    const self = this
    const linkElements = [...document.getElementsByTagName("a")]

    linkElements.forEach(function (linkElement) {
      if (linkElement.hasAttribute("data-disable-link-tracking-fix")) return

      const linkChildren = [...linkElement.children]

      linkChildren.forEach(function (childElement) {
        const { tagName } = childElement

        if (tagName === "BUTTON") {
          const buttonChildren = [...childElement.children]

          buttonChildren.forEach((subChildElement) =>
            self.setPointerEvents(subChildElement)
          )
        } else {
          self.setPointerEvents(childElement)
        }
      })
    })
  }

  setPointerEvents(el) {
    el.style.pointerEvents = "none"
  }
}
