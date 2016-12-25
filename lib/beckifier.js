'use babel';

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'beckifier:fetch': () => this.fetch()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  fetch() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let text = editor.getText()
      // quotes
      text = text.replace(/\"(?!.*#{)([^\'\n]*)\"/g, "'$1'")

      // brackets
      text = text.replace(/\{( )+/g, "{ ")
      text = text.replace(/( )+\}/g, " }")
      text = text.replace(/\{(\w)/g, "{ $1")
      text = text.replace(/(\w)\}/g, "$1 }")

      // parens
      text = text.replace(/\(( )+/g, "(")
      text = text.replace(/( )+\)/g, ")")
      editor.setText(text)
    }
  }
};
