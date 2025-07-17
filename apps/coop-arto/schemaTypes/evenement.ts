import {defineType, defineField} from 'sanity'

export const evenementSchema = defineType({
  name: 'evenement',
  title: 'Événement',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'longDescription',
      title: 'Description longue',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'date',
      title: 'Date et heure',
      type: 'datetime',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'endDate',
      title: 'Date de fin',
      type: 'datetime'
    }),
    defineField({
      name: 'venue',
      title: 'Lieu',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Nom du lieu'},
        {name: 'address', type: 'string', title: 'Adresse'},
        {name: 'city', type: 'string', title: 'Ville'},
        {name: 'postalCode', type: 'string', title: 'Code postal'},
        {name: 'capacity', type: 'number', title: 'Capacité'},
        {name: 'website', type: 'url', title: 'Site web du lieu'}
      ]
    }),
    defineField({
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          {title: 'Concert', value: 'concert'},
          {title: 'Festival', value: 'festival'},
          {title: 'Atelier', value: 'atelier'},
          {title: 'Exposition', value: 'exposition'},
          {title: 'Performance', value: 'performance'},
          {title: 'Conférence', value: 'conference'},
          {title: 'Masterclass', value: 'masterclass'},
          {title: 'Spectacle', value: 'spectacle'}
        ]
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: 'gallery',
      title: 'Galerie',
      type: 'array',
      of: [{
        type: 'image',
        options: {hotspot: true}
      }]
    }),
    defineField({
      name: 'artists',
      title: 'Artistes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'artiste'}]
        }
      ]
    }),
    defineField({
      name: 'ticketing',
      title: 'Billetterie',
      type: 'object',
      fields: [
        {name: 'price', type: 'number', title: 'Prix'},
        {name: 'currency', type: 'string', title: 'Devise', initialValue: 'EUR'},
        {name: 'ticketUrl', type: 'url', title: 'URL de réservation'},
        {name: 'soldOut', type: 'boolean', title: 'Complet', initialValue: false},
        {name: 'freeEvent', type: 'boolean', title: 'Événement gratuit', initialValue: false},
        {name: 'presaleDate', type: 'datetime', title: 'Date de prévente'},
        {name: 'salesEndDate', type: 'datetime', title: 'Fin de vente'}
      ]
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'À venir', value: 'upcoming'},
          {title: 'En cours', value: 'in-progress'},
          {title: 'Terminé', value: 'completed'},
          {title: 'Annulé', value: 'cancelled'},
          {title: 'Reporté', value: 'postponed'}
        ]
      },
      initialValue: 'upcoming'
    }),
    defineField({
      name: 'featured',
      title: 'Événement mis en avant',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'organizer',
      title: 'Organisateur',
      type: 'object',
      fields: [
        {name: 'name', type: 'string', title: 'Nom'},
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'phone', type: 'string', title: 'Téléphone'},
        {name: 'website', type: 'url', title: 'Site web'}
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
  ],
  preview: {
    select: {
      title: 'title',
      date: 'date',
      image: 'image',
      venue: 'venue.name'
    },
    prepare(selection) {
      const {title, date, image, venue} = selection
      return {
        title: title,
        subtitle: `${new Date(date).toLocaleDateString('fr-FR')} - ${venue || 'Lieu à définir'}`,
        media: image
      }
    }
  }
})