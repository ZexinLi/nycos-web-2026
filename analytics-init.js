/**
 * Vercel Web Analytics initialization
 * This file initializes Vercel Web Analytics for the NYCOS website.
 */

// Import the inject function from the local analytics module
import { inject } from './lib/vercel-analytics.js';

// Initialize analytics with auto mode (production on Vercel, development locally)
inject({
  mode: 'auto',
  debug: false
});

console.log('Vercel Web Analytics initialized');
