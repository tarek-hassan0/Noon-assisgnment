'use client' // Error components must be Client Components
 
import PageError from '@/components/PageError'
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return <PageError reset={reset}/>
}