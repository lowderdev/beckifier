'use babel';

import { CompositeDisposable } from 'atom'

export default {

  subscriptions: null,

  activate() {
    this.subscriptions = new CompositeDisposable()

    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'beckifier:beckify': () => this.beckify()
    }))
  },

  deactivate() {
    this.subscriptions.dispose()
  },

  beckify() {
    let editor
    if (editor = atom.workspace.getActiveTextEditor()) {
      let text = editor.getText()

      // brackets
      text = text.replace(/\{(.)/g, "{ $1")
      text = text.replace(/(.)\}/g, "$1 }")
      text = text.replace(/\{( )+/g, "{ ")
      text = text.replace(/( )+\}/g, " }")

      // quotes
      text = text.replace(/\"(?!.*#{)([^\'\n]*)\"/g, "'$1'")

      // parens
      text = text.replace(/\(( )+/g, "(")
      text = text.replace(/( )+\)/g, ")")
      editor.setText(text)
    }
  }
};
