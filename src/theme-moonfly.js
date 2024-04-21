import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';


// Background and foreground
const black     = '#080808';
const white     = '#c6c6c6';
// Variations of charcoal-grey
const grey0     = '#323437';
const grey1     = '#373c4d';
const grey254   = '#e4e4e4';
const grey249   = '#b2b2b2';
const grey247   = '#9e9e9e';
const grey246   = '#949494';
const grey244   = '#808080';
const grey241   = '#626262';
const grey239   = '#4e4e4e';
const grey238   = '#444444';
const grey237   = '#3a3a3a';
const grey236   = '#303030';
const grey235   = '#262626';
const grey234   = '#1c1c1c';
// const grey233   = '#121212';
// Core theme colors
const khaki     = '#c2c292';
const yellow    = '#e3c78a';
const orange    = '#de935f';
const coral     = '#f09479';
const orchid    = '#e196a2';
const lime      = '#85dc85';
const green     = '#8cc85f';
const emerald   = '#36c692';
const blue      = '#80a0ff';
const sky       = '#74b2ff';
const turquoise = '#79dac8';
const purple    = '#ae81ff';
const cranberry = '#e65e72';
const violet    = '#cf87e8';
const crimson   = '#ff5189';
const red       = '#ff5454';
// Extra colors
const spring    = '#00875f';
const mineral   = '#314940';
const bay       = '#4d5d8d';


const activeLine = grey237 + '50';
const selectionMatch = sky + '42';
const searchMatch = emerald + '62';
const searchMatchSelected = crimson + '62';


const moonflyTheme = EditorView.theme({
  '&': {
    backgroundColor: black,
    color: white,
  },

  '.cm-content': {
    caretColor: white,
  },
  '.cm-cursor, .cm-dropCursor': {
    borderLeftColor: white,
  },

  '.cm-content ::selection': {
    backgroundColor: grey0,
  },
  '&.cm-focused > .cm-scroller > .cm-selectionLayer .cm-selectionBackground, .cm-selectionBackground': {
    backgroundColor: grey0,
    '&:first-child': {
      borderTopLeftRadius: '2px',
      borderTopRightRadius: '2px',
    },
    '&:last-child': {
      borderBottomLeftRadius: '2px',
      borderBottomRightRadius: '2px',
    }
  },

  '.cm-activeLine': {
    backgroundColor: activeLine,
  },
  '.cm-gutters': {
    backgroundColor: black,
    borderRight: `1px solid ${grey237}`,
    color: grey247,
  },
  '.cm-activeLineGutter': {
    backgroundColor: activeLine,
    color: grey254
  },

  ".cm-selectionMatch": {
    backgroundColor: selectionMatch,
    padding: '1px 0',
  },

  ".cm-searchMatch": {
    backgroundColor: searchMatch,
    padding: '1px 0',
  },
  ".cm-searchMatch.cm-searchMatch-selected": {
    backgroundColor: searchMatchSelected,
    padding: '1px 0',
  },
}, {
  dark: true
});

const moonflyHighlightBase = HighlightStyle.define([
  {
    tag: t.comment,
    color: grey247,
    fontStyle: 'italic'
  }, {
    tag: [
      t.derefOperator,
      t.punctuation,
      t.variableName,
      t.literal,
      t.propertyName
    ],
    color: white
  }, {
    tag: [ t.null, t.operatorKeyword, t.className ],
    color: emerald
  }, {
    tag: [ t.tagName, t.namespace ],
    color: blue
  }, {
    tag: [ t.number, t.heading ],
    color: orange
  }, {
    tag: [ t.keyword ],
    color: green
  }, {
    tag: [
      t.literal,
      t.bool,
      t.moduleKeyword,
      t.constant,
      t.escape,
      t.heading1
    ],
    color: cranberry
  }, {
    tag: [ t.regexp, t.constant(t.variableName) ],
    color: purple
  }, {
    tag: t.string,
    color: khaki
  }, {
    tag: [
      t.name,
      t.attributeName,
      t.definition(t.attributeName)
    ],
    color: turquoise
  }, {
    tag: [ t.definitionKeyword, t.angleBracket ],
    color: lime
  }, {
    tag: [ t.invalid ],
    color: crimson
  }, {
    tag: [
      t.controlKeyword,
      t.operatorKeyword,
      t.operator
    ],
    color: violet
  }, {
    tag: [
      t.definition(t.propertyName),
      t.function(t.propertyName),
      t.function(t.variableName),
      t.function(t.definition(t.variableName)),
    ],
    color: sky
  }
], {
  themeType: 'dark'
});

// const moonflyHighlightCSS = HighlightStyle.define([
//   {
//     tag: t.definitionOperator,
//     color: turquoise
//   }
// ], {
//   scope: cssLanguage,
//   themeType: 'dark'
// });


export default [
  moonflyTheme,
  syntaxHighlighting(moonflyHighlightBase),
];
