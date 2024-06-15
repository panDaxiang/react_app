import { EditorView, ViewUpdate, Decoration, DecorationSet, ViewPlugin, MatchDecorator, WidgetType } from '@codemirror/view';

class PlaceholderWidget extends WidgetType {
  constructor(readonly name: string) {
    super()
  }
  eq(other: PlaceholderWidget) {
    return this.name == other.name
  }
  toDOM() {
    let elt = document.createElement("span")
    elt.style.cssText = `color: #099dce;`
    elt.textContent = this.name
    return elt
  }
  ignoreEvent() {
    return false
  }
}

const placeholderMatcher = new MatchDecorator({
  regexp: /(\w+)/g,
  decoration: match => Decoration.replace({
    widget: new PlaceholderWidget(match[1]),
  })
})

export const placeholders = ViewPlugin.fromClass(class {
  placeholders: DecorationSet
  constructor(view: EditorView) {
    this.placeholders = placeholderMatcher.createDeco(view)
  }
  update(update: ViewUpdate) {
    this.placeholders = placeholderMatcher.updateDeco(update, this.placeholders)
  }
}, {
  decorations: instance => instance.placeholders,
  provide: plugin => EditorView.atomicRanges.of(view => {
    return view.plugin(plugin)?.placeholders || Decoration.none
  })
})

