import { homeSchema } from './home'
import { artistesSchema } from './artistes'
import { servicesSchema } from './services'
import { aboutSchema } from './about'
import { contactSchema } from './contact'
import { programmationSchema } from './programmation'
import { membresSchema } from './membres'
import { appelDossiersSchema } from './appelDossiers'
import { evenementSchema } from './evenement'
import { artisteSchema } from './artiste'
import { categoriesSchema } from './categories'
import { couleursSchema } from './couleurs'
import { settingsSchema } from './settings'
import { bannerSchema } from './banner'
import { modulesLibrarySchema } from './modulesLibrary'
import {
  majorEventsModule,
  aboutModule,
  eventsModule,
  becomeMemberModule,
  appelDossiersModule,
  artistsModule,
  servicesModule,
  newsletterModule,
  textImageModule,
  galleryModule,
  imageGridModule
} from './modules'

export const schemaTypes = [
  homeSchema,
  artistesSchema,
  servicesSchema,
  aboutSchema,
  contactSchema,
  programmationSchema,
  membresSchema,
  appelDossiersSchema,
  evenementSchema,
  artisteSchema,
  categoriesSchema,
  couleursSchema,
  settingsSchema,
  bannerSchema,
  modulesLibrarySchema,
  // Modules (objects for the library)
  majorEventsModule,
  aboutModule,
  eventsModule,
  becomeMemberModule,
  appelDossiersModule,
  artistsModule,
  servicesModule,
  newsletterModule,
  textImageModule,
  galleryModule,
  imageGridModule
]
