import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import {Order} from './order.component';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class OrdersService {

    private headers=new Headers({'Content-Type':'application/json'});
    private apiUrl="https://139.13.82.31:8443/api/laserengraver/orders"; //139.13.82.31      127.0.0.1

    constructor (private http: Http){};
    
    //Méthode appelant le serveur Rest pour récupérer tous les ordres retourne un tableau d'ordre
    
    getOrders(): Promise<Order[]> {
    return this.http.get(this.apiUrl)
               .toPromise().then(response=> JSON.parse(response.text()) as Order[]).catch(this.handleError);  
    }
    //Méthode appelant le serveur Rest pour récupérer un ordre avec un id précis retourne un tableau d'ordre
    
    getOrder(id): Promise<Order[]>{
        return this.http.get(this.apiUrl+"/"+id)
               .toPromise().then(response=> JSON.parse(response.text()) as Order[]).catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
}