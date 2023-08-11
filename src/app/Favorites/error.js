'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import PageError from '@/components/PageError'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <PageError  msg={'Try to Refresh the page'} reset={reset} />
  )
}