'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div style={{display: 'flex',flexDirection: 'column', alignItems: 'center'}}>
      <h2>Something went wrong!</h2>
      <button
      style={{padding: '10px', borderRadius: '5px', border: '1px solid black', backgroundColor: 'transparent', color: 'black', cursor: 'pointer'}}
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}