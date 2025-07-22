import {defineType, defineField} from 'sanity'

export const settingsSchema = defineType({
  name: 'settings',
  title: 'Paramètres du site',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre principal du site web',
      validation: (rule) => rule.required()
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description générale du site web',
      rows: 3
    }),
    defineField({
      name: 'contactInfo',
      title: 'Informations de contact',
      type: 'object',
      fields: [
        {
          name: 'phone',
          title: 'Téléphone',
          type: 'string'
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (rule) => rule.email().error('Veuillez entrer une adresse email valide')
        },
        {
          name: 'address',
          title: 'Adresse',
          type: 'object',
          fields: [
            {name: 'street', type: 'string', title: 'Rue'},
            {name: 'city', type: 'string', title: 'Ville'},
            {name: 'postalCode', type: 'string', title: 'Code postal'},
            {name: 'country', type: 'string', title: 'Pays', initialValue: 'France'}
          ]
        },
        {
          name: 'openingHours',
          title: 'Horaires d\'ouverture',
          type: 'text',
          description: 'Horaires d\'ouverture de la coopérative',
          rows: 4,
          placeholder: 'Lundi - Vendredi: 9h00 - 18h00\nSamedi: 10h00 - 16h00\nDimanche: Fermé'
        }
      ]
    }),
    defineField({
      name: 'globalSEO',
      title: 'SEO global',
      type: 'object',
      description: 'Paramètres SEO par défaut pour l\'ensemble du site',
      fields: [
        {
          name: 'metaTitle',
          title: 'Titre meta par défaut',
          type: 'string',
          description: 'Titre affiché dans les onglets et résultats de recherche'
        },
        {
          name: 'metaDescription',
          title: 'Description meta par défaut',
          type: 'text',
          description: 'Description affichée dans les résultats de recherche',
          rows: 3,
          validation: (rule) => rule.max(160).warning('La description meta ne devrait pas dépasser 160 caractères')
        },
        {
          name: 'keywords',
          title: 'Mots-clés par défaut',
          type: 'array',
          of: [{type: 'string'}],
          description: 'Mots-clés généraux pour le référencement'
        },
        {
          name: 'ogImage',
          title: 'Image de partage par défaut',
          type: 'image',
          description: 'Image affichée lors du partage sur les réseaux sociaux',
          options: {
            hotspot: true
          }
        },
        {
          name: 'siteName',
          title: 'Nom du site',
          type: 'string',
          description: 'Nom du site pour les partages sur réseaux sociaux'
        },
        {
          name: 'twitterHandle',
          title: 'Compte Twitter',
          type: 'string',
          description: 'Nom d\'utilisateur Twitter (sans @)',
          placeholder: 'nom_utilisateur'
        }
      ]
    }),
    defineField({
      name: 'socialMedia',
      title: 'Réseaux sociaux',
      type: 'object',
      description: 'Liens vers les comptes de réseaux sociaux officiels',
      fields: [
        {name: 'facebook', type: 'url', title: 'Facebook'},
        {name: 'instagram', type: 'url', title: 'Instagram'},
        {name: 'linkedin', type: 'url', title: 'LinkedIn'}
      ]
    }),
    defineField({
      name: 'footer',
      title: 'Pied de page',
      type: 'object',
      description: 'Contenu du pied de page du site',
      fields: [
        {
          name: 'copyrightText',
          title: 'Texte de copyright',
          type: 'string',
          description: 'Texte affiché dans le copyright',
          placeholder: '© 2024 Arto - Coopérative Artistique'
        },
        {
          name: 'legalLinks',
          title: 'Liens légaux',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {name: 'title', type: 'string', title: 'Titre'},
                {name: 'url', type: 'string', title: 'URL'}
              ]
            }
          ]
        },
        {
          name: 'additionalText',
          title: 'Texte supplémentaire',
          type: 'text',
          description: 'Texte additionnel pour le pied de page',
          rows: 2
        }
      ]
    })
  ]
})