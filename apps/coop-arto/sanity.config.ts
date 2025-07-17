import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const singletonTypes = new Set(['home', 'artistes', 'services', 'about', 'contact', 'programmation', 'membres'])

export default defineConfig({
  name: 'default',
  title: 'Coop Arto',

  projectId: 'ffgvn1lx',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenu')
          .items([
            S.listItem()
              .title('Page d\'Accueil')
              .id('home')
              .child(S.document().schemaType('home').documentId('home')),
            S.listItem()
              .title('Page Artistes')
              .id('artistes')
              .child(S.document().schemaType('artistes').documentId('artistes')),
            S.listItem()
              .title('Page Services')
              .id('services')
              .child(S.document().schemaType('services').documentId('services')),
            S.listItem()
              .title('Page À Propos')
              .id('about')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('Page Contact')
              .id('contact')
              .child(S.document().schemaType('contact').documentId('contact')),
            S.listItem()
              .title('Page Programmation')
              .id('programmation')
              .child(S.document().schemaType('programmation').documentId('programmation')),
            S.listItem()
              .title('Page Membres')
              .id('membres')
              .child(S.document().schemaType('membres').documentId('membres')),
            S.divider(),
            S.listItem()
              .title('Événements')
              .id('evenements')
              .child(S.documentTypeList('evenement').title('Événements')),
            S.listItem()
              .title('Artistes')
              .id('artistes-collection')
              .child(S.documentTypeList('artiste').title('Artistes')),
            S.divider(),
            S.listItem()
              .title('Catégories')
              .id('categories')
              .child(S.documentTypeList('categories').title('Catégories')),
            S.listItem()
              .title('Couleurs')
              .id('couleurs')
              .child(S.documentTypeList('couleurs').title('Couleurs')),
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId()) && !['evenement', 'artiste', 'categories', 'couleurs'].includes(listItem.getId())
            ),
          ])
    }),
    visionTool()
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonTypes.has(schemaType))
  },
})
