'use client'

import { useState } from 'react'

export default function ScheduleMeeting() {
    const [showScheduler, setShowScheduler] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [meetingLink, setMeetingLink] = useState('')
    const [meetingData, setMeetingData] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        topic: ''
    })

    const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setMeetingData({
            ...meetingData,
            [e.target.name]: e.target.value
        })
    }

    const generateMeetingLink = () => {
        // Generate a unique meeting ID
        const meetingId = Math.random().toString(36).substring(2, 15)
        const meetingUrl = `https://meet.google.com/${meetingId}`
        return meetingUrl
    }

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
        alert('Meeting link copied to clipboard!')
    }

    const handleScheduleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')

        // Generate meeting link
        const generatedLink = generateMeetingLink()
        setMeetingLink(generatedLink)

        try {
            // Send email to user with meeting link
            const userEmailResponse = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '1bfdeb48-65d3-484e-9cd1-26eecd328979',
                    name: 'Harshit Sharma',
                    email: meetingData.email,
                    subject: `Meeting Confirmed: ${meetingData.topic}`,
                    message: `
Hi ${meetingData.name},

Your meeting has been scheduled successfully!

📅 Meeting Details:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Date: ${meetingData.date}
Time: ${meetingData.time}
Topic: ${meetingData.topic}

🔗 Join Meeting:
${generatedLink}

Please join the meeting at the scheduled time using the link above.

Looking forward to connecting with you!

Best regards,
Harshit Sharma
Full Stack Developer
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    `,
                    from_name: 'Harshit Sharma - Portfolio',
                }),
            })

            // Send notification to Harshit
            const ownerEmailResponse = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '1bfdeb48-65d3-484e-9cd1-26eecd328979',
                    subject: '� New Meeting Scheduled!',
                    message: `
🎯 New Meeting Request

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
👤 Client Details:
Name: ${meetingData.name}
Email: ${meetingData.email}

📅 Meeting Schedule:
Date: ${meetingData.date}
Time: ${meetingData.time}

📝 Topic:
${meetingData.topic}

🔗 Meeting Link:
${generatedLink}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
The client has been sent the meeting link via email.
                    `,
                    to: 'harshit0150@gmail.com',
                    from_name: 'Portfolio Meeting Scheduler',
                }),
            })

            if (userEmailResponse.ok && ownerEmailResponse.ok) {
                setSubmitStatus('success')
            } else {
                setSubmitStatus('error')
            }
        } catch (error) {
            console.error('Error scheduling meeting:', error)
            setSubmitStatus('error')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleCloseModal = () => {
        setShowScheduler(false)
        setSubmitStatus('idle')
        setMeetingData({ name: '', email: '', date: '', time: '', topic: '' })
        setMeetingLink('')
    }

    return (
        <section id="schedule-meeting" className="section bg-[#0a0a0a] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fadeInUp">
                    <span className="badge-orange mb-4 px-6 py-2">SCHEDULE A CALL</span>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                        Let's <span className="text-[#ff5722]">Connect</span>
                    </h2>
                    <div className="section-divider mb-4"></div>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Schedule a video call to discuss your project and ideas
                    </p>
                </div>

                {/* Schedule Meeting Card */}
                <div className="max-w-2xl mx-auto">
                    <div className="card group hover:border-[#ff5722] transition-all cursor-pointer" onClick={() => setShowScheduler(true)}>
                        <div className="text-center">
                            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#ff5722] to-[#ff8a50] flex items-center justify-center group-hover:scale-110 transition-transform">
                                <i className="fas fa-calendar-alt text-4xl text-white"></i>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-3">Schedule a Meeting</h3>
                            <p className="text-gray-400 mb-6 text-lg">
                                Book a time slot that works best for you and receive a meeting link instantly
                            </p>
                            <button className="btn-primary text-lg px-8 py-3">
                                <i className="fas fa-clock mr-2"></i>
                                Schedule Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Schedule Meeting Modal */}
                {showScheduler && (
                    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                        <div className="card max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-fadeInUp">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-white">
                                    <i className="fas fa-video mr-3 text-[#ff5722]"></i>
                                    Schedule a Video Meeting
                                </h3>
                                <button
                                    onClick={handleCloseModal}
                                    className="w-10 h-10 rounded-full bg-[#2a2a2a] hover:bg-[#ff5722] text-white transition-colors"
                                >
                                    <i className="fas fa-times"></i>
                                </button>
                            </div>

                            {submitStatus === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <i className="fas fa-check-circle text-5xl text-green-500"></i>
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-4">Meeting Scheduled Successfully!</h4>
                                    <p className="text-gray-400 mb-6">
                                        A confirmation email with the meeting link has been sent to your email address.
                                    </p>

                                    <div className="bg-[#1a1a1a] border border-[#2a2a2a] rounded-lg p-6 mb-6">
                                        <p className="text-sm text-gray-400 mb-3">Your Meeting Link:</p>
                                        <div className="flex items-center gap-3">
                                            <input
                                                type="text"
                                                value={meetingLink}
                                                readOnly
                                                className="form-input flex-1 text-sm"
                                            />
                                            <button
                                                onClick={() => copyToClipboard(meetingLink)}
                                                className="btn-secondary whitespace-nowrap"
                                            >
                                                <i className="fas fa-copy mr-2"></i>
                                                Copy
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={meetingLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-primary flex-1"
                                        >
                                            <i className="fas fa-external-link-alt mr-2"></i>
                                            Open Meeting Link
                                        </a>
                                        <button
                                            onClick={handleCloseModal}
                                            className="btn-secondary flex-1"
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleScheduleSubmit} className="space-y-6">
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                <i className="fas fa-user mr-2 text-[#ff5722]"></i>
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={meetingData.name}
                                                onChange={handleScheduleChange}
                                                className="form-input"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                <i className="fas fa-envelope mr-2 text-[#ff5722]"></i>
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={meetingData.email}
                                                onChange={handleScheduleChange}
                                                className="form-input"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                <i className="fas fa-calendar mr-2 text-[#ff5722]"></i>
                                                Preferred Date *
                                            </label>
                                            <input
                                                type="date"
                                                name="date"
                                                value={meetingData.date}
                                                onChange={handleScheduleChange}
                                                className="form-input"
                                                min={new Date().toISOString().split('T')[0]}
                                                required
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-semibold text-gray-300 mb-2">
                                                <i className="fas fa-clock mr-2 text-[#ff5722]"></i>
                                                Preferred Time *
                                            </label>
                                            <select
                                                name="time"
                                                value={meetingData.time}
                                                onChange={handleScheduleChange}
                                                className="form-input"
                                                required
                                            >
                                                <option value="">Select time</option>
                                                <option value="09:00 AM">09:00 AM</option>
                                                <option value="10:00 AM">10:00 AM</option>
                                                <option value="11:00 AM">11:00 AM</option>
                                                <option value="12:00 PM">12:00 PM</option>
                                                <option value="01:00 PM">01:00 PM</option>
                                                <option value="02:00 PM">02:00 PM</option>
                                                <option value="03:00 PM">03:00 PM</option>
                                                <option value="04:00 PM">04:00 PM</option>
                                                <option value="05:00 PM">05:00 PM</option>
                                                <option value="06:00 PM">06:00 PM</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-semibold text-gray-300 mb-2">
                                            <i className="fas fa-comment-dots mr-2 text-[#ff5722]"></i>
                                            Meeting Topic *
                                        </label>
                                        <textarea
                                            name="topic"
                                            value={meetingData.topic}
                                            onChange={handleScheduleChange}
                                            className="form-input resize-none"
                                            rows={4}
                                            placeholder="Brief description of what you'd like to discuss..."
                                            required
                                        ></textarea>
                                    </div>

                                    {submitStatus === 'error' && (
                                        <div className="bg-red-500/10 border border-red-500 text-red-500 px-4 py-3 rounded-lg">
                                            <i className="fas fa-exclamation-circle mr-2"></i>
                                            Failed to schedule meeting. Please try again or contact directly.
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                                Scheduling Meeting...
                                            </>
                                        ) : (
                                            <>
                                                <i className="fas fa-calendar-check mr-2"></i>
                                                Confirm & Get Meeting Link
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </section>
    )
}
