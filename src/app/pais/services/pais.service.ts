import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable( {
  providedIn: 'root'
} )
export class PaisService {

  private apiURL: string = `https://restcountries.com/v3.1`;

  get getParams() {
    return new HttpParams()
      .set( 'fields', 'name,capital,flags,population,cca3,cca2,ccn3,translations' );
  }

  constructor ( private http: HttpClient ) { }



  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/name/${ termino }`;

    return this.http.get<Country[]>( url, { params: this.getParams } );
  }

  buscarCapital( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.getParams } );
  }

  getPaisPorCode3( id: string ): Observable<Country> {

    const url = `${ this.apiURL }/alpha/${ id }`;
    return this.http.get<Country>( url, { params: this.getParams } );
  }

  buscarPorRegion( termino: string | Object ): Observable<Country[]> {



    const url = `${ this.apiURL }/region/${ termino }`;
    return this.http.get<Country[]>( url, { params: this.getParams } );

  }

}
