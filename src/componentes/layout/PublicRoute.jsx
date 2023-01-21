import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
import { List } from '../../pages/List'
import { Header } from '../Header'

export const PublicRoute = ({children}) => {
   const {logged}= useContext(AuthContext)

  return logged?(
    <>
    <Link to={"/listado"}/>
    <Header/>
    <List/>
    </> 
  ):(
    children
  )
}
