# LV Industrial Solutions - MERN Website

Modern MERN project setup for **LV Industrial Solutions**.

## Current Scope

- Home page
- About page
- Reusable React components
- Static data arrays for website content

## Tech Stack

- Frontend: React + Vite + Tailwind CSS
- Backend: Node.js + Express
- Database: MongoDB Atlas (via `MONGO_URI`)

## Run Locally

1. Install root dependency:

   ```bash
   npm install
   ```

2. Install frontend and backend dependencies (already done once in this workspace):

   ```bash
   cd frontend && npm install
   cd ../backend && npm install
   cd ..
   ```

3. Configure backend environment:

   ```bash
   cp backend/.env.example backend/.env
   ```

4. Start both frontend and backend:

   ```bash
   npm run dev
   ```

## Deploy On Vercel (Root = `./`)

This repository is configured so you can deploy from repo root even if you cannot change the root directory in Vercel.

- Frontend build source: `frontend/`
- Frontend output: `frontend/dist`
- Backend API (same deploy): `api/*.js` serverless functions
- Config file used: `vercel.json`

### API Endpoints Available On Vercel

- `/api/health`
- `/api/company`
- `/api/inquiry` (POST starter endpoint)

## Project Structure

- `frontend/` - React app for public website
- `backend/` - Express API for backend services
- `api/` - Vercel serverless API functions for shared deployment
- `frontend/src/data/siteData.js` - static content arrays and text

## Notes

- No e-commerce or pricing pages are included.
- Product and gallery images are placeholders for now.
- Future pages planned: Services, Contact, Products, Gallery.
