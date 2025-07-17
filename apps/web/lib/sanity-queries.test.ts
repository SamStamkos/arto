import { describe, it, expect, vi, beforeEach } from 'vitest'
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
  getAllCouleurs
} from './sanity-queries'

vi.mock('./sanity', () => ({
  client: {
    fetch: vi.fn()
  }
}))

const mockClient = await import('./sanity')

describe('Sanity Queries', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  describe('getHomeData', () => {
    it('should fetch home data', async () => {
      const mockData = { _id: '1', title: 'Home', description: 'Home page' }
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockData)

      const result = await getHomeData()

      expect(result).toEqual(mockData)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "home"][0]')
      )
    })
  })

  describe('getAllArtistes', () => {
    it('should fetch all artistes ordered by creation date', async () => {
      const mockArtistes = [
        { _id: '1', nom: 'Artist 1' },
        { _id: '2', nom: 'Artist 2' }
      ]
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockArtistes)

      const result = await getAllArtistes()

      expect(result).toEqual(mockArtistes)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "artiste"] | order(_createdAt desc)')
      )
    })
  })

  describe('getArtisteBySlug', () => {
    it('should fetch artiste by slug with parameters', async () => {
      const mockArtiste = { _id: '1', nom: 'John Doe', slug: { current: 'john-doe' } }
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockArtiste)

      const result = await getArtisteBySlug('john-doe')

      expect(result).toEqual(mockArtiste)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "artiste" && slug.current == $slug][0]'),
        { slug: 'john-doe' }
      )
    })
  })

  describe('getAllEvenements', () => {
    it('should fetch all evenements ordered by date', async () => {
      const mockEvenements = [
        { _id: '1', titre: 'Concert 1', date: '2024-02-01' },
        { _id: '2', titre: 'Concert 2', date: '2024-01-01' }
      ]
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockEvenements)

      const result = await getAllEvenements()

      expect(result).toEqual(mockEvenements)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "evenement"] | order(date desc)')
      )
    })
  })

  describe('getEvenementBySlug', () => {
    it('should fetch evenement by slug with parameters', async () => {
      const mockEvenement = { _id: '1', titre: 'Concert', slug: { current: 'concert-2024' } }
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockEvenement)

      const result = await getEvenementBySlug('concert-2024')

      expect(result).toEqual(mockEvenement)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "evenement" && slug.current == $slug][0]'),
        { slug: 'concert-2024' }
      )
    })
  })

  describe('getAllCategories', () => {
    it('should fetch all categories ordered by name', async () => {
      const mockCategories = [
        { _id: '1', nom: 'Category A' },
        { _id: '2', nom: 'Category B' }
      ]
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockCategories)

      const result = await getAllCategories()

      expect(result).toEqual(mockCategories)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "categories"] | order(nom asc)')
      )
    })
  })

  describe('getAllCouleurs', () => {
    it('should fetch all couleurs ordered by name', async () => {
      const mockCouleurs = [
        { _id: '1', nom: 'Blue', valeur: '#0000ff' },
        { _id: '2', nom: 'Red', valeur: '#ff0000' }
      ]
      vi.mocked(mockClient.client.fetch).mockResolvedValue(mockCouleurs)

      const result = await getAllCouleurs()

      expect(result).toEqual(mockCouleurs)
      expect(mockClient.client.fetch).toHaveBeenCalledWith(
        expect.stringContaining('*[_type == "couleurs"] | order(nom asc)')
      )
    })
  })

  describe('error handling', () => {
    it('should propagate errors from client.fetch', async () => {
      const error = new Error('Network error')
      vi.mocked(mockClient.client.fetch).mockRejectedValue(error)

      await expect(getHomeData()).rejects.toThrow('Network error')
    })
  })
})