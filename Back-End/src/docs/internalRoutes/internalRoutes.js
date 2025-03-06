import userRoutes from './clients/clients.js';
import authRoutes from './auth/auth.js';
import hotelRoutes from './hotels/hotels.js';
import quartoRoutes from './quartos/quartos.js';

export default{
    ...userRoutes,
    ...authRoutes,
    ...hotelRoutes,
    ...quartoRoutes
}
