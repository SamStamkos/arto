import {defineType, defineField} from 'sanity'

export const aboutSchema = defineType({
  name: 'about',
  title: 'About Page',
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
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Hero Title'},
        {name: 'subtitle', type: 'text', title: 'Hero Subtitle'},
        {name: 'image', type: 'image', title: 'Hero Image', options: {hotspot: true}}
      ]
    }),
    defineField({
      name: 'story',
      title: 'Our Story',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'content', type: 'array', of: [{type: 'block'}], title: 'Story Content'},
        {name: 'image', type: 'image', title: 'Story Image', options: {hotspot: true}}
      ]
    }),
    defineField({
      name: 'mission',
      title: 'Mission & Values',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'mission', type: 'text', title: 'Mission Statement', rows: 4},
        {name: 'values', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'title', type: 'string', title: 'Value Title'},
              {name: 'description', type: 'text', title: 'Description'},
              {name: 'icon', type: 'image', title: 'Icon'}
            ]
          }
        ], title: 'Values'}
      ]
    }),
    defineField({
      name: 'team',
      title: 'Team Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'description', type: 'text', title: 'Team Description'},
        {name: 'members', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'name', type: 'string', title: 'Name'},
              {name: 'role', type: 'string', title: 'Role'},
              {name: 'bio', type: 'text', title: 'Biography'},
              {name: 'image', type: 'image', title: 'Profile Image', options: {hotspot: true}},
              {name: 'socialLinks', type: 'object', title: 'Social Links', fields: [
                {name: 'linkedin', type: 'url', title: 'LinkedIn'},
                {name: 'twitter', type: 'url', title: 'Twitter'},
                {name: 'email', type: 'string', title: 'Email'}
              ]}
            ]
          }
        ], title: 'Team Members'}
      ]
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline/History',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'year', type: 'string', title: 'Year'},
            {name: 'title', type: 'string', title: 'Event Title'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}}
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