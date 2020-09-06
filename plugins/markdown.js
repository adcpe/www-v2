import HLJS from 'highlight.js'
import MarkdownIt from 'markdown-it'
import 'highlight.js/styles/atelier-sulphurpool-light.css'

const md = new MarkdownIt({
  html: true,
  typographer: true,
  linkify: true,
  highlight: (str, lang) => {
    if (lang && HLJS.getLanguage(lang)) {
      return (
        '<pre class="hljs"><code>' +
        HLJS.highlight(lang, str, true).value +
        '</code></pre>'
      )
    }

    return (
      '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>'
    )
  },
})

const renderMD = (block) => md.render(block)

export default renderMD
