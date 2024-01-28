import React from 'react'
import PropTypes from 'prop-types'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'E-Scooter Data',
  description: 'Smart Cities - Team 10 Senior Design Project 2023-24'
}

// PropTypes validation
RootLayout.propTypes = {
  children: PropTypes.node.isRequired // Validate children prop as a node and make it required
}

export default function RootLayout ({ children }): JSX.Element {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
