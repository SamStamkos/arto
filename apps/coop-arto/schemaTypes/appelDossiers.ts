import {defineType, defineField} from 'sanity'

export const appelDossiersSchema = defineType({
  name: 'appelDossiers',
  title: 'Page Appel de dossiers',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la page',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description de la page',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'heroSection',
      title: 'Section héro',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Titre héro'},
        {name: 'subtitle', type: 'text', title: 'Sous-titre héro'},
        {name: 'image', type: 'image', title: 'Image héro', options: {hotspot: true}}
      ]
    }),
    defineField({
      name: 'currentCall',
      title: 'Appel en cours',
      type: 'object',
      fields: [
        {name: 'active', type: 'boolean', title: 'Appel actif', initialValue: false},
        {name: 'title', type: 'string', title: 'Titre de l\'appel'},
        {name: 'description', type: 'array', of: [{type: 'block'}], title: 'Description'},
        {name: 'deadline', type: 'datetime', title: 'Date limite'},
        {name: 'requirements', type: 'array', of: [{type: 'string'}], title: 'Critères requis'},
        {name: 'documents', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Titre du document'},
              {name: 'file', type: 'file', title: 'Fichier'}
            ]
          }
        ], title: 'Documents à télécharger'},
        {name: 'applicationForm', type: 'object', title: 'Formulaire de candidature', fields: [
          {name: 'enabled', type: 'boolean', title: 'Formulaire activé', initialValue: true},
          {name: 'submitText', type: 'string', title: 'Texte du bouton', initialValue: 'Postuler'},
          {name: 'submitUrl', type: 'url', title: 'URL de soumission'}
        ]}
      ]
    }),
    defineField({
      name: 'process',
      title: 'Processus de sélection',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Titre de la section'},
        {name: 'steps', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'step', type: 'number', title: 'Numéro de l\'étape'},
              {name: 'title', type: 'string', title: 'Titre de l\'étape'},
              {name: 'description', type: 'text', title: 'Description'},
              {name: 'duration', type: 'string', title: 'Durée estimée'}
            ]
          }
        ], title: 'Étapes du processus'}
      ]
    }),
    defineField({
      name: 'pastCalls',
      title: 'Appels passés',
      type: 'object',
      fields: [
        {name: 'showArchive', type: 'boolean', title: 'Afficher les appels passés', initialValue: true},
        {name: 'title', type: 'string', title: 'Titre de la section'},
        {name: 'calls', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Titre'},
              {name: 'year', type: 'string', title: 'Année'},
              {name: 'description', type: 'text', title: 'Description'},
              {name: 'winners', type: 'array', of: [{type: 'string'}], title: 'Lauréats'}
            ]
          }
        ], title: 'Historique des appels'}
      ]
    }),
    defineField({
      name: 'faq',
      title: 'Questions fréquentes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'question', type: 'string', title: 'Question'},
            {name: 'answer', type: 'array', of: [{type: 'block'}], title: 'Réponse'}
          ]
        }
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Titre de la section'},
        {name: 'description', type: 'text', title: 'Description'},
        {name: 'email', type: 'string', title: 'Email de contact'},
        {name: 'phone', type: 'string', title: 'Téléphone'}
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Titre meta'},
        {name: 'metaDescription', type: 'text', title: 'Description meta'},
        {name: 'keywords', type: 'array', of: [{type: 'string'}], title: 'Mots-clés'}
      ]
    })
  ]
})