'use client'

import { useEffect, useState } from 'react'
import Loader from './Loader'

interface LoadingWrapperProps {
    children: React.ReactNode
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Always show loader for 2 seconds
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 2000) // 2 seconds loading time

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