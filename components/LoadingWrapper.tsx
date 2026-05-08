'use client'

import { useEffect, useState } from 'react'
import Loader from './Loader'

interface LoadingWrapperProps {
    children: React.ReactNode
}

export default function LoadingWrapper({ children }: LoadingWrapperProps) {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Show loader for 1.5 seconds
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 1500)

        return () => clearTimeout(timer)
    }, [])

    if (isLoading) {
        return <Loader />
    }

    return <>{children}</>
}
