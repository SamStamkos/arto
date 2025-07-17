import {defineType, defineField} from 'sanity'

export const artisteSchema = defineType({
  name: 'artiste',
  title: 'Artiste',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96
      },
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'stageName',
      title: 'Nom de scène',
      type: 'string'
    }),
    defineField({
      name: 'bio',
      title: 'Biographie',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'shortBio',
      title: 'Biographie courte',
      type: 'text',
      rows: 4
    }),
    defineField({
      name: 'profileImage',
      title: 'Photo de profil',
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
      name: 'genre',
      title: 'Genre musical',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'instruments',
      title: 'Instruments',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'origin',
      title: 'Origine',
      type: 'object',
      fields: [
        {name: 'city', type: 'string', title: 'Ville'},
        {name: 'country', type: 'string', title: 'Pays'}
      ]
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'object',
      fields: [
        {name: 'email', type: 'string', title: 'Email'},
        {name: 'phone', type: 'string', title: 'Téléphone'},
        {name: 'manager', type: 'string', title: 'Manager'},
        {name: 'managerEmail', type: 'string', title: 'Email manager'},
        {name: 'bookingEmail', type: 'string', title: 'Email booking'}
      ]
    }),
    defineField({
      name: 'socialLinks',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        {name: 'website', type: 'url', title: 'Site web'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'twitter', type: 'url', title: 'Twitter'},
        {name: 'youtube', type: 'url', title: 'YouTube'},
        {name: 'spotify', type: 'url', title: 'Spotify'},
        {name: 'soundcloud', type: 'url', title: 'SoundCloud'},
        {name: 'bandcamp', type: 'url', title: 'Bandcamp'},
        {name: 'deezer', type: 'url', title: 'Deezer'},
        {name: 'appleMusic', type: 'url', title: 'Apple Music'}
      ]
    }),
    defineField({
      name: 'mediaKit',
      title: 'Kit média',
      type: 'object',
      fields: [
        {name: 'pressKit', type: 'file', title: 'Dossier de presse'},
        {name: 'rider', type: 'file', title: 'Rider technique'},
        {name: 'contractTemplate', type: 'file', title: 'Modèle de contrat'}
      ]
    }),
    defineField({
      name: 'audioSamples',
      title: 'Extraits audio',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'file', type: 'file', title: 'Fichier audio'},
            {name: 'duration', type: 'string', title: 'Durée'},
            {name: 'album', type: 'string', title: 'Album'},
            {name: 'year', type: 'number', title: 'Année'}
          ]
        }
      ]
    }),
    defineField({
      name: 'videos',
      title: 'Vidéos',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'url', type: 'url', title: 'URL vidéo'},
            {name: 'thumbnail', type: 'image', title: 'Miniature'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'type', type: 'string', title: 'Type', options: {
              list: [
                {title: 'Clip', value: 'clip'},
                {title: 'Live', value: 'live'},
                {title: 'Interview', value: 'interview'},
                {title: 'Documentaire', value: 'documentary'}
              ]
            }}
          ]
        }
      ]
    }),
    defineField({
      name: 'discography',
      title: 'Discographie',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'type', type: 'string', title: 'Type', options: {
              list: [
                {title: 'Album', value: 'album'},
                {title: 'EP', value: 'ep'},
                {title: 'Single', value: 'single'},
                {title: 'Compilation', value: 'compilation'}
              ]
            }},
            {name: 'releaseDate', type: 'date', title: 'Date de sortie'},
            {name: 'cover', type: 'image', title: 'Pochette'},
            {name: 'label', type: 'string', title: 'Label'},
            {name: 'streamingLinks', type: 'object', title: 'Liens streaming', fields: [
              {name: 'spotify', type: 'url', title: 'Spotify'},
              {name: 'appleMusic', type: 'url', title: 'Apple Music'},
              {name: 'deezer', type: 'url', title: 'Deezer'},
              {name: 'youtube', type: 'url', title: 'YouTube'}
            ]}
          ]
        }
      ]
    }),
    defineField({
      name: 'achievements',
      title: 'Récompenses et distinctions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'title', type: 'string', title: 'Titre'},
            {name: 'description', type: 'text', title: 'Description'},
            {name: 'year', type: 'number', title: 'Année'},
            {name: 'organization', type: 'string', title: 'Organisation'}
          ]
        }
      ]
    }),
    defineField({
      name: 'featured',
      title: 'Artiste mis en avant',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'status',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          {title: 'Actif', value: 'active'},
          {title: 'Inactif', value: 'inactive'},
          {title: 'En pause', value: 'on-break'},
          {title: 'Retraité', value: 'retired'}
        ]
      },
      initialValue: 'active'
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}]
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
      title: 'name',
      subtitle: 'stageName',
      media: 'profileImage',
      genre: 'genre.0'
    },
    prepare(selection) {
      const {title, subtitle, media, genre} = selection
      return {
        title: title,
        subtitle: subtitle ? `${subtitle} - ${genre || ''}` : genre || '',
        media: media
      }
    }
  }
})