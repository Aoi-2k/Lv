import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { connectDatabase } from './config/db.js'
import healthRoutes from './routes/health.js'

dotenv.config()

const app = express()
const port = process.env.PORT || 5001

app.use(cors())
app.use(express.json())

app.get('/', (_req, res) => {
  res.json({ message: 'LV Industrial Solutions backend is running.' })
})

app.use('/api', healthRoutes)

connectDatabase()
  .then(() => {
    app.listen(port, () => {
      console.log(`Backend server listening on port ${port}`)
    })
  })
  .catch((error) => {
    console.error('Failed to start backend:', error.message)
    process.exit(1)
  })
