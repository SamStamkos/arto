import { NextRequest, NextResponse } from 'next/server'
import {
  getHomeData,
  getArtistesData,
  getAllArtistes,
  getArtisteBySlug,
  getServicesData,
  getAboutData,
  getContactData,
  getProgrammationData,
  getMembresData,
  getAllEvenements,
  getEvenementBySlug,
  getAllCategories,
  getAllCouleurs,
} from '../../../../lib/sanity-queries'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string[] }> }
) {
  try {
    const { slug } = await params
    const endpoint = slug[0]

    switch (endpoint) {
      case 'home': {
        const homeData = await getHomeData()
        return NextResponse.json(homeData)
      }

      case 'artistes': {
        if (slug[1]) {
          const artisteData = await getArtisteBySlug(slug[1])
          return NextResponse.json(artisteData)
        }
        const artistesData = await getArtistesData()
        return NextResponse.json(artistesData)
      }

      case 'all-artistes': {
        const allArtistes = await getAllArtistes()
        return NextResponse.json(allArtistes)
      }

      case 'services': {
        const servicesData = await getServicesData()
        return NextResponse.json(servicesData)
      }

      case 'about': {
        const aboutData = await getAboutData()
        return NextResponse.json(aboutData)
      }

      case 'contact': {
        const contactData = await getContactData()
        return NextResponse.json(contactData)
      }

      case 'programmation': {
        const programmationData = await getProgrammationData()
        return NextResponse.json(programmationData)
      }

      case 'membres': {
        const membresData = await getMembresData()
        return NextResponse.json(membresData)
      }

      case 'evenements': {
        if (slug[1]) {
          const evenementData = await getEvenementBySlug(slug[1])
          return NextResponse.json(evenementData)
        }
        const allevenements = await getAllEvenements()
        return NextResponse.json(allevenements)
      }

      case 'categories': {
        const categories = await getAllCategories()
        return NextResponse.json(categories)
      }

      case 'couleurs': {
        const couleurs = await getAllCouleurs()
        return NextResponse.json(couleurs)
      }

      default:
        return NextResponse.json(
          { error: 'Endpoint not found' },
          { status: 404 }
        )
    }
  } catch (error) {
    console.error('Sanity API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}