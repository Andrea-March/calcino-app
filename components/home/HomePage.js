import React from 'react'

export default function HomePage() {

    const user = typeof window != 'undefined' ? JSON.parse(localStorage.getItem('user')) : null
    return(
        <div>
            Welcome, {user?.username}
        </div>
    )
}