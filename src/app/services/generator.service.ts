import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {
  getNewString = new Observable( (observer) => {
    setInterval(() => {
      const alphabet = "ABCDEFGHIKLMNOPQRSTVXYZ1234567890";
      let randomString = '';
      for (let i = 0; i < 5; i++) {
        const index = Math.floor(Math.random() * alphabet.length);
        randomString += alphabet[index];
      }
      observer.next(randomString);;
    }, 3000)
  });
}

