// npm modules
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'

// services
import * as profileService from '../../services/profileService'

// css
import styles from './Profiles.module.css'

const Profiles = () => {
  const [profiles, setProfiles] = useState([])

  useEffect(() => {
    const fetchProfiles = async () => {
      const profileData = await profileService.getAllProfiles()
      setProfiles(profileData)
    }
    fetchProfiles()
  }, [])

  if (!profiles.length) {
    return <main className={styles.container}><h1>Loading...</h1></main>
  }
  
  return (
    <main className={styles.container}>
      <h1>Hello. This is a list of all the profiles.</h1>
      {profiles.map(profile => (
        <NavLink key={profile._id} to={`/profiles/${profile._id}`}>
          <p>{profile.name}</p>
        </NavLink>
        
      ))}
    </main>
  )
}

export default Profiles
