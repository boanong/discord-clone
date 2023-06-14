'use client'
import AuthGaurd from '@/hoc/AuthGuard'
import React from 'react'

type Props = {
    userData: any
}

function page({userData}: Props) {
  return (
    <div>
      <p>{userData.uid}</p>
      <p>{userData.email}</p>
      <p>{userData.displayName}</p>
    </div>
  )
}

export default AuthGaurd(page)