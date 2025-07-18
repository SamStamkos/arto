import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  })
}

export async function POST(request: NextRequest) {
  try {
    // Verify webhook secret
    const secret = request.nextUrl.searchParams.get('secret')
    if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
      return NextResponse.json(
        { message: 'Invalid secret' }, 
        { 
          status: 401,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, Authorization',
          }
        }
      )
    }

    const body = await request.json()
    
    // Handle different webhook payload structures
    const documentType = body._type || body.type || body.document?._type

    if (!documentType) {
      console.warn('No document type found in webhook payload:', body)
      // Revalidate all Sanity API routes as fallback
      revalidatePath('/api/sanity', 'layout')
      return NextResponse.json({ 
        message: 'Revalidated all routes (no type specified)',
        revalidated: true,
        now: Date.now()
      })
    }

    // Revalidate specific API routes based on document type
    const pathsToRevalidate = []
    
    switch (documentType) {
      case 'home':
        pathsToRevalidate.push('/api/sanity/home')
        break
      case 'artistes':
        pathsToRevalidate.push('/api/sanity/artistes')
        break
      case 'artiste':
        pathsToRevalidate.push('/api/sanity/artistes', '/api/sanity/all-artistes')
        break
      case 'services':
        pathsToRevalidate.push('/api/sanity/services')
        break
      case 'about':
        pathsToRevalidate.push('/api/sanity/about')
        break
      case 'contact':
        pathsToRevalidate.push('/api/sanity/contact')
        break
      case 'programmation':
        pathsToRevalidate.push('/api/sanity/programmation')
        break
      case 'membres':
        pathsToRevalidate.push('/api/sanity/membres')
        break
      case 'evenement':
        pathsToRevalidate.push('/api/sanity/evenements')
        break
      case 'categories':
        pathsToRevalidate.push('/api/sanity/categories')
        break
      case 'couleurs':
        pathsToRevalidate.push('/api/sanity/couleurs')
        break
      default:
        // For unknown types, revalidate all
        pathsToRevalidate.push('/api/sanity')
    }

    // Perform revalidation
    for (const path of pathsToRevalidate) {
      revalidatePath(path)
    }

    return NextResponse.json({ 
      message: `Revalidated ${documentType}`,
      paths: pathsToRevalidate,
      revalidated: true,
      now: Date.now()
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      }
    })
    
  } catch (error) {
    console.error('Revalidation error:', error)
    const errorMessage = error instanceof Error ? error.message : 'Unknown error'
    return NextResponse.json(
      { message: 'Error revalidating', error: errorMessage },
      { status: 500 }
    )
  }
}