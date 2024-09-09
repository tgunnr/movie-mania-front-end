//npm modules
import { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'

// components
import MovieConView from '../../components/MovieConView/MovieConView'

// services
import * as movieConService from '../../services/movieConService'

const MovieConShow = (props) => {
  const [movieCon, setMovieCon] = useState(null)
  const { movieConId } = useParams()
  const { user } = props
  useEffect(() => {
    const fetchMovieCon = async() => {
      // make an API call to getch movieCon
      const movieConData = await movieConService.show(movieConId)
      // use result to set State
      setMovieCon(movieConData)
    } 
    fetchMovieCon()
  }, [movieConId])

  const handleAddComment = async commentFormData => {
    // make an API call using servcie function
    const newComment = await movieConService.createComment(movieConId, commentFormData)
    // set state with the result
    setMovieCon({ ...movieCon, comments: [...movieCon.comments, newComment] })
  }
  
  if (!movieCon) return <h1>Loading...</h1>
  return ( 
    <>
    {movieCon.author._id === user.profile && 
      <>
      <NavLink to='/movieCons/edit' state={movieCon}><button type='submit'>Edit</button></NavLink>
      <button onClick={() => props.handleDeleteMovieCon(movieCon._id)}>Delete</button>
      </>
    } 
    <MovieConView movieCon={movieCon} user={user} handleAddComment={handleAddComment}/>
    </>
  )
}

export default MovieConShow;