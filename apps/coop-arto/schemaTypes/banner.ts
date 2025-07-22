import {defineType, defineField} from 'sanity'

export const bannerSchema = defineType({
  name: 'banner',
  title: 'Bannière d\'information',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'enabled',
      title: 'Bannière activée',
      type: 'boolean',
      description: 'Afficher la bannière sur le site',
      initialValue: false
    }),
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre de la bannière'
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      description: 'Message affiché dans la bannière',
      rows: 2
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Couleur de fond',
      type: 'reference',
      to: [{type: 'couleurs'}],
      description: 'Couleur de fond de la bannière'
    })
  ]
})