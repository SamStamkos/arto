import {defineType, defineField} from 'sanity'

export const servicesSchema = defineType({
  name: 'services',
  title: 'Services Page',
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
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Service Title', validation: (rule) => rule.required()},
            {name: 'description', type: 'text', title: 'Description', rows: 4},
            {name: 'icon', type: 'image', title: 'Icon', options: {hotspot: true}},
            {name: 'features', type: 'array', of: [{type: 'string'}], title: 'Features'},
            {name: 'pricing', type: 'object', title: 'Pricing', fields: [
              {name: 'basePrice', type: 'number', title: 'Base Price'},
              {name: 'currency', type: 'string', title: 'Currency', initialValue: 'EUR'},
              {name: 'pricingModel', type: 'string', title: 'Pricing Model', options: {
                list: [
                  {title: 'Fixed', value: 'fixed'},
                  {title: 'Hourly', value: 'hourly'},
                  {title: 'Daily', value: 'daily'},
                  {title: 'Project', value: 'project'},
                  {title: 'Quote', value: 'quote'}
                ]
              }},
              {name: 'note', type: 'text', title: 'Pricing Note'}
            ]},
            {name: 'featured', type: 'boolean', title: 'Featured Service', initialValue: false}
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'CTA Title'},
        {name: 'description', type: 'text', title: 'CTA Description'},
        {name: 'buttonText', type: 'string', title: 'Button Text'},
        {name: 'buttonLink', type: 'string', title: 'Button Link'}
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