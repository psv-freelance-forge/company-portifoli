import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/company_portfolio";

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env');
}

let cached = (global as any).mongoose;

if (!cached) {
  cached = (global as any).mongoose = { conn: null, promise: null };
}

import dns from 'node:dns';

// Force node to prefer IPv4 DNS resolution globally
dns.setDefaultResultOrder('ipv4first');

async function connectToDatabase() {
  if (cached.conn) {
    console.log("🟢 Reusing existing MongoDB connection.");
    return cached.conn;
  }

  if (!cached.promise) {
    console.log("⏳ Initializing new MongoDB connection...");
    const opts = {
      bufferCommands: false,
      family: 4, 
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
      console.log('✅ Successfully connected to MongoDB Database!');
      return mongoose;
    }).catch(err => {
      console.error('❌ MongoDB Connection Error:', err.message);
      throw err;
    });
  }
  
  try {
    cached.conn = await cached.promise;
  } catch (e) {
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectToDatabase;
