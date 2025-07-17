import { describe, it, expect, vi, beforeEach } from 'vitest'
import { NextRequest } from 'next/server'
import { GET } from './route'

vi.mock('../../../../lib/sanity-queries', () => ({
  getHomeData: vi.fn(),
  getArtistesData: vi.fn(),
  getAllArtistes: vi.fn(),
  getArtisteBySlug: vi.fn(),
  getServicesData: vi.fn(),
  getAboutData: vi.fn(),
  getContactData: vi.fn(),
  getProgrammationData: vi.fn(),
  getMembresData: vi.fn(),
  getAllEvenements: vi.fn(),
  getEvenementBySlug: vi.fn(),
  getAllCategories: vi.fn(),
  getAllCouleurs: vi.fn(),
}))

const mockQueries = await import('../../../../lib/sanity-queries')

describe('/api/sanity/[...slug]', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  const createMockRequest = (url: string) => {
    return new NextRequest(url)
  }

  const createMockParams = (slug: string[]) => {
    return { params: Promise.resolve({ slug }) }
  }

  it('should return home data for /home endpoint', async () => {
    const mockHomeData = { title: 'Home', description: 'Home page' }
    vi.mocked(mockQueries.getHomeData).mockResolvedValue(mockHomeData)

    const request = createMockRequest('http://localhost:3000/api/sanity/home')
    const params = createMockParams(['home'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockHomeData)
    expect(mockQueries.getHomeData).toHaveBeenCalledOnce()
  })

  it('should return artistes data for /artistes endpoint', async () => {
    const mockArtistesData = { title: 'Artistes', description: 'Artists page' }
    vi.mocked(mockQueries.getArtistesData).mockResolvedValue(mockArtistesData)

    const request = createMockRequest('http://localhost:3000/api/sanity/artistes')
    const params = createMockParams(['artistes'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockArtistesData)
    expect(mockQueries.getArtistesData).toHaveBeenCalledOnce()
  })

  it('should return specific artiste by slug', async () => {
    const mockArtisteData = { nom: 'John Doe', description: 'Artist bio' }
    vi.mocked(mockQueries.getArtisteBySlug).mockResolvedValue(mockArtisteData)

    const request = createMockRequest('http://localhost:3000/api/sanity/artistes/john-doe')
    const params = createMockParams(['artistes', 'john-doe'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockArtisteData)
    expect(mockQueries.getArtisteBySlug).toHaveBeenCalledWith('john-doe')
  })

  it('should return all artistes for /all-artistes endpoint', async () => {
    const mockAllArtistes = [{ nom: 'Artist 1' }, { nom: 'Artist 2' }]
    vi.mocked(mockQueries.getAllArtistes).mockResolvedValue(mockAllArtistes)

    const request = createMockRequest('http://localhost:3000/api/sanity/all-artistes')
    const params = createMockParams(['all-artistes'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockAllArtistes)
    expect(mockQueries.getAllArtistes).toHaveBeenCalledOnce()
  })

  it('should return evenement by slug', async () => {
    const mockEvenementData = { titre: 'Concert', date: '2024-01-01' }
    vi.mocked(mockQueries.getEvenementBySlug).mockResolvedValue(mockEvenementData)

    const request = createMockRequest('http://localhost:3000/api/sanity/evenements/concert-2024')
    const params = createMockParams(['evenements', 'concert-2024'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(200)
    expect(data).toEqual(mockEvenementData)
    expect(mockQueries.getEvenementBySlug).toHaveBeenCalledWith('concert-2024')
  })

  it('should return 404 for unknown endpoint', async () => {
    const request = createMockRequest('http://localhost:3000/api/sanity/unknown')
    const params = createMockParams(['unknown'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(404)
    expect(data).toEqual({ error: 'Endpoint not found' })
  })

  it('should return 500 when query throws error', async () => {
    vi.mocked(mockQueries.getHomeData).mockRejectedValue(new Error('Database error'))

    const request = createMockRequest('http://localhost:3000/api/sanity/home')
    const params = createMockParams(['home'])
    
    const response = await GET(request, params)
    const data = await response.json()

    expect(response.status).toBe(500)
    expect(data).toEqual({ error: 'Internal server error' })
  })
})