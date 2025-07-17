import {defineType, defineField} from 'sanity'

export const contactSchema = defineType({
  name: 'contact',
  title: 'Contact Page',
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
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {name: 'email', type: 'string', title: 'Email Address'},
        {name: 'phone', type: 'string', title: 'Phone Number'},
        {name: 'address', type: 'object', title: 'Address', fields: [
          {name: 'street', type: 'string', title: 'Street'},
          {name: 'city', type: 'string', title: 'City'},
          {name: 'postalCode', type: 'string', title: 'Postal Code'},
          {name: 'country', type: 'string', title: 'Country'}
        ]},
        {name: 'hours', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'day', type: 'string', title: 'Day'},
              {name: 'hours', type: 'string', title: 'Hours'},
              {name: 'closed', type: 'boolean', title: 'Closed', initialValue: false}
            ]
          }
        ], title: 'Opening Hours'}
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'},
        {name: 'youtube', type: 'url', title: 'YouTube'}
      ]
    }),
    defineField({
      name: 'mapSettings',
      title: 'Map Settings',
      type: 'object',
      fields: [
        {name: 'latitude', type: 'number', title: 'Latitude'},
        {name: 'longitude', type: 'number', title: 'Longitude'},
        {name: 'zoom', type: 'number', title: 'Zoom Level', initialValue: 15},
        {name: 'showMap', type: 'boolean', title: 'Show Map', initialValue: true}
      ]
    }),
    defineField({
      name: 'contactForm',
      title: 'Contact Form Settings',
      type: 'object',
      fields: [
        {name: 'title', type: 'string', title: 'Form Title'},
        {name: 'subtitle', type: 'text', title: 'Form Subtitle'},
        {name: 'submitButtonText', type: 'string', title: 'Submit Button Text', initialValue: 'Send Message'},
        {name: 'successMessage', type: 'text', title: 'Success Message'},
        {name: 'errorMessage', type: 'text', title: 'Error Message'}
      ]
    }),
    defineField({
      name: 'departments',
      title: 'Departments/Contacts',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Department Name'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'email', type: 'string', title: 'Email'},
            {name: 'phone', type: 'string', title: 'Phone'},
            {name: 'contactPerson', type: 'string', title: 'Contact Person'}
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