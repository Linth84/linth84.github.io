import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dist = path.join(root, 'dist')
const baseFile = path.join(dist, 'index.html')
const baseHtml = fs.readFileSync(baseFile, 'utf8')

const site = 'https://edgardovillalba.is-a.dev'

const pages = [
  {
    route: '/projects/finsightai',
    title: 'FinSightAI | Edgardo Villalba',
    description: 'Case study of FinSightAI, a financial intelligence platform combining web development, data, machine learning and contextual AI.',
  },
  {
    route: '/projects/ds-time',
    title: 'DS-Time | Edgardo Villalba',
    description: 'Case study of DS-Time, a multilingual Discord timestamp generator designed to simplify scheduling across time zones.',
  },
  {
    route: '/projects/decision-dungeon',
    title: 'Decision Dungeon | Edgardo Villalba',
    description: 'Case study of Decision Dungeon, an interactive fantasy decision maker with a real animated 3D D20, bilingual UI, audio and Best of 3 mode.',
  },
  {
    route: '/projects/campaign-chronicles',
    title: 'Campaign Chronicles | Edgardo Villalba',
    description: 'Case study of Campaign Chronicles, a bilingual narrative workspace for organizing TTRPG campaigns, characters, NPCs, places, sessions, factions and relationships.',
  },
  {
    route: '/projects/pif-tracker',
    title: 'PIF Tracker | Edgardo Villalba',
    description: 'Case study of PIF Tracker, a Web and Android app for organizing daily FIP treatment tracking, weight, wellness and the 84 + 84 journey.',
  },
  {
    route: '/projects/soothewave',
    title: 'SootheWaveApp | Edgardo Villalba',
    description: 'Case study of SootheWaveApp, a mobile wellness experience focused on guided relaxation and a calm, low-friction interface.',
  },
]

function replaceMeta(html, attr, key, value) {
  const pattern = new RegExp(
    `<meta\\s+${attr}="${key}"\\s+content="[^"]*"\\s*\\/?>`,
    'i',
  )

  return html.replace(
    pattern,
    `<meta ${attr}="${key}" content="${value}" />`,
  )
}

function renderPage(page) {
  const canonical = `${site}${page.route}`
  let html = baseHtml

  html = html.replace(
    /<title>[^<]*<\/title>/i,
    `<title>${page.title}</title>`,
  )

  html = replaceMeta(html, 'name', 'description', page.description)
  html = replaceMeta(html, 'property', 'og:url', canonical)
  html = replaceMeta(html, 'property', 'og:title', page.title)
  html = replaceMeta(html, 'property', 'og:description', page.description)
  html = replaceMeta(html, 'name', 'twitter:title', page.title)
  html = replaceMeta(html, 'name', 'twitter:description', page.description)

  html = html.replace(
    /<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/i,
    `<link rel="canonical" href="${canonical}" />`,
  )

  const outputDir = path.join(dist, page.route.slice(1))
  fs.mkdirSync(outputDir, { recursive: true })
  fs.writeFileSync(path.join(outputDir, 'index.html'), html)
}

for (const page of pages) {
  renderPage(page)
}

console.log(
  `Generated ${pages.length} static route entry files for GitHub Pages SEO.`,
)
