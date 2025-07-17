import {defineType, defineField} from 'sanity'

export const membresSchema = defineType({
  name: 'membres',
  title: 'Membres Page',
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
      name: 'membershipInfo',
      title: 'Membership Information',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'description', type: 'array', of: [{type: 'block'}], title: 'Membership Description'},
        {name: 'benefits', type: 'array', of: [{type: 'string'}], title: 'Membership Benefits'}
      ]
    }),
    defineField({
      name: 'membershipTypes',
      title: 'Membership Types',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Membership Name', validation: (rule) => rule.required()},
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {name: 'price', type: 'number', title: 'Annual Price'},
            {name: 'currency', type: 'string', title: 'Currency', initialValue: 'EUR'},
            {name: 'benefits', type: 'array', of: [{type: 'string'}], title: 'Specific Benefits'},
            {name: 'color', type: 'string', title: 'Color Code'},
            {name: 'featured', type: 'boolean', title: 'Featured Plan', initialValue: false}
          ]
        }
      ]
    }),
    defineField({
      name: 'currentMembers',
      title: 'Current Members',
      type: 'object',
      fields: [
        {name: 'showMembers', type: 'boolean', title: 'Show Members Section', initialValue: true},
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'description', type: 'text', title: 'Section Description'},
        {name: 'members', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'name', type: 'string', title: 'Member Name'},
              {name: 'title', type: 'string', title: 'Title/Role'},
              {name: 'bio', type: 'text', title: 'Biography'},
              {name: 'image', type: 'image', title: 'Profile Image', options: {hotspot: true}},
              {name: 'membershipType', type: 'string', title: 'Membership Type'},
              {name: 'joinDate', type: 'date', title: 'Join Date'},
              {name: 'website', type: 'url', title: 'Website'},
              {name: 'socialLinks', type: 'object', title: 'Social Links', fields: [
                {name: 'linkedin', type: 'url', title: 'LinkedIn'},
                {name: 'twitter', type: 'url', title: 'Twitter'},
                {name: 'instagram', type: 'url', title: 'Instagram'},
                {name: 'facebook', type: 'url', title: 'Facebook'}
              ]},
              {name: 'featured', type: 'boolean', title: 'Featured Member', initialValue: false}
            ]
          }
        ], title: 'Members List'}
      ]
    }),
    defineField({
      name: 'joinProcess',
      title: 'How to Join',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Section Title'},
        {name: 'description', type: 'text', title: 'Description'},
        {name: 'steps', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'step', type: 'number', title: 'Step Number'},
              {name: 'title', type: 'string', title: 'Step Title'},
              {name: 'description', type: 'text', title: 'Step Description'},
              {name: 'icon', type: 'image', title: 'Step Icon'}
            ]
          }
        ], title: 'Join Steps'},
        {name: 'ctaButton', type: 'object', title: 'Call to Action', fields: [
          {name: 'text', type: 'string', title: 'Button Text'},
          {name: 'link', type: 'string', title: 'Button Link'}
        ]}
      ]
    }),
    defineField({
      name: 'testimonials',
      title: 'Member Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'quote', type: 'text', title: 'Testimonial Quote', rows: 4},
            {name: 'author', type: 'string', title: 'Author Name'},
            {name: 'role', type: 'string', title: 'Author Role'},
            {name: 'image', type: 'image', title: 'Author Image', options: {hotspot: true}},
            {name: 'featured', type: 'boolean', title: 'Featured Testimonial', initialValue: false}
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