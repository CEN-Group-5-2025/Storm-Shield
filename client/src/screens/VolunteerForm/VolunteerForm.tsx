import { useEffect, useState } from 'react'
import Footer from '../../components/Footer/Footer'
import { NavigationBar } from '../../components/NavigationBar'
import {
  ChildcareIcon,
  CommunicationIcon,
  CommunityCenterIcon,
  ConstructionIcon,
  FoodIcon,
  HospitalIcon,
  ITSupportIcon,
  LocationIcon,
  LogisticsIcon,
  MedicalIcon,
  SchoolIcon,
  ShelterIcon,
} from './icons'
import './volunteer-form.css'

// Types for our form data
interface FormData {
  location: string
  workType: string
}

// Types for volunteer match result
interface VolunteerMatch {
  id: number
  name: string
  location: string
  workType: string
  description: string
  contactName: string
  contactEmail: string
  contactPhone: string
}

export const VolunteerForm = () => {
  const [animateHeader, setAnimateHeader] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    location: '',
    workType: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [matchResult, setMatchResult] = useState<VolunteerMatch | null>(null)

  // Location options with icons
  const locationOptions = [
    { value: 'san_juan', label: 'San Juan', icon: <LocationIcon /> },
    { value: 'ponce', label: 'Ponce', icon: <LocationIcon /> },
    { value: 'mayaguez', label: 'Mayagüez', icon: <LocationIcon /> },
    { value: 'arecibo', label: 'Arecibo', icon: <LocationIcon /> },
    { value: 'fajardo', label: 'Fajardo', icon: <LocationIcon /> },
    {
      value: 'shelter_1',
      label: 'San Juan Community Center',
      icon: <ShelterIcon />,
    },
    {
      value: 'shelter_2',
      label: 'Ponce Emergency Shelter',
      icon: <ShelterIcon />,
    },
    { value: 'hospital_1', label: 'Metro Hospital', icon: <HospitalIcon /> },
    { value: 'school_1', label: 'Mayagüez High School', icon: <SchoolIcon /> },
    {
      value: 'comm_center',
      label: 'Arecibo Convention Center',
      icon: <CommunityCenterIcon />,
    },
  ]

  // Work type options with icons
  const workTypeOptions = [
    { value: 'medical', label: 'Medical Assistance', icon: <MedicalIcon /> },
    {
      value: 'construction',
      label: 'Construction & Repair',
      icon: <ConstructionIcon />,
    },
    {
      value: 'food',
      label: 'Food Preparation & Distribution',
      icon: <FoodIcon />,
    },
    {
      value: 'logistics',
      label: 'Transportation & Logistics',
      icon: <LogisticsIcon />,
    },
    {
      value: 'communication',
      label: 'Communications Support',
      icon: <CommunicationIcon />,
    },
    {
      value: 'it_support',
      label: 'IT & Technical Support',
      icon: <ITSupportIcon />,
    },
    {
      value: 'childcare',
      label: 'Childcare Services',
      icon: <ChildcareIcon />,
    },
  ]

  // Mock volunteer opportunities data - in a real app this would come from an API
  const volunteerOpportunities: VolunteerMatch[] = [
    {
      id: 1,
      name: 'Emergency Medical Support',
      location: 'san_juan',
      workType: 'medical',
      description:
        'Provide basic medical assistance at our San Juan community center for those affected by the recent flooding.',
      contactName: 'Dr. Carmen Rodríguez',
      contactEmail: 'carmen@stormshield.org',
      contactPhone: '787-555-1234',
    },
    {
      id: 2,
      name: 'Shelter Meal Service',
      location: 'shelter_1',
      workType: 'food',
      description:
        'Help prepare and serve meals to displaced residents at the San Juan Community Center shelter.',
      contactName: 'Miguel Torres',
      contactEmail: 'miguel@stormshield.org',
      contactPhone: '787-555-2345',
    },
    {
      id: 3,
      name: 'Home Repair Team',
      location: 'ponce',
      workType: 'construction',
      description:
        'Join our team helping repair homes damaged by wind and flooding in the Ponce area.',
      contactName: 'Roberto Sánchez',
      contactEmail: 'roberto@stormshield.org',
      contactPhone: '787-555-3456',
    },
    {
      id: 4,
      name: 'Medical Supply Distribution',
      location: 'hospital_1',
      workType: 'logistics',
      description:
        'Help organize and distribute medical supplies to those in need at Metro Hospital.',
      contactName: 'Linda Vázquez',
      contactEmail: 'linda@stormshield.org',
      contactPhone: '787-555-4567',
    },
    {
      id: 5,
      name: 'Emergency Communications',
      location: 'comm_center',
      workType: 'communication',
      description:
        'Support emergency communications efforts at Arecibo Convention Center to help reconnect families.',
      contactName: 'José Martínez',
      contactEmail: 'jose@stormshield.org',
      contactPhone: '787-555-5678',
    },
    {
      id: 6,
      name: 'Tech Support for Relief Center',
      location: 'school_1',
      workType: 'it_support',
      description:
        'Provide IT support for our emergency relief operations at Mayagüez High School.',
      contactName: 'Ana Gómez',
      contactEmail: 'ana@stormshield.org',
      contactPhone: '787-555-6789',
    },
    {
      id: 7,
      name: 'Childcare Services',
      location: 'shelter_2',
      workType: 'childcare',
      description:
        'Provide childcare services for families staying at the Ponce Emergency Shelter.',
      contactName: 'Sofia Rivera',
      contactEmail: 'sofia@stormshield.org',
      contactPhone: '787-555-7890',
    },
  ]

  useEffect(() => {
    // Animate header on load
    setTimeout(() => {
      setAnimateHeader(true)
    }, 300)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    // Clear previous match when selecting new options
    setMatchResult(null)
  }

  const handleFindMatch = () => {
    if (!formData.location || !formData.workType) {
      alert('Please select both a location and type of work')
      return
    }

    setIsLoading(true)

    // Simulate API call with a delay
    setTimeout(() => {
      // Find a match based on location and work type
      const match = volunteerOpportunities.find(
        (opp) =>
          opp.location === formData.location &&
          opp.workType === formData.workType,
      )

      // If no exact match, try to find match with just the work type
      const workTypeMatch = !match
        ? volunteerOpportunities.find(
            (opp) => opp.workType === formData.workType,
          )
        : null

      setMatchResult(match || workTypeMatch || null)
      setIsLoading(false)
    }, 1500)
  }

  // Helper to get location label by value
  const getLocationLabel = (value: string) => {
    const option = locationOptions.find((opt) => opt.value === value)
    return option ? option.label : ''
  }

  // Helper to get work type label by value
  const getWorkTypeLabel = (value: string) => {
    const option = workTypeOptions.find((opt) => opt.value === value)
    return option ? option.label : ''
  }

  return (
    <div className="volunteer-form-page">
      <div className="volunteer-form-content">
        <NavigationBar />

        <main className="volunteer-form-main">
          <div
            className={`volunteer-form-header ${animateHeader ? 'animate' : ''}`}
          >
            <h1 className="page-title">Sign Up to be a Volunteer</h1>
            <p className="volunteer-form-subtitle">
              Help your community recover by offering your skills and time.
              Select your preferred location and the type of work you're
              interested in.
            </p>
          </div>

          <div className="volunteer-form-container">
            <div className="form-group">
              <label htmlFor="location" className="form-label">
                Where would you like to volunteer?
              </label>
              <div className="select-wrapper">
                <select
                  id="location"
                  name="location"
                  className="form-select"
                  value={formData.location}
                  onChange={handleInputChange}
                >
                  <option value="">Select a location</option>
                  {locationOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="workType" className="form-label">
                What type of work would you like to do?
              </label>
              <div className="select-wrapper">
                <select
                  id="workType"
                  name="workType"
                  className="form-select"
                  value={formData.workType}
                  onChange={handleInputChange}
                >
                  <option value="">Select work type</option>
                  {workTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <button
              className={`find-match-button ${isLoading ? 'loading' : ''}`}
              onClick={handleFindMatch}
              disabled={isLoading}
            >
              {isLoading ? 'Finding matches...' : 'Find a Match'}
            </button>

            <p className="form-info">
              Once matched, you'll receive information about the volunteer
              opportunity and contact details.
            </p>
          </div>

          {matchResult && (
            <div className="match-result">
              <h3>Great Match Found!</h3>
              <div className="match-detail">
                <span className="match-detail-label">Opportunity:</span>{' '}
                {matchResult.name}
              </div>
              <div className="match-detail">
                <span className="match-detail-label">Location:</span>{' '}
                {getLocationLabel(matchResult.location)}
              </div>
              <div className="match-detail">
                <span className="match-detail-label">Type:</span>{' '}
                {getWorkTypeLabel(matchResult.workType)}
              </div>
              <div className="match-detail">
                <span className="match-detail-label">Description:</span>{' '}
                {matchResult.description}
              </div>

              <div className="match-contact">
                <h4>Contact Information</h4>
                <div className="match-detail">
                  <span className="match-detail-label">Name:</span>{' '}
                  {matchResult.contactName}
                </div>
                <div className="match-detail">
                  <span className="match-detail-label">Email:</span>{' '}
                  {matchResult.contactEmail}
                </div>
                <div className="match-detail">
                  <span className="match-detail-label">Phone:</span>{' '}
                  {matchResult.contactPhone}
                </div>
              </div>
            </div>
          )}
        </main>

        <Footer />
      </div>
    </div>
  )
}
