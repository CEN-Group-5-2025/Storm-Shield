import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar'
import './volunteer-request.css'

interface FormData {
  location: string
  workType: string
}

export const VolunteerRequest: React.FC = () => {
  const [isHeaderAnimated, setIsHeaderAnimated] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    location: '',
    workType: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const locationOptions = [
    'San Juan',
    'Ponce',
    'Mayagüez',
    'Arecibo',
    'Fajardo',
  ]

  const workTypeOptions = [
    'Emergency Response',
    'Shelter Support',
    'Cleanup & Debris Removal',
    'Food Distribution',
    'Medical Assistance',
    'Community Outreach',
    'Logistics & Coordination',
    'Search & Rescue',
    'Technical Support',
    'Administrative Support',
  ]

  useEffect(() => {
    setIsHeaderAnimated(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))

    // Clear error when user makes a selection
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validate = (): boolean => {
    const newErrors: { [key: string]: string } = {}

    if (!formData.location) {
      newErrors.location = 'Please select a location'
    }

    if (!formData.workType) {
      newErrors.workType = 'Please select a work type'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleFindMatches = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validate()) {
      return
    }

    setIsLoading(true)

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitted(true)
      // In a real application, you would send formData to your backend here
      console.log('Volunteer request submitted:', formData)
    } catch (error) {
      console.error('Error submitting volunteer request:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="volunteer-page">
      <div className="volunteer-background"></div>
      <div className="volunteer-gradient"></div>
      <div className="volunteer-content">
        <NavigationBar />

        <main className="volunteer-main">
          <div
            className={`volunteer-header ${isHeaderAnimated ? 'animate' : ''}`}
          >
            <h1 className="page-title">Request a Volunteer</h1>
            <p className="volunteer-subtitle">
              Need assistance during or after severe weather events? Request
              help from our network of qualified volunteers who are ready to
              assist with various tasks in your community.
            </p>
          </div>

          {!submitted ? (
            <form className="volunteer-form" onSubmit={handleFindMatches}>
              <div className="form-group">
                <label htmlFor="location" className="form-label">
                  Where would you need a volunteer?
                </label>
                <div className="select-wrapper">
                  <select
                    id="location"
                    name="location"
                    className="form-select"
                    value={formData.location}
                    onChange={handleChange}
                  >
                    <option value="">Select your location</option>
                    {locationOptions.map((location, index) => (
                      <option key={index} value={location}>
                        {location}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.location && (
                  <div className="error-message">{errors.location}</div>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="workType" className="form-label">
                  What kind of work are you seeking?
                </label>
                <div className="select-wrapper">
                  <select
                    id="workType"
                    name="workType"
                    className="form-select"
                    value={formData.workType}
                    onChange={handleChange}
                  >
                    <option value="">Select work type</option>
                    {workTypeOptions.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.workType && (
                  <div className="error-message">{errors.workType}</div>
                )}
              </div>

              <button type="submit" className="btn-submit" disabled={isLoading}>
                {isLoading ? 'Finding Matches...' : 'Find a Match'}
              </button>

              <p className="form-info">
                Our system will match your needs with qualified volunteers in
                your area. You'll be notified when suitable volunteers are
                available to help.
              </p>
            </form>
          ) : (
            <div className="volunteer-form">
              <h2 className="success-title">Request Submitted!</h2>
              <p className="success-message">
                We've received your request for assistance in{' '}
                <strong>{formData.location}</strong> for{' '}
                <strong>{formData.workType}</strong>. We'll notify you when we
                find volunteers who can help with your needs.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false)
                  setFormData({ location: '', workType: '' })
                }}
                className="btn-submit"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
