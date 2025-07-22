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
          // {title: 'Services', value: 'services'},
          // {title: 'Newsletter', value: 'newsletter'},
          // {title: 'Texte + Image', value: 'textImage'},
          // {title: 'Galerie', value: 'gallery'},
          // {title: "Grille d'images", value: 'imageGrid'},
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
          if (context.parent?.moduleType === 'majorEvents') {
            if (!value?.title) return 'Le titre est requis'
            if (!value?.events || value?.events.length === 0)
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
              title: 'Page À propos',
              to: [{type: 'about'}],
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
              title: 'Page Membres',
              to: [{type: 'membres'}],
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
              title: 'Page Appel de dossiers',
              to: [{type: 'appelDossiers'}],
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
          validation: (rule) => rule.required().min(1).max(4).error('Au moins 1 et au plus 4 artistes requis'),
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
    // defineField({
    //   name: 'servicesConfig',
    //   title: 'Configuration - Services',
    //   type: 'object',
    //   hidden: ({parent}) => parent?.moduleType !== 'services',
    //   fields: [
    //     {
    //       name: 'title',
    //       title: 'Titre de la section',
    //       type: 'string',
    //       validation: (rule) => rule.required(),
    //     },
    //     {name: 'subtitle', title: 'Sous-titre', type: 'string'},
    //     {
    //       name: 'services',
    //       title: 'Services',
    //       type: 'array',
    //       of: [
    //         {
    //           type: 'object',
    //           fields: [
    //             {
    //               name: 'title',
    //               type: 'string',
    //               title: 'Titre',
    //               validation: (rule) => rule.required(),
    //             },
    //             {name: 'description', type: 'text', title: 'Description', rows: 3},
    //             {name: 'icon', type: 'image', title: 'Icône', options: {hotspot: true}},
    //             {name: 'link', type: 'string', title: 'Lien'},
    //           ],
    //         },
    //       ],
    //     },
    //     {
    //       name: 'ctaButton',
    //       title: "Bouton d'action",
    //       type: 'object',
    //       fields: [
    //         {name: 'text', type: 'string', title: 'Texte du bouton'},
    //         {name: 'url', type: 'string', title: 'URL'},
    //       ],
    //     },
    //   ],
    // }),

    // // Newsletter Module
    // defineField({
    //   name: 'newsletterConfig',
    //   title: 'Configuration - Newsletter',
    //   type: 'object',
    //   hidden: ({parent}) => parent?.moduleType !== 'newsletter',
    //   fields: [
    //     {name: 'title', title: 'Titre', type: 'string', validation: (rule) => rule.required()},
    //     {name: 'subtitle', title: 'Sous-titre', type: 'string'},
    //     {name: 'description', title: 'Description', type: 'text', rows: 3},
    //     {
    //       name: 'placeholder',
    //       title: 'Placeholder email',
    //       type: 'string',
    //       initialValue: 'Votre adresse email',
    //     },
    //     {name: 'buttonText', title: 'Texte du bouton', type: 'string', initialValue: "S'abonner"},
    //     {
    //       name: 'backgroundColor',
    //       title: 'Couleur de fond',
    //       type: 'reference',
    //       to: [{type: 'couleurs'}],
    //     },
    //     {name: 'backgroundImage', title: 'Image de fond', type: 'image', options: {hotspot: true}},
    //   ],
    // }),

    // // Text Image Module
    // defineField({
    //   name: 'textImageConfig',
    //   title: 'Configuration - Texte + Image',
    //   type: 'object',
    //   hidden: ({parent}) => parent?.moduleType !== 'textImage',
    //   fields: [
    //     {name: 'title', title: 'Titre', type: 'string'},
    //     {name: 'subtitle', title: 'Sous-titre', type: 'string'},
    //     {name: 'content', title: 'Contenu', type: 'array', of: [{type: 'block'}]},
    //     {
    //       name: 'image',
    //       title: 'Image',
    //       type: 'image',
    //       options: {hotspot: true},
    //       validation: (rule) => rule.required(),
    //     },
    //     {
    //       name: 'imagePosition',
    //       title: "Position de l'image",
    //       type: 'string',
    //       options: {
    //         list: [
    //           {title: 'À gauche', value: 'left'},
    //           {title: 'À droite', value: 'right'},
    //         ],
    //       },
    //       initialValue: 'right',
    //     },
    //     {
    //       name: 'ctaButton',
    //       title: "Bouton d'action",
    //       type: 'object',
    //       fields: [
    //         {name: 'text', type: 'string', title: 'Texte du bouton'},
    //         {name: 'url', type: 'string', title: 'URL'},
    //       ],
    //     },
    //   ],
    // }),

    // // Gallery Module
    // defineField({
    //   name: 'galleryConfig',
    //   title: 'Configuration - Galerie',
    //   type: 'object',
    //   hidden: ({parent}) => parent?.moduleType !== 'gallery',
    //   fields: [
    //     {name: 'title', title: 'Titre de la galerie', type: 'string'},
    //     {name: 'subtitle', title: 'Sous-titre', type: 'string'},
    //     {
    //       name: 'images',
    //       title: 'Images',
    //       type: 'array',
    //       of: [
    //         {
    //           type: 'object',
    //           fields: [
    //             {
    //               name: 'image',
    //               type: 'image',
    //               title: 'Image',
    //               options: {hotspot: true},
    //               validation: (rule) => rule.required(),
    //             },
    //             {name: 'caption', type: 'string', title: 'Légende'},
    //             {name: 'alt', type: 'string', title: 'Texte alternatif'},
    //           ],
    //         },
    //       ],
    //       validation: (rule) => rule.min(1).error('Au moins une image est requise'),
    //     },
    //     {
    //       name: 'layout',
    //       title: 'Disposition',
    //       type: 'string',
    //       options: {
    //         list: [
    //           {title: 'Grille', value: 'grid'},
    //           {title: 'Mosaïque', value: 'masonry'},
    //           {title: 'Carrousel', value: 'carousel'},
    //         ],
    //       },
    //       initialValue: 'grid',
    //     },
    //   ],
    // }),

    // // Image Grid Module
    // defineField({
    //   name: 'imageGridConfig',
    //   title: "Configuration - Grille d'images",
    //   type: 'object',
    //   hidden: ({parent}) => parent?.moduleType !== 'imageGrid',
    //   fields: [
    //     {name: 'title', title: 'Titre', type: 'string'},
    //     {name: 'subtitle', title: 'Sous-titre', type: 'string'},
    //     {
    //       name: 'items',
    //       title: 'Éléments',
    //       type: 'array',
    //       of: [
    //         {
    //           type: 'object',
    //           fields: [
    //             {
    //               name: 'image',
    //               type: 'image',
    //               title: 'Image',
    //               options: {hotspot: true},
    //               validation: (rule) => rule.required(),
    //             },
    //             {name: 'title', type: 'string', title: 'Titre'},
    //             {name: 'subtitle', type: 'string', title: 'Sous-titre'},
    //             {name: 'description', type: 'text', title: 'Description', rows: 2},
    //             {name: 'link', type: 'string', title: 'Lien'},
    //           ],
    //         },
    //       ],
    //       validation: (rule) => rule.min(1).error('Au moins un élément est requis'),
    //     },
    //     {
    //       name: 'columns',
    //       title: 'Nombre de colonnes',
    //       type: 'number',
    //       options: {
    //         list: [
    //           {title: '2 colonnes', value: 2},
    //           {title: '3 colonnes', value: 3},
    //           {title: '4 colonnes', value: 4},
    //         ],
    //       },
    //       initialValue: 3,
    //     },
    //     {
    //       name: 'spacing',
    //       title: 'Espacement',
    //       type: 'string',
    //       options: {
    //         list: [
    //           {title: 'Compact', value: 'compact'},
    //           {title: 'Normal', value: 'normal'},
    //           {title: 'Large', value: 'large'},
    //         ],
    //       },
    //       initialValue: 'normal',
    //     },
    //   ],
    // }),
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
        imageGrid: "Grille d'images",
      }
      return {
        title: title,
        subtitle: `${moduleTypes[moduleType] || moduleType}`,
      }
    },
  },
})
