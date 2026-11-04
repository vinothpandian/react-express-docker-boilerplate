import fs from 'fs'
import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'

import HelloWorld from '../client/components/helloWorld'

const app = express()

app.get('/', (req, res) => {
  // Loads a template.
  const pathToHtml = path.join(process.cwd(), 'dist/client/index.html')
  const template = fs.readFileSync(fs.existsSync(pathToHtml) ? pathToHtml : path.join(process.cwd(), 'src/server/views/index.html'), 'utf8')

  // Inserts a rendered react component to the loaded template (server-side rendering).
  const renderedHelloWorld = renderToString(<HelloWorld />)
  const page = template.replace('<!-- CONTENT -->', renderedHelloWorld)

  res.status(200).send(page)
})

app.use(express.static(path.join(process.cwd(), 'dist/client')))

// Opens a socket and listens for connections only if there is no parent module running the script.
if (require.main === module) {
  app.listen(8080, () => {
    console.log('Server started on port 8080...')
  })
}

export default app
