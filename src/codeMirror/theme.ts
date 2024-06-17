import { EditorView } from "@codemirror/view"

export const enum Info { Margin = 30, Width = 160 }

export const myTheme = EditorView.theme({
  ".cm-scroller": {
    fontFamily: "inherit"
  },
  ".cm-tooltip": {
    background: '#fff',
    boxShadow: 'rgba(0, 0, 0, 0.09) 0px 2px 9px 2px, rgba(0, 0, 0, 0.16) 0px 1px 2px -2px',
    border: 'none',
  },
  ".cm-tooltip.cm-tooltip-autocomplete": {
    fontFamily: "inherit",
    "& > ul": {
      fontSize: "12px",
      fontFamily: "inherit",
      whiteSpace: "wrap",
      overflow: "hidden auto",
      width: '160px',
      minWidth: '160px',
      maxHeight: "260px",
      height: "100%",
      listStyle: "none",
      margin: 0,
      padding: '4px 0',
      "&::-webkit-scrollbar-thumb": {
        boxShadow: 'none',
        backgroundClip: 'padding-box',
        backgroundColor: '#cfcfcf',
        border: '1px solid transparent',
        borderRadius: '12px',
      },
      "&::-webkit-scrollbar-track": {
        boxShadow: 'none',
        borderRadius: '10px',
        background: 'rgb(255, 255, 255)'
      },
      "&::-webkit-scrollbar": {
        height: '12px',
        width: '7px'
      },
      "& > li, & > completion-section": {
        padding: "1px 3px",
        lineHeight: 1.2
      },
      "& > li": {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        cursor: "pointer",
        padding: '4px 0',
        display: 'flex',
        "& .cm-completionMatchedText": {
          textDecoration: 'none'
        },
      },
      "& > completion-section": {
        display: "list-item",
        borderBottom: "1px solid silver",
        paddingLeft: "0.5em",
      },
    }
  },

  "& .cm-tooltip-autocomplete ul li[aria-selected]": {
    background: "rgb(245, 250, 255)",
    color: "rgb(1, 113, 246)",
  },

  "& .cm-tooltip-autocomplete-disabled ul li[aria-selected]": {
    background: "rgb(245, 250, 255)",
  },

  ".cm-completionListIncompleteTop:before, .cm-completionListIncompleteBottom:after": {
    content: '"···"',
    opacity: 0.5,
    display: "block",
    textAlign: "center"
  },

  ".cm-tooltip.cm-completionInfo": {
    position: "absolute",
    padding: "3px 9px",
    width: "max-content",
    maxWidth: `${Info.Width}px`,
    boxSizing: "border-box"
  },

  ".cm-completionInfo.cm-completionInfo-left": { right: "100%" },
  ".cm-completionInfo.cm-completionInfo-right": { left: "100%" },
  // ".cm-completionInfo.cm-completionInfo-left-narrow": { right: `${Info.Margin}px` },
  // ".cm-completionInfo.cm-completionInfo-right-narrow": { left: `${Info.Margin}px` },

  "& .cm-snippetField": { backgroundColor: "#00000022" },

  ".cm-snippetFieldPosition": {
    verticalAlign: "text-top",
    width: 0,
    height: "1.15em",
    display: "inline-block",
    // margin: "0 -0.7px -.7em",
    borderLeft: "1.4px dotted #888"
  },

  ".cm-completionMatchedText": {
    textDecoration: "underline",
  },

  ".cm-completionDetail": {
    // marginLeft: "0.5em",
  },

  ".cm-completionIcon": {
    fontSize: "12px",
    color: 'rgb(67, 67, 67)',
    display: "inline-block",
    textAlign: "center",
    width: '32px',
    boxSizing: "content-box",
    paddingRight: '0',
    flexShrink: '0'
  },
  // ".cm-completionLabel": {
  //   maxWidth: '128px'
  // },
  ".cm-completionIcon-function, .cm-completionIcon-method": {
    "&:after": { content: "'fx'" }
  },
  ".cm-completionIcon-class": {
    "&:after": { content: "'○'" }
  },
  ".cm-completionIcon-indicator": {
    "&:after": { content: "'#'" }
  },
  ".cm-completionIcon-interface": {
    "&:after": { content: "'◌'" }
  },
  ".cm-completionIcon-variable": {
    "&:after": { content: "'𝑥'" }
  },
  ".cm-completionIcon-constant": {
    "&:after": { content: "'𝐶'" }
  },
  ".cm-completionIcon-type": {
    "&:after": { content: "'𝑡'" }
  },
  ".cm-completionIcon-enum": {
    "&:after": { content: "'∪'" }
  },
  ".cm-completionIcon-property": {
    "&:after": { content: "'□'" }
  },
  ".cm-completionIcon-keyword": {
    "&:after": { content: "'🔑\uFE0E'" } // Disable emoji rendering
  },
  ".cm-completionIcon-namespace": {
    "&:after": { content: "'▢'" }
  },
  ".cm-completionIcon-text": {
    "&:after": { content: "'abc'", fontSize: "50%", verticalAlign: "middle" }
  }
}, { dark: false })