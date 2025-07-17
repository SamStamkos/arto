import {defineType, defineField} from 'sanity'

export const artistesSchema = defineType({
  name: 'artistes',
  title: 'Artistes Page',
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
      name: 'description',
      title: 'Page Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'featuredArtistes',
      title: 'Featured Artistes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Artist Name', validation: (rule) => rule.required()},
            {name: 'bio', type: 'text', title: 'Biography', rows: 4},
            {name: 'image', type: 'image', title: 'Profile Image', options: {hotspot: true}},
            {name: 'genre', type: 'string', title: 'Genre/Style'},
            {name: 'website', type: 'url', title: 'Website'},
            {name: 'socialLinks', type: 'object', title: 'Social Links', fields: [
              {name: 'instagram', type: 'url', title: 'Instagram'},
              {name: 'facebook', type: 'url', title: 'Facebook'},
              {name: 'twitter', type: 'url', title: 'Twitter'},
              {name: 'youtube', type: 'url', title: 'YouTube'},
              {name: 'spotify', type: 'url', title: 'Spotify'},
              {name: 'soundcloud', type: 'url', title: 'SoundCloud'}
            ]},
            {name: 'featured', type: 'boolean', title: 'Featured Artist', initialValue: false}
          ]
        }
      ]
    }),
    defineField({
      name: 'categories',
      title: 'Artist Categories',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Category Name'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'color', type: 'string', title: 'Color Code'}
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