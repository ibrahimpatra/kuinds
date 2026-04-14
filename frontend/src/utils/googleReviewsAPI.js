/**
 * GOOGLE REVIEWS API INTEGRATION NOTE
 * ====================================
 * 
 * The current reviews are static (hardcoded in googleReviews.js).
 * To fetch reviews dynamically from Google, you need:
 * 
 * 1. Google Places API (Paid - Requires Billing Account)
 *    - Enable "Places API" in Google Cloud Console
 *    - Get API key with Places API enabled
 *    - Cost: ~$17 per 1000 requests
 * 
 * 2. Place ID for your business:
 *    - Salmiya: ChIJe2T_kTWb_z4R_lWraaOOq0o
 *    - Farwaniya: ChIJR1KKhK6b_z4RxaGh-R8RXFY
 * 
 * 3. Implementation (when you have API key):
 *    - Uncomment the code below
 *    - Add REACT_APP_GOOGLE_PLACES_API_KEY to .env
 *    - Reviews will auto-update from Google
 * 
 * FREE ALTERNATIVE:
 * - Manually copy reviews from Google Maps every month
 * - Update googleReviews.js file
 * - No API costs
 * 
 * For now, using static reviews is the most cost-effective solution.
 */

// UNCOMMENT THIS CODE WHEN YOU HAVE GOOGLE PLACES API KEY
/*
import axios from 'axios';

const GOOGLE_PLACES_API_KEY = process.env.REACT_APP_GOOGLE_PLACES_API_KEY;
const PLACE_IDS = [
  'ChIJe2T_kTWb_z4R_lWraaOOq0o', // Salmiya
  'ChIJR1KKhK6b_z4RxaGh-R8RXFY'  // Farwaniya
];

export const fetchGoogleReviews = async () => {
  try {
    const allReviews = [];
    
    for (const placeId of PLACE_IDS) {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating&key=${GOOGLE_PLACES_API_KEY}`
      );
      
      if (response.data.result && response.data.result.reviews) {
        const reviews = response.data.result.reviews.map((review, index) => ({
          id: `${placeId}-${index}`,
          name: review.author_name,
          rating: review.rating,
          text: review.text,
          date: review.relative_time_description,
          avatar: review.author_name.split(' ').map(n => n[0]).join('')
        }));
        
        allReviews.push(...reviews);
      }
    }
    
    // Sort by rating and date
    return allReviews
      .filter(r => r.rating >= 4) // Only 4-5 star reviews
      .sort((a, b) => b.rating - a.rating)
      .slice(0, 10); // Top 10 reviews
      
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    return [];
  }
};

// Usage in component:
// useEffect(() => {
//   fetchGoogleReviews().then(reviews => {
//     if (reviews.length > 0) {
//       setReviews(reviews);
//     }
//   });
// }, []);
*/

export default null;
