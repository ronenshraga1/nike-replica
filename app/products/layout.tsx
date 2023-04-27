import React from 'react'

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {    
    return (
        <main style={{overflowY:"hidden"}}>
          {children}
        </main>
    )
  }
  
