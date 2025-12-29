'use client'

import { useEffect, useState } from 'react'
import Loader from './Loader'

interface LoadingWrapperProps {
    children: React.ReactNode
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Check if page has loaded before
        const hasLoaded = sessionStorage.getItem('portfolioLoaded')

        if (hasLoaded) {
            // If already loaded in this session, skip loader
            setIsLoading(false)
            return
        }

        // Simulate loading time for first visit
        const timer = setTimeout(() => {
            setIsLoading(false)
            sessionStorage.setItem('portfolioLoaded', 'true')
        }, 8000) // Increased to 4 seconds

        return () => clearTimeout(timer)
    }, [])

    return (
        <>
            {isLoading && <Loader />}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
                {children}
            </div>
        </>
    )
}