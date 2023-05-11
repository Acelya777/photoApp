import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Call } from '@angular/compiler';

interface CallResponse{
  urls:{
    regular : string
  };
}
/*İlk olarak, CallResponse adında bir arayüz (interface) tanımlanmıştır. 
  Bu arayüz, Unsplash API'sinden dönen yanıtın yapısını temsil etmektedir.
  Yanıt içindeki 'urls' nesnesi, 'regular' adında bir dize değerine sahip olmalıdır. */
  
@Injectable({ //@Injectable decorator'ü, bu sınıfın bir Angular servisi olduğunu belirtmek için kullanılır.

  providedIn: 'root'
  //'root' parametresi, servisin uygulama düzeyinde paylaşılacağını ve herhangi bir bileşen tarafından enjekte edilebileceğini gösterir

})
export class PhotoService {
//PhotoService sınıfı, HttpClient modülüne sahip bir örnek alır. Bu, HTTP istekleri yapmak için kullanılan bir Angular servisidir.

  constructor( private http:HttpClient) { } //private sadece bu classta kullanılır

  getPhotos(){
    return this.http.get<CallResponse>('https://api.unsplash.com/photos/random',{
      headers:{
        Authorization: 'Client-ID m0kiSPq8ichmRBfNEXEbgFPyMYyA2gZ50UR32CFHwfA'
      }
    }
      );
  }

  /*getPhotos() fonksiyonu, Unsplash API'sine GET isteği göndermek için HttpClient'in get() yöntemini kullanır.
   Unsplash API'sine yapılan istek, rastgele fotoğrafların alınması için kullanılır.

    getPhotos() fonksiyonu, Unsplash API'sine yapılan GET isteğinde Authorization başlığını da ayarlar.
  Bu başlık, Unsplash API'sine erişim sağlamak için bir istemci kimliği(Client ID) gerektirir. 
  API'nin belirli bir istemciyi tanıyabilmesi için bu kimlik kullanılır.

    Bu servis, getPhotos() fonksiyonunu çağıran herhangi bir bileşen tarafından kullanılabilir. 
  Bileşen, bu servisi enjekte etmek için PhotoService'i bağımlılık olarak belirtmelidir. Böylece,
  Unsplash API'sinden rastgele fotoğrafları almak için getPhotos() fonksiyonunu kullanabilir. */

}
