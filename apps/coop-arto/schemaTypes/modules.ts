import {defineType, defineField} from 'sanity'

// Major Events Module
export const majorEventsModule = defineType({
  name: 'majorEventsModule',
  title: 'Module Événements majeurs',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'events',
      title: 'Événements mis en avant',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'evenement'}]
        }
      ],
      validation: (rule) => rule.max(6).warning('Il est recommandé de ne pas dépasser 6 événements')
    }),
    defineField({
      name: 'viewAllLink',
      title: 'Lien "Voir tout"',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton', initialValue: 'Voir tous les événements'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    })
  ]
})

// About Module
export const aboutModule = defineType({
  name: 'aboutModule',
  title: 'Module À propos',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true}
    }),
    defineField({
      name: 'ctaButton',
      title: 'Bouton d\'action',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    })
  ]
})

// Events Module
export const eventsModule = defineType({
  name: 'eventsModule',
  title: 'Module Événements',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'displayType',
      title: 'Type d\'affichage',
      type: 'string',
      options: {
        list: [
          {title: 'Liste', value: 'list'},
          {title: 'Grille', value: 'grid'},
          {title: 'Carrousel', value: 'carousel'}
        ]
      },
      initialValue: 'grid'
    }),
    defineField({
      name: 'eventSelection',
      title: 'Sélection d\'événements',
      type: 'string',
      options: {
        list: [
          {title: 'Événements mis en avant', value: 'featured'},
          {title: 'Événements récents', value: 'recent'},
          {title: 'Événements à venir', value: 'upcoming'},
          {title: 'Sélection manuelle', value: 'manual'}
        ]
      },
      initialValue: 'featured'
    }),
    defineField({
      name: 'manualEvents',
      title: 'Événements sélectionnés',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'evenement'}]
        }
      ],
      hidden: ({parent}) => parent?.eventSelection !== 'manual'
    }),
    defineField({
      name: 'maxItems',
      title: 'Nombre maximum d\'éléments',
      type: 'number',
      initialValue: 6,
      validation: (rule) => rule.min(1).max(12)
    })
  ]
})

// Become a Member Module
export const becomeMemberModule = defineType({
  name: 'becomeMemberModule',
  title: 'Module Devenir membre',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'benefits',
      title: 'Avantages',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Bouton d\'inscription',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton', initialValue: 'Devenir membre'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {hotspot: true}
    })
  ]
})

// Appel de Dossiers Module
export const appelDossiersModule = defineType({
  name: 'appelDossiersModule',
  title: 'Module Appel de dossiers',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'deadline',
      title: 'Date limite',
      type: 'datetime'
    }),
    defineField({
      name: 'requirements',
      title: 'Critères requis',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Bouton de candidature',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton', initialValue: 'Postuler'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    }),
    defineField({
      name: 'documents',
      title: 'Documents à télécharger',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'file', type: 'file', title: 'Fichier'}
          ]
        }
      ]
    })
  ]
})

// Artists Module
export const artistsModule = defineType({
  name: 'artistsModule',
  title: 'Module Artistes',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'displayType',
      title: 'Type d\'affichage',
      type: 'string',
      options: {
        list: [
          {title: 'Grille', value: 'grid'},
          {title: 'Carrousel', value: 'carousel'},
          {title: 'Liste', value: 'list'}
        ]
      },
      initialValue: 'grid'
    }),
    defineField({
      name: 'artistSelection',
      title: 'Sélection d\'artistes',
      type: 'string',
      options: {
        list: [
          {title: 'Artistes mis en avant', value: 'featured'},
          {title: 'Tous les artistes actifs', value: 'active'},
          {title: 'Sélection manuelle', value: 'manual'}
        ]
      },
      initialValue: 'featured'
    }),
    defineField({
      name: 'manualArtists',
      title: 'Artistes sélectionnés',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'artiste'}]
        }
      ],
      hidden: ({parent}) => parent?.artistSelection !== 'manual'
    }),
    defineField({
      name: 'maxItems',
      title: 'Nombre maximum d\'éléments',
      type: 'number',
      initialValue: 6,
      validation: (rule) => rule.min(1).max(12)
    }),
    defineField({
      name: 'viewAllLink',
      title: 'Lien "Voir tout"',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton', initialValue: 'Voir tous les artistes'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    })
  ]
})

// Services Module
export const servicesModule = defineType({
  name: 'servicesModule',
  title: 'Module Services',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre', validation: (rule) => rule.required()},
            {name: 'description', type: 'text', title: 'Description', rows: 3},
            {name: 'icon', type: 'image', title: 'Icône', options: {hotspot: true}},
            {name: 'link', type: 'string', title: 'Lien'}
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaButton',
      title: 'Bouton d\'action',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    })
  ]
})

// Newsletter Module
export const newsletterModule = defineType({
  name: 'newsletterModule',
  title: 'Module Newsletter',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    }),
    defineField({
      name: 'placeholder',
      title: 'Placeholder email',
      type: 'string',
      initialValue: 'Votre adresse email'
    }),
    defineField({
      name: 'buttonText',
      title: 'Texte du bouton',
      type: 'string',
      initialValue: 'S\'abonner'
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Couleur de fond',
      type: 'reference',
      to: [{type: 'couleurs'}]
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {hotspot: true}
    })
  ]
})

// Text Image Module
export const textImageModule = defineType({
  name: 'textImageModule',
  title: 'Module Texte + Image',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'content',
      title: 'Contenu',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {hotspot: true},
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'imagePosition',
      title: 'Position de l\'image',
      type: 'string',
      options: {
        list: [
          {title: 'À gauche', value: 'left'},
          {title: 'À droite', value: 'right'}
        ]
      },
      initialValue: 'right'
    }),
    defineField({
      name: 'ctaButton',
      title: 'Bouton d\'action',
      type: 'object',
      fields: [
        {name: 'text', type: 'string', title: 'Texte du bouton'},
        {name: 'url', type: 'string', title: 'URL'}
      ]
    })
  ]
})

// Gallery Module
export const galleryModule = defineType({
  name: 'galleryModule',
  title: 'Module Galerie',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la galerie',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}, validation: (rule) => rule.required()},
            {name: 'caption', type: 'string', title: 'Légende'},
            {name: 'alt', type: 'string', title: 'Texte alternatif'}
          ]
        }
      ],
      validation: (rule) => rule.min(1).error('Au moins une image est requise')
    }),
    defineField({
      name: 'layout',
      title: 'Disposition',
      type: 'string',
      options: {
        list: [
          {title: 'Grille', value: 'grid'},
          {title: 'Mosaïque', value: 'masonry'},
          {title: 'Carrousel', value: 'carousel'}
        ]
      },
      initialValue: 'grid'
    })
  ]
})

// Image Grid Module
export const imageGridModule = defineType({
  name: 'imageGridModule',
  title: 'Module Grille d\'images',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string'
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string'
    }),
    defineField({
      name: 'items',
      title: 'Éléments',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}, validation: (rule) => rule.required()},
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'subtitle', type: 'string', title: 'Sous-titre'},
            {name: 'description', type: 'text', title: 'Description', rows: 2},
            {name: 'link', type: 'string', title: 'Lien'}
          ]
        }
      ],
      validation: (rule) => rule.min(1).error('Au moins un élément est requis')
    }),
    defineField({
      name: 'columns',
      title: 'Nombre de colonnes',
      type: 'number',
      options: {
        list: [
          {title: '2 colonnes', value: 2},
          {title: '3 colonnes', value: 3},
          {title: '4 colonnes', value: 4}
        ]
      },
      initialValue: 3
    }),
    defineField({
      name: 'spacing',
      title: 'Espacement',
      type: 'string',
      options: {
        list: [
          {title: 'Compact', value: 'compact'},
          {title: 'Normal', value: 'normal'},
          {title: 'Large', value: 'large'}
        ]
      },
      initialValue: 'normal'
    })
  ]
})