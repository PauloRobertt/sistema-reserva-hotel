import userRoutes from './clients/clients.js';
import authRoutes from './auth/auth.js';

export default{
    ...userRoutes,
    ...authRoutes
}
