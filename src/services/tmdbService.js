// services
import * as tokenService from './tokenService'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/tmdb`

async function getCelebs(formData) {
  try {
    const res = await fetch(`${BASE_URL}/celeb/${formData.query}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function getMovies(formData) {
  try {
    const res = await fetch(`${BASE_URL}/movie/${formData.query}`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

async function getRecommendations() {
  try {
    const res = await fetch(`${BASE_URL}/recommendations`, {
      headers: { 
        'Authorization': `Bearer ${tokenService.getToken()}` 
      },
    })
    return await res.json()
  } catch (error) {
    throw new Error(error)
  }
}

export {
  getCelebs,
  getMovies,
  getRecommendations
}