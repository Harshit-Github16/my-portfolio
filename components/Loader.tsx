'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false)
        }, 4000) // Increased to 4 seconds loading time

        return () => clearTimeout(timer)
    }, [])

    if (!isLoading) return null

    return (
        <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
            {/* Background Animation */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -inset-10 opacity-30">
                    <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float"></div>
                    <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-gray-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>
                </div>
            </div>

            <div className="relative z-10 text-center">
                {/* Main HS Logo */}
                <div className="relative mb-8">
                    <div className="text-8xl md:text-9xl font-bold gradient-text animate-pulse-glow">
                        HS
                    </div>

                    {/* Rotating Border */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 md:w-40 md:h-40 border-2 border-white rounded-full animate-spin opacity-30"></div>
                    </div>

                    {/* Pulsing Dots */}
                    <div className="absolute -top-4 -right-4 w-4 h-4 bg-white rounded-full animate-ping"></div>
                    <div className="absolute -bottom-4 -left-4 w-3 h-3 bg-gray-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 -left-6 w-2 h-2 bg-gray-300 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
                </div>

                {/* Loading Text */}
                <div className="space-y-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-white animate-fadeInUp">
                        Harshit Sharma
                    </h2>
                    <p className="text-lg text-gray-400 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
                        Full Stack Developer
                    </p>

                    {/* Loading Dots */}
                    <div className="flex justify-center space-x-2 mt-6" style={{ animationDelay: '0.6s' }}>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="w-full bg-gray-800 rounded-full h-1">
                        <div className="bg-white h-1 rounded-full animate-loading-progress"></div>
                    </div>
                </div>

                {/* Loading Percentage */}
                <div className="mt-4 text-sm text-gray-500 animate-fadeInUp" style={{ animationDelay: '0.9s' }}>
                    Loading Portfolio...
                </div>
            </div>
        </div>
    )
}