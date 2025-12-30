# Product Requirements Document

Dog Walking Marketplace Web Application

## 1. Overview

This product is a web based marketplace that allows dog owners to find and request dog walking services from nearby independent walkers. The application serves as a business landing page combined with a searchable directory and request workflow.

The initial version focuses on simplicity, trust, and fast deployment using Next.js. Payments, advanced automation, and complex matching are explicitly out of scope for version one.

## 2. Goals and Success Criteria

### Primary Goals

1. Allow dog owners to easily discover dog walkers near their location.
2. Allow dog walkers to apply, create profiles, and receive walk requests.
3. Establish trust through clear profiles, reviews readiness, and admin approval.
4. Launch quickly with a scalable architecture.

### Success Metrics

1. Number of walk requests submitted per week.
2. Conversion rate from landing page to request submission.
3. Number of approved walker profiles.
4. Time to first successful request after a walker is approved.

## 3. Target Users

### Dog Owners

Individuals looking for reliable dog walking services near their home or work location.

### Dog Walkers

Independent contractors offering dog walking services in a defined service area.

### Admin

Platform operator responsible for approving walkers and monitoring activity.

## 4. Core User Flows

### Dog Owner Flow

1. User lands on the homepage.
2. User enters location manually or allows browser location.
3. User views a list of nearby dog walkers.
4. User clicks into a walker profile.
5. User submits a walk request with details.
6. User receives confirmation that the request was sent.

### Dog Walker Flow

1. Walker visits the site and clicks apply or become a walker.
2. Walker creates an account.
3. Walker completes onboarding and profile creation.
4. Walker submits profile for approval.
5. After approval walker receives walk requests and can respond offline.

### Admin Flow

1. Admin logs into dashboard.
2. Admin reviews new walker applications.
3. Admin approves or rejects profiles.
4. Admin views submitted walk requests.

## 5. Feature Requirements

### Public Landing Page

1. Clear value proposition for dog owners.
2. Explanation of how the service works.
3. Trust indicators such as vetting language.
4. Primary call to action to find walkers.
5. Secondary call to action to become a walker.

### Search and Discovery

1. Location input using city ZIP code or browser location.
2. Display list of walkers within a default radius.
3. Sort by distance and price.
4. Filter by availability and services offered.

### Walker Profiles

1. Profile photo.
2. Name and short bio.
3. Services offered.
4. Pricing per walk.
5. Service area.
6. Availability description.
7. Approval status visible internally only.

### Walk Request Flow

1. Request form with date and time window.
2. Dog details such as size and temperament.
3. Owner contact information.
4. Optional notes field.
5. Confirmation screen after submission.
6. Email notification to walker.

### Walker Onboarding

1. Account creation.
2. Profile setup form.
3. Service area selection.
4. Pricing input.
5. Availability input.
6. Submit for approval.

### Admin Dashboard

1. View pending walker applications.
2. Approve or reject walkers.
3. View all walk requests.
4. Disable or remove profiles if needed.

## 6. Non Goals for Version One

1. In app payments.
2. Automated matching.
3. Real time chat.
4. Reviews and ratings.
5. Mobile native applications.

## 7. Technical Requirements

### Frontend

1. Framework: Next.js with App Router.
2. Styling: Tailwind CSS or equivalent utility framework.
3. Responsive design for mobile and desktop.

### Backend and Data

1. Database: Managed Postgres using Supabase or equivalent.
2. Authentication: Managed auth such as Clerk or Supabase Auth.
3. API routes via Next.js server actions or API routes.

### Integrations

1. Google Maps or Mapbox for location and distance.
2. Email service such as SendGrid or Resend for notifications.

### Deployment

1. Hosting on Vercel.
2. Environment based configuration.
3. Logging and basic error tracking.

## 8. Data Models

### User

1. id
2. role owner or walker or admin
3. name
4. email
5. createdAt

### WalkerProfile

1. id
2. userId
3. bio
4. pricing
5. serviceArea
6. availability
7. status pending approved rejected

### WalkRequest

1. id
2. walkerId
3. ownerName
4. ownerEmail
5. location
6. date
7. timeWindow
8. dogDetails
9. notes
10. createdAt

## 9. Security and Trust

1. Walkers require admin approval before being visible.
2. Owner contact information is not public.
3. Basic terms and liability disclaimer on site.
4. Secure authentication and protected admin routes.

## 10. MVP Milestones

1. Landing page and branding.
2. Search and listing functionality.
3. Walker profile pages.
4. Walk request submission.
5. Walker onboarding and approval flow.
6. Admin dashboard.
7. Deployment and launch.

## 11. Open Questions for Future Versions

1. Payments and escrow.
2. Ratings and reviews.
3. Background checks.
4. Messaging system.
5. Subscription or commission model.
