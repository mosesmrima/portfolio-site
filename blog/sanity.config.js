import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'

export default defineConfig({
  name: 'default',
  title: 'blog',

  projectId: '3zihx63r',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), codeInput({
    codeModes: [
      {
        name: 'angular',
        // dynamic import the angular package, and initialize the plugin after it is loaded
        // This way, the language is only when it is selected
        loader: () => import('@codemirror/lang-cpp').then(({cpp}) => cpp()),
      },
    ],
  })],

  schema: {
    types: schemaTypes,
  },
})
