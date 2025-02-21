import userRoutes from './clients/clients.js';
import authRoutes from './auth/auth.js';
import hotelRoutes from './hotels/hotels.js';

export default{
    ...userRoutes,
    ...authRoutes,
    ...hotelRoutes
}
