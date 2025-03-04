# Storm-Shield

## Project Overview
StormShield is an emergency weather web application designed to aid **Puerto Rican residents, emergency responders, and volunteers** in preparing for, responding to, and recovering from hurricanes and other natural disasters. This platform integrates **real-time hurricane alerts, shelter mapping, and community-based volunteer coordination** to ensure user safety and connectivity during critical situations.

## Features
### Hurricane Alerts
- Fetches live weather warnings from NOAA & NWS APIs.
- Sends push notifications using Firebase Cloud Messaging.
- Displays real-time updates via WebSockets (Django Channels).
### Shelter Locator
- Interactive map integration with Leaflet.js and OpenStreetMap.
- Live updates on shelter availability and capacity.
### Volunteer Coordination System
- Allows users to request/offer help in disaster relief efforts.
- Matches volunteers with those in need via a structured database.
- Uses WebSockets for live communication.
### User Authentication & Profiles
- Secure user authentication via Django REST Framework + JWT.
- Allows profile creation for users, volunteers, and emergency responders.
- Implements role-based access control for different functionalities.
### Community-Based Emergency Support
- Community forum for users to post and share local updates.
- Enables verification of critical updates by trusted responders.
- Integrated chat and messaging features for coordination.
### System Resilience & Offline Functionality
- Runs on AWS for cloud deployment.
- Stores important data locally to function during network outages.
- Implements caching strategies for quick access to key information.

