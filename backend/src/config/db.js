import mongoose from 'mongoose'

export async function connectDatabase() {
  const mongoUri = process.env.MONGO_URI

  if (!mongoUri) {
    console.warn('MONGO_URI not set. Running API without database connection.')
    return
  }

  await mongoose.connect(mongoUri)
  console.log('MongoDB Atlas connected')
}
