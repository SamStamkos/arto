import {defineType, defineField} from 'sanity'

export const programmationSchema = defineType({
  name: 'programmation',
  title: 'Programmation Page',
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
      name: 'currentSeason',
      title: 'Current Season',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Season Name'},
        {name: 'startDate', type: 'date', title: 'Start Date'},
        {name: 'endDate', type: 'date', title: 'End Date'},
        {name: 'description', type: 'text', title: 'Season Description'}
      ]
    }),
    defineField({
      name: 'events',
      title: 'Events',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Event Title', validation: (rule) => rule.required()},
            {name: 'description', type: 'text', title: 'Description', rows: 4},
            {name: 'date', type: 'datetime', title: 'Event Date & Time'},
            {name: 'endDate', type: 'datetime', title: 'End Date & Time'},
            {name: 'venue', type: 'object', title: 'Venue', fields: [
              {name: 'name', type: 'string', title: 'Venue Name'},
              {name: 'address', type: 'string', title: 'Address'},
              {name: 'city', type: 'string', title: 'City'},
              {name: 'capacity', type: 'number', title: 'Capacity'}
            ]},
            {name: 'artists', type: 'array', of: [{type: 'string'}], title: 'Featured Artists'},
            {name: 'category', type: 'string', title: 'Category', options: {
              list: [
                {title: 'Concert', value: 'concert'},
                {title: 'Festival', value: 'festival'},
                {title: 'Workshop', value: 'workshop'},
                {title: 'Exhibition', value: 'exhibition'},
                {title: 'Performance', value: 'performance'},
                {title: 'Conference', value: 'conference'}
              ]
            }},
            {name: 'image', type: 'image', title: 'Event Image', options: {hotspot: true}},
            {name: 'gallery', type: 'array', of: [{type: 'image', options: {hotspot: true}}], title: 'Image Gallery'},
            {name: 'ticketing', type: 'object', title: 'Ticketing', fields: [
              {name: 'price', type: 'number', title: 'Price'},
              {name: 'currency', type: 'string', title: 'Currency', initialValue: 'EUR'},
              {name: 'ticketUrl', type: 'url', title: 'Ticket URL'},
              {name: 'soldOut', type: 'boolean', title: 'Sold Out', initialValue: false},
              {name: 'freeEvent', type: 'boolean', title: 'Free Event', initialValue: false}
            ]},
            {name: 'status', type: 'string', title: 'Event Status', options: {
              list: [
                {title: 'Upcoming', value: 'upcoming'},
                {title: 'In Progress', value: 'in-progress'},
                {title: 'Completed', value: 'completed'},
                {title: 'Cancelled', value: 'cancelled'},
                {title: 'Postponed', value: 'postponed'}
              ]
            }, initialValue: 'upcoming'},
            {name: 'featured', type: 'boolean', title: 'Featured Event', initialValue: false}
          ]
        }
      ]
    }),
    defineField({
      name: 'pastEvents',
      title: 'Past Events Archive',
      type: 'object',
      fields: [
        {name: 'showArchive', type: 'boolean', title: 'Show Past Events', initialValue: true},
        {name: 'archiveTitle', type: 'string', title: 'Archive Section Title'},
        {name: 'archiveDescription', type: 'text', title: 'Archive Description'}
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