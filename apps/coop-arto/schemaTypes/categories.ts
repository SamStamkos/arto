import {defineType, defineField} from 'sanity'

export const categoriesSchema = defineType({
  name: 'categories',
  title: 'Catégories',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'color',
      title: 'Couleur',
      type: 'reference',
      to: [{type: 'couleurs'}]
    }),
    defineField({
      name: 'icon',
      title: 'Icône',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'type',
      title: 'Type de catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Événement', value: 'evenement'},
          {title: 'Artiste', value: 'artiste'},
          {title: 'Service', value: 'service'},
          {title: 'Général', value: 'general'}
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'parentCategory',
      title: 'Catégorie parent',
      type: 'reference',
      to: [{type: 'categories'}]
    }),
    defineField({
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      validation: (rule) => rule.min(0)
    }),
    defineField({
      name: 'featured',
      title: 'Catégorie mise en avant',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'metadata',
      title: 'Métadonnées',
      type: 'object',
      fields: [
        {name: 'keywords', type: 'array', of: [{type: 'string'}], title: 'Mots-clés'},
        {name: 'metaDescription', type: 'text', title: 'Description meta'},
        {name: 'customFields', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'key', type: 'string', title: 'Clé'},
              {name: 'value', type: 'string', title: 'Valeur'}
            ]
          }
        ], title: 'Champs personnalisés'}
      ]
    })
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'icon',
      type: 'type'
    },
    prepare(selection) {
      const {title, subtitle, media, type} = selection
      return {
        title: title,
        subtitle: `${type || 'Général'} - ${subtitle || ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Nom',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Type',
      name: 'typeAsc',
      by: [
        {field: 'type', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    }
  ]
})