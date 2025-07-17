import {defineType, defineField} from 'sanity'

export const homeSchema = defineType({
  name: 'home',
  title: 'Home Page',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'featuredSection',
      title: 'Featured Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4
        },
        {
          name: 'items',
          title: 'Featured Items',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'Title'},
                {name: 'description', type: 'text', title: 'Description'},
                {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
                {name: 'link', type: 'string', title: 'Link'}
              ]
            }
          ]
        }
      ]
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        {name: 'metaTitle', type: 'string', title: 'Meta Title'},
        {name: 'metaDescription', type: 'text', title: 'Meta Description'},
        {name: 'keywords', type: 'array', of: [{type: 'string'}], title: 'Keywords'}
      ]
    })
  ]
})