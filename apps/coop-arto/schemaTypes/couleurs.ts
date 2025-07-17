import {defineType, defineField} from 'sanity'

export const couleursSchema = defineType({
  name: 'couleurs',
  title: 'Couleurs',
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
      name: 'hexCode',
      title: 'Code hexadécimal',
      type: 'string',
      validation: (rule) => rule.required().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/, {
        name: 'hex',
        invert: false
      }).error('Veuillez entrer un code couleur hexadécimal valide (ex: #FF0000)')
    }),
    defineField({
      name: 'rgbCode',
      title: 'Code RGB',
      type: 'object',
      fields: [
        {name: 'r', type: 'number', title: 'Rouge', validation: (rule) => rule.min(0).max(255)},
        {name: 'g', type: 'number', title: 'Vert', validation: (rule) => rule.min(0).max(255)},
        {name: 'b', type: 'number', title: 'Bleu', validation: (rule) => rule.min(0).max(255)}
      ]
    }),
    defineField({
      name: 'hslCode',
      title: 'Code HSL',
      type: 'object',
      fields: [
        {name: 'h', type: 'number', title: 'Teinte', validation: (rule) => rule.min(0).max(360)},
        {name: 's', type: 'number', title: 'Saturation (%)', validation: (rule) => rule.min(0).max(100)},
        {name: 'l', type: 'number', title: 'Luminosité (%)', validation: (rule) => rule.min(0).max(100)}
      ]
    }),
    defineField({
      name: 'colorFamily',
      title: 'Famille de couleur',
      type: 'string',
      options: {
        list: [
          {title: 'Rouge', value: 'red'},
          {title: 'Orange', value: 'orange'},
          {title: 'Jaune', value: 'yellow'},
          {title: 'Vert', value: 'green'},
          {title: 'Bleu', value: 'blue'},
          {title: 'Violet', value: 'purple'},
          {title: 'Rose', value: 'pink'},
          {title: 'Marron', value: 'brown'},
          {title: 'Gris', value: 'gray'},
          {title: 'Noir', value: 'black'},
          {title: 'Blanc', value: 'white'}
        ]
      }
    }),
    defineField({
      name: 'variants',
      title: 'Variantes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', type: 'string', title: 'Nom de la variante'},
            {name: 'hexCode', type: 'string', title: 'Code hex'},
            {name: 'opacity', type: 'number', title: 'Opacité (%)', validation: (rule) => rule.min(0).max(100)}
          ]
        }
      ]
    }),
    defineField({
      name: 'usage',
      title: 'Utilisation',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Couleur principale', value: 'primary'},
          {title: 'Couleur secondaire', value: 'secondary'},
          {title: 'Couleur d\'accent', value: 'accent'},
          {title: 'Arrière-plan', value: 'background'},
          {title: 'Texte', value: 'text'},
          {title: 'Bordure', value: 'border'},
          {title: 'Bouton', value: 'button'},
          {title: 'Lien', value: 'link'},
          {title: 'Erreur', value: 'error'},
          {title: 'Succès', value: 'success'},
          {title: 'Avertissement', value: 'warning'},
          {title: 'Information', value: 'info'}
        ]
      }
    }),
    defineField({
      name: 'accessibility',
      title: 'Accessibilité',
      type: 'object',
      fields: [
        {name: 'contrastRatio', type: 'number', title: 'Ratio de contraste'},
        {name: 'wcagCompliant', type: 'boolean', title: 'Conforme WCAG', initialValue: false},
        {name: 'colorBlindSafe', type: 'boolean', title: 'Compatible daltonisme', initialValue: false},
        {name: 'notes', type: 'text', title: 'Notes d\'accessibilité'}
      ]
    }),
    defineField({
      name: 'cssVariables',
      title: 'Variables CSS',
      type: 'object',
      fields: [
        {name: 'primary', type: 'string', title: 'Variable CSS principale'},
        {name: 'secondary', type: 'string', title: 'Variable CSS secondaire'},
        {name: 'custom', type: 'array', of: [
          {
            type: 'object',
            fields: [
              {name: 'name', type: 'string', title: 'Nom de la variable'},
              {name: 'value', type: 'string', title: 'Valeur'}
            ]
          }
        ], title: 'Variables personnalisées'}
      ]
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true
    }),
    defineField({
      name: 'featured',
      title: 'Couleur mise en avant',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    })
  ],
  preview: {
    select: {
      title: 'name',
      hexCode: 'hexCode',
      family: 'colorFamily',
      description: 'description'
    },
    prepare(selection) {
      const {title, hexCode, family, description} = selection
      return {
        title: title,
        subtitle: `${hexCode} - ${family || ''} ${description ? '- ' + description : ''}`,
        media: () => {
          const colorDiv = document.createElement('div')
          colorDiv.style.backgroundColor = hexCode
          colorDiv.style.width = '100%'
          colorDiv.style.height = '100%'
          colorDiv.style.border = '1px solid #ccc'
          return colorDiv
        }
      }
    }
  },
  orderings: [
    {
      title: 'Nom',
      name: 'nameAsc',
      by: [
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Famille de couleur',
      name: 'familyAsc',
      by: [
        {field: 'colorFamily', direction: 'asc'},
        {field: 'name', direction: 'asc'}
      ]
    },
    {
      title: 'Code hexadécimal',
      name: 'hexAsc',
      by: [
        {field: 'hexCode', direction: 'asc'}
      ]
    }
  ]
})