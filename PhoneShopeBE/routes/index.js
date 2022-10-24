import authRouter from './auth.router.js';
import phoneRouter from './phone.router.js';


const routes = (app) => {
    app.use('/auth',   authRouter );
    app.use('/phone',   phoneRouter );

    
}
export default routes;