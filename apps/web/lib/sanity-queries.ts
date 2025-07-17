import { client } from './sanity'

export async function getHomeData() {
  return await client.fetch(`
    *[_type == "home"][0] {
      _id,
      title,
      description,
      heroImage,
      content
    }
  `)
}

export async function getArtistesData() {
  return await client.fetch(`
    *[_type == "artistes"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getAllArtistes() {
  return await client.fetch(`
    *[_type == "artiste"] | order(_createdAt desc) {
      _id,
      nom,
      description,
      image,
      categorie,
      couleur,
      _createdAt
    }
  `)
}

export async function getArtisteBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "artiste" && slug.current == $slug][0] {
      _id,
      nom,
      description,
      image,
      categorie,
      couleur,
      slug,
      _createdAt
    }
  `, { slug })
}

export async function getServicesData() {
  return await client.fetch(`
    *[_type == "services"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getAboutData() {
  return await client.fetch(`
    *[_type == "about"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getContactData() {
  return await client.fetch(`
    *[_type == "contact"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getProgrammationData() {
  return await client.fetch(`
    *[_type == "programmation"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getMembresData() {
  return await client.fetch(`
    *[_type == "membres"][0] {
      _id,
      title,
      description,
      content
    }
  `)
}

export async function getAllEvenements() {
  return await client.fetch(`
    *[_type == "evenement"] | order(date desc) {
      _id,
      titre,
      description,
      date,
      lieu,
      image,
      artistes,
      _createdAt
    }
  `)
}

export async function getEvenementBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "evenement" && slug.current == $slug][0] {
      _id,
      titre,
      description,
      date,
      lieu,
      image,
      artistes,
      slug,
      _createdAt
    }
  `, { slug })
}

export async function getAllCategories() {
  return await client.fetch(`
    *[_type == "categories"] | order(nom asc) {
      _id,
      nom,
      description,
      _createdAt
    }
  `)
}

export async function getAllCouleurs() {
  return await client.fetch(`
    *[_type == "couleurs"] | order(nom asc) {
      _id,
      nom,
      valeur,
      _createdAt
    }
  `)
}