import { Injectable } from '@angular/core';
//import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import io from 'socket.io-client';


const socket = io('http://localhost:3000');
@Injectable({
  providedIn: 'root'
})
export class ServiceChartService {

  constructor() { }
}
