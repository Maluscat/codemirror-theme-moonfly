import { HighlightStyle, syntaxHighlighting } from '@codemirror/language';
import { cssLanguage } from '@codemirror/lang-css';
import { EditorView } from '@codemirror/view';
import { tags as t } from '@lezer/highlight';


// Background and foreground
export const black     = '#080808';
export const white     = '#c6c6c6';
// Variations of charcoal-grey
export const grey0     = '#323437';
export const grey1     = '#373c4d';
export const grey254   = '#e4e4e4';
export const grey249   = '#b2b2b2';
export const grey247   = '#9e9e9e';
export const grey246   = '#949494';
export const grey244   = '#808080';
export const grey241   = '#626262';
export const grey239   = '#4e4e4e';
export const grey238   = '#444444';
export const grey237   = '#3a3a3a';
export const grey236   = '#2e2e2e';
export const grey235   = '#262626';
export const grey234   = '#1c1c1c';
// const grey233   = '#121212';
// Core theme colors
export const khaki     = '#c6c684';
export const yellow    = '#e3c78a';
export const orange    = '#de935f';
export const coral     = '#f09479';
export const orchid    = '#e196a2';
export const lime      = '#85dc85';
export const green     = '#8cc85f';
export const emerald   = '#36c692';
export const blue      = '#80a0ff';
export const sky       = '#74b2ff';
export const turquoise = '#79dac8';
export const lavender  = '#adadf3';
export const purple    = '#ae81ff';
export const cranberry = '#e65e72';
export const violet    = '#cf87e8';
export const crimson   = '#ff5189';
export const red       = '#ff5454';
// Extra colors
export const spring    = '#00875f';
export const mineral   = '#314940';
export const bay       = '#4d5d8d';


const activeLine = grey237 + '50';
const selectionMatch = sky + '42';
const searchMatch = emerald + '62';
const searchMatchSelected = crimson + '62';


export const moonflyTheme = EditorView.theme({
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

  '.cm-foldPlaceholder': {
    backgroundColor: grey236,
    borderColor: grey254,
    padding: '0 .15em',
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

export const moonflyHighlightBase = HighlightStyle.define([
  {
    tag: t.comment,
    color: grey247,
    fontStyle: 'italic'
  }, {
    tag: [
      t.derefOperator,
      t.punctuation,
      t.variableName,
      t.propertyName,
    ],
    color: white
  }, {
    tag: [
      t.null,
      t.className,
      t.function(t.punctuation), // Arrow function
      t.typeName,
      t.modifier,
    ],
    color: emerald
  }, {
    tag: [ t.tagName, t.namespace ],
    color: blue
  }, {
    tag: [
      t.number,
      t.heading,
      t.character,
      t.color
    ],
    color: orange
  }, {
    tag: [ t.self ],
    color: green
  }, {
    tag: [
      t.literal,
      t.bool,
      t.keyword,
      t.moduleKeyword,
      t.constant,
      t.escape,
      t.heading1,
    ],
    color: cranberry
  }, {
    tag: [ t.regexp, t.constant(t.variableName) ],
    color: purple
  }, {
    tag: [ t.string, t.unit ],
    color: khaki
  }, {
    tag: [
      t.attributeName,
      t.definition(t.attributeName),
      t.definition(t.typeName)
    ],
    color: turquoise
  }, {
    tag: [ t.angleBracket ],
    color: lime
  }, {
    tag: [ t.invalid ],
    color: crimson
  }, {
    tag: [
      t.definitionKeyword,
      t.controlKeyword,
      t.operatorKeyword,
      t.operator
    ],
    color: violet
  }, {
    tag: [
      t.definitionOperator,
      t.function(t.propertyName),
      t.function(t.variableName),
      t.function(t.definition(t.variableName)),
    ],
    color: sky
  }, {
    tag: [
      t.definition(t.propertyName),
    ],
    color: lavender
  }
], {
  themeType: 'dark'
});

export const moonflyHighlightCSS = HighlightStyle.define([
  {
    tag: [
      t.definitionKeyword,
      t.squareBracket,
      t.constant(t.className),
      t.modifier,
    ],
    color: cranberry
  }, {
    tag: [ t.labelName ],
    color: white
  }, {
    tag: [ t.keyword ],
    color: green
  }, {
    tag: [ t.unit, t.attributeName ],
    color: khaki
  }, {
    tag: [ t.propertyName ],
    color: lavender
  }, {
    tag: [ t.operatorKeyword ],
    color: sky
  }, {
    tag: [ t.variableName ],
    color: orange
  }
], {
  scope: cssLanguage,
  themeType: 'dark'
});


export const moonfly = [
  moonflyTheme,
  syntaxHighlighting(moonflyHighlightCSS),
  syntaxHighlighting(moonflyHighlightBase),
];
