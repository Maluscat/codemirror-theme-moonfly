# codemirror-theme-moonfly
Port of the awesome [moonfly](https://github.com/bluz71/vim-moonfly-colors)
color scheme for [CodeMirror](https://codemirror.net/).

It is a bit biased towards the web stack (JavaScript/TypeScript, CSS, HTML),
but since the CodeMirror theming system is pretty consistent, it looks good on most – if not all – languages.
If you find a language lacking in any way, please consider opening an issue or pull request!


## Installation
Available on npm under `codemirror-theme-moonfly`:
```sh
yarn add codemirror-theme-moonfly
```
```
npm install codemirror-theme-moonfly
```

As described in the [CodeMirror docs](https://codemirror.net/docs/guide/#extension),
you can then include the theme in the `extensions` field of your CodeMirror configuration.


## Provided exports
<dl>
<dt><code>moonfly</code>: <code><a href="https://codemirror.net/docs/ref/#state.Extension">Extension</a></code></dt>
<dd>
The final moonfly theme that can be used as a CodeMirror extension.
It includes the editor theme and all provided highlight styles.
</dd>

<dt><code>moonflyTheme</code>: <code><a href="https://codemirror.net/docs/ref/#state.Extension">Extension</a></code></dt>
<dd>
The editor theme (styles for the background, gutter, etc.).
</dd>

<dt><code>moonflyHighlightBase</code>: <code><a href="https://codemirror.net/docs/ref/#language.HighlightStyle">HighlightStyle</a></code></dt>
<dd>
The base syntax highlighting that applies to all languages.
</dd>

<dt><code>moonflyHighlightCSS</code>: <code><a href="https://codemirror.net/docs/ref/#language.HighlightStyle">HighlightStyle</a></code></dt>
<dd>
Syntax highlighting that applies to CSS, overriding the base styles.
</dd>
</dl>

Additionally, all colors of the moonfly [color palette](https://github.com/bluz71/vim-moonfly-colors/blob/master/autoload/moonfly.vim)
are exported individually.
It's best to take a look at the [main file](./src/theme-moonfly.js) for an overview.

## License
Like vim-moonfly-colors, this project is licensed under the [MIT license](./LICENSE).
