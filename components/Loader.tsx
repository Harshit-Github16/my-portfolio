'use client'

import { useEffect, useState } from 'react'

export default function Loader() {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 5
            })
        }, 50)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="relative mb-8">
                    <div className="w-24 h-24 mx-auto">
                        <div className="absolute inset-0 bg-blue-600 rounded-full animate-pulse"></div>
                        <div className="absolute inset-2 bg-white rounded-full flex items-center justify-center">
                            <span className="text-4xl font-bold text-blue-600">HS</span>
                        </div>
                    </div>
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Loading Portfolio
                </h2>

                {/* Progress Bar */}
                <div className="w-64 mx-auto">
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-blue-600 transition-all duration-300 ease-out"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-600 mt-2 font-semibold">{progress}%</p>
                </div>

                {/* Loading Dots */}
                <div className="flex justify-center gap-2 mt-6">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
            </div>
        </div>
    )
}
