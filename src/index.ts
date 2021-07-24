import express,{Application} from 'express'
import cors from 'cors'
import morgan from 'morgan';

import taskRoutes from './routes/taskRoutes';

/**
 * class main of the API
 */
class Server {
    public app: Application;
    /**
     * constructor don't parameter
     * app what initializa express
     */
    constructor(){
        this.app =express();
        this.config();
        this.routes();
    }

    /**
     * config port of the serve and utiliza  modules how cors morgan and extension express 
     * @returns {void}
     */
    config():void{
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }
    
    /**
     * this method router for the routes in the server
     * @returns {void}
     */
    routes():void{
     this.app.use(taskRoutes);
    }

    /**
     * method for start the server in the port 3000 or the port what have config the system
     */
     start(){
         this.app.listen(this.app.get('port'),()=>{
             console.log('server on port', this.app.get('port'));
         });
     }


}
const server = new Server();
server.start();