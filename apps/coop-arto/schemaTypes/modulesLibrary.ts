import {defineType, defineField} from 'sanity'

export const modulesLibrarySchema = defineType({
  name: 'modulesLibrary',
  title: 'Bibliothèque de modules',
  type: 'document',
  fields: [
    defineField({
      name: 'moduleType',
      title: 'Type de module',
      type: 'string',
      options: {
        list: [
          {title: 'Événements majeurs', value: 'majorEvents'},
          {title: 'À propos', value: 'about'},
          {title: 'Événements', value: 'events'},
          {title: 'Devenir membre', value: 'becomeMember'},
          {title: 'Appel de dossiers', value: 'appelDossiers'},
          {title: 'Artistes', value: 'artists'},
          {title: 'Services', value: 'services'},
          {title: 'Newsletter', value: 'newsletter'},
          {title: 'Texte + Image', value: 'textImage'},
          {title: 'Galerie', value: 'gallery'},
          {title: 'Carrousel', value: 'carousel'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: "Nom de l'instance",
      type: 'string',
      description:
        'Nom unique pour identifier cette instance (ex: "Devenir membre - Accueil", "Événements - Sidebar")',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description de cette instance et où elle sera utilisée',
      rows: 2,
    }),

    // Major Events Module
    defineField({
      name: 'majorEventsConfig',
      title: 'Configuration - Événements majeurs',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'majorEvents',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as any)?.moduleType === 'majorEvents') {
            if (!value?.title) return 'Le titre est requis'
            if (!Array.isArray(value?.events) || value.events.length === 0)
              return 'Au moins un événement est requis'
          }
          return true
        }),
      fields: [
        {
          name: 'title',
          title: 'Titre de la section',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Sous-titre',
          type: 'text',
          rows: 2,
        },
        {
          name: 'events',
          title: 'Événements',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'evenement'}]}],
          validation: (rule) => rule.min(1).error('Au moins un événement est requis'),
        },
      ],
    }),

    // // About Module
    defineField({
      name: 'aboutConfig',
      title: 'Configuration - À propos',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'about',
      fields: [
        {name: 'title', title: 'Titre', type: 'string', validation: (rule) => rule.required()},
        {name: 'content', title: 'Contenu', type: 'array', of: [{type: 'block'}]},
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
        {
          name: 'ctaButton',
          title: "Bouton d'action",
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Texte du bouton'},
            {
              name: 'page',
              type: 'reference',
              title: 'Page de destination',
              to: [
                {type: 'home'},
                {type: 'artistes'},
                {type: 'services'},
                {type: 'about'},
                {type: 'contact'},
                {type: 'programmation'},
                {type: 'membres'},
                {type: 'appelDossiers'},
              ],
            },
          ],
        },
      ],
    }),

    // // Events Module
    defineField({
      name: 'eventsConfig',
      title: 'Configuration - Événements',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'events',
      fields: [
        {
          name: 'title',
          title: 'Titre de la section',
          type: 'string',
        },
        {name: 'subtitle', title: 'Sous-titre', type: 'text', rows: 2},
        {
          name: 'events',
          title: 'Événements',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'evenement'}]}],
        },
      ],
    }),

    // // Become Member Module
    defineField({
      name: 'becomeMemberConfig',
      title: 'Configuration - Devenir membre',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'becomeMember',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'array',
          of: [{type: 'block'}],
          validation: (rule) => rule.required(),
        },
        {name: 'benefits', title: 'Avantages', type: 'array', of: [{type: 'string'}]},
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
        {
          name: 'ctaButton',
          title: "Bouton d'action",
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Texte du bouton'},
            {
              name: 'page',
              type: 'reference',
              title: 'Page de destination',
              to: [
                {type: 'home'},
                {type: 'artistes'},
                {type: 'services'},
                {type: 'about'},
                {type: 'contact'},
                {type: 'programmation'},
                {type: 'membres'},
                {type: 'appelDossiers'},
              ],
            },
          ],
        },
      ],
    }),

    // // Appel Dossiers Module
    defineField({
      name: 'appelDossiersConfig',
      title: 'Configuration - Appel de dossiers',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'appelDossiers',
      fields: [
        {name: 'title', title: 'Titre', type: 'string', validation: (rule) => rule.required()},
        {name: 'description', title: 'Description', type: 'array', of: [{type: 'block'}]},
        {name: 'image', title: 'Image', type: 'image', options: {hotspot: true}},
        {
          name: 'ctaButton',
          title: "Bouton d'action",
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Texte du bouton'},
            {
              name: 'page',
              type: 'reference',
              title: 'Page de destination',
              to: [
                {type: 'home'},
                {type: 'artistes'},
                {type: 'services'},
                {type: 'about'},
                {type: 'contact'},
                {type: 'programmation'},
                {type: 'membres'},
                {type: 'appelDossiers'},
              ],
            },
          ],
        },
      ],
    }),

    // // Artists Module
    defineField({
      name: 'artistsConfig',
      title: 'Configuration - Artistes',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'artists',
      fields: [
        {
          name: 'title',
          title: 'Titre de la section',
          type: 'string',
          validation: (rule) => rule.required(),
        },
        {name: 'subtitle', title: 'Sous-titre', type: 'text', rows: 2},
        {
          name: 'artists',
          title: 'Artistes (4)',
          type: 'array',
          of: [{type: 'reference', to: [{type: 'artiste'}]}],
          validation: (rule) =>
            rule.required().min(1).max(4).error('Au moins 1 et au plus 4 artistes requis'),
        },
        {
          name: 'viewAllLink',
          title: 'Lien "Voir tout"',
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Texte du bouton'},
            {
              name: 'page',
              type: 'reference',
              title: 'Page Artistes',
              to: [{type: 'artistes'}],
            },
          ],
        },
      ],
    }),

    // // Services Module
    defineField({
      name: 'servicesConfig',
      title: 'Configuration - Services',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'services',
      fields: [
        {
          name: 'services',
          title: 'Services (2)',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  type: 'string',
                  title: 'Titre',
                  validation: (rule) => rule.required(),
                },
                {
                  name: 'text',
                  title: 'Texte',
                  type: 'array',
                  of: [{type: 'block'}],
                },
                {
                  name: 'icon',
                  title: 'Icône',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Calendrier', value: 'calendar'},
                      {title: 'Utilisateur', value: 'user'},
                      {title: 'Étoile', value: 'star'},
                      {title: 'Cœur', value: 'heart'},
                      {title: 'Maison', value: 'home'},
                      {title: 'Enveloppe', value: 'envelope'},
                      {title: 'Téléphone', value: 'phone'},
                      {title: 'Localisation', value: 'location'},
                      {title: 'Galerie', value: 'gallery'},
                      {title: 'Pinceau', value: 'paintbrush'},
                      {title: 'Palette', value: 'palette'},
                      {title: 'Caméra', value: 'camera'},
                      {title: 'Musique', value: 'music'},
                      {title: 'Film', value: 'film'},
                      {title: 'Livre', value: 'book'},
                      {title: 'Ordinateur', value: 'computer'},
                      {title: 'Globe', value: 'globe'},
                      {title: 'Partage', value: 'share'},
                      {title: 'Télécharger', value: 'download'},
                      {title: 'Imprimer', value: 'print'},
                    ],
                  },
                },
                {
                  name: 'ctaButton',
                  title: "Bouton d'action",
                  type: 'object',
                  fields: [
                    {name: 'text', type: 'string', title: 'Texte du bouton'},
                    {
                      name: 'page',
                      type: 'reference',
                      title: 'Page de destination',
                      to: [
                        {type: 'home'},
                        {type: 'artistes'},
                        {type: 'services'},
                        {type: 'about'},
                        {type: 'contact'},
                        {type: 'programmation'},
                        {type: 'membres'},
                        {type: 'appelDossiers'},
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          validation: (rule) => rule.min(1).max(2).error('Exactement 2 services requis'),
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),

    // // Newsletter Module
    defineField({
      name: 'newsletterConfig',
      title: 'Configuration - Newsletter',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'newsletter',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as any)?.moduleType === 'newsletter') {
            if (!value?.title) return 'Le titre est requis'
          }
          return true
        }),
      fields: [
        {name: 'title', title: 'Titre', type: 'string'},
        {name: 'description', title: 'Description', type: 'text', rows: 5},
        {
          name: 'placeholder',
          title: 'Placeholder email',
          type: 'string',
          initialValue: 'Votre adresse email',
        },
        {name: 'buttonText', title: 'Texte du bouton', type: 'string', initialValue: "S'abonner"},
      ],
    }),

    // // Text Image Module
    defineField({
      name: 'textImageConfig',
      title: 'Configuration - Texte + Image',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'textImage',
      validation: (rule) =>
        rule.custom((value, context) => {
          if ((context.parent as any)?.moduleType === 'textImage') {
            if (!value?.image) return "L'image est requise"
          }
          return true
        }),
      fields: [
        {name: 'title', title: 'Titre', type: 'string'},
        {name: 'content', title: 'Contenu', type: 'array', of: [{type: 'block'}]},
        {
          name: 'icon',
          title: 'Icône',
          type: 'string',
          options: {
            list: [
              {title: 'Calendrier', value: 'calendar'},
              {title: 'Utilisateur', value: 'user'},
              {title: 'Étoile', value: 'star'},
              {title: 'Cœur', value: 'heart'},
              {title: 'Maison', value: 'home'},
              {title: 'Enveloppe', value: 'envelope'},
              {title: 'Téléphone', value: 'phone'},
              {title: 'Localisation', value: 'location'},
              {title: 'Galerie', value: 'gallery'},
              {title: 'Pinceau', value: 'paintbrush'},
              {title: 'Palette', value: 'palette'},
              {title: 'Caméra', value: 'camera'},
              {title: 'Musique', value: 'music'},
              {title: 'Film', value: 'film'},
              {title: 'Livre', value: 'book'},
              {title: 'Ordinateur', value: 'computer'},
              {title: 'Globe', value: 'globe'},
              {title: 'Partage', value: 'share'},
              {title: 'Télécharger', value: 'download'},
              {title: 'Imprimer', value: 'print'},
            ],
          },
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {hotspot: true},
        },
        {
          name: 'imagePosition',
          title: "Position de l'image",
          type: 'string',
          options: {
            list: [
              {title: 'À gauche', value: 'left'},
              {title: 'À droite', value: 'right'},
            ],
          },
          initialValue: 'right',
        },
        {
          name: 'ctaButton',
          title: "Bouton d'action",
          type: 'object',
          fields: [
            {name: 'text', type: 'string', title: 'Texte du bouton'},
            {
              name: 'page',
              type: 'reference',
              title: 'Page de destination',
              to: [
                {type: 'home'},
                {type: 'artistes'},
                {type: 'services'},
                {type: 'about'},
                {type: 'contact'},
                {type: 'programmation'},
                {type: 'membres'},
                {type: 'appelDossiers'},
              ],
            },
          ],
        },
      ],
    }),

    // // Gallery Module
    defineField({
      name: 'galleryConfig',
      title: 'Configuration - Galerie',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'gallery',
      fields: [
        {name: 'title', title: 'Titre de la galerie', type: 'string'},
        {
          name: 'layout',
          title: 'Disposition',
          type: 'string',
          options: {
            list: [
              {title: 'Portrait - Portrait - 2 Paysage', value: 'portrait-portrait-landscape'},
              {title: 'Portrait - 2 Paysage - Portrait', value: 'portrait-landscape-portrait'},
              {title: '2 Paysage - Portrait - Portrait', value: 'landscape-portrait-portrait'},
            ],
          },
          initialValue: 'portrait-portrait-landscape',
        },
        {
          name: 'artworks',
          title: "Œuvres d'art (4 par rangée)",
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: {hotspot: true},
                  validation: (rule) => rule.required(),
                },
                {
                  name: 'title',
                  type: 'string',
                  title: "Titre de l'œuvre",
                  validation: (rule) => rule.required(),
                },
                {
                  name: 'orientation',
                  title: 'Orientation',
                  type: 'string',
                  options: {
                    list: [
                      {title: 'Portrait', value: 'portrait'},
                      {title: 'Paysage', value: 'landscape'},
                    ],
                  },
                  validation: (rule) => rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  media: 'image',
                  orientation: 'orientation',
                },
                prepare(selection) {
                  const {title, media, orientation} = selection
                  return {
                    title: title,
                    subtitle: `Orientation: ${orientation === 'portrait' ? 'Portrait' : 'Paysage'}`,
                    media: media,
                  }
                },
              },
            },
          ],
          validation: (rule) => rule.min(4).max(4).error('Exactement 4 œuvres par rangée'),
        },
      ],
    }),

    // // Carousel Module
    defineField({
      name: 'carouselConfig',
      title: 'Configuration - Carrousel',
      type: 'object',
      hidden: ({parent}) => parent?.moduleType !== 'carousel',
      fields: [
        {name: 'title', title: 'Titre du carrousel', type: 'string'},
        {
          name: 'images',
          title: 'Images',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'image',
                  type: 'image',
                  title: 'Image',
                  options: {hotspot: true},
                  validation: (rule) => rule.required(),
                },
                {name: 'caption', type: 'string', title: 'Légende'},
                {name: 'alt', type: 'string', title: 'Texte alternatif'},
              ],
            },
          ],
          validation: (rule) => rule.min(1).error('Au moins une image est requise'),
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      moduleType: 'moduleType',
    },
    prepare(selection) {
      const {title, moduleType} = selection
      const moduleTypes = {
        majorEvents: 'Événements majeurs',
        about: 'À propos',
        events: 'Événements',
        becomeMember: 'Devenir membre',
        appelDossiers: 'Appel de dossiers',
        artists: 'Artistes',
        services: 'Services',
        newsletter: 'Newsletter',
        textImage: 'Texte + Image',
        gallery: 'Galerie',
        carousel: 'Carrousel',
      }
      return {
        title: title,
        subtitle: `${moduleTypes.hasOwnProperty(moduleType) ? moduleTypes[moduleType as keyof typeof moduleTypes] : moduleType}`,
      }
    },
  },
})
