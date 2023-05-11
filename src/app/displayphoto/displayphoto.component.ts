import { Component,OnInit } from '@angular/core';
import { PhotoService } from '../photo.service'
/*Bu kod örneği, bir bileşen olan DisplayphotoComponent'i temsil eder.
 DisplayphotoComponent, PhotoService servisini kullanarak rastgele bir fotoğrafın alınmasını ve görüntülenmesini sağlar.
 */
@Component({
  //@Component decorator'ü, DisplayphotoComponent'in bir Angular bileşeni olduğunu belirtir.

  selector: 'app-displayphoto',
  templateUrl: './displayphoto.component.html',
  styleUrls: ['./displayphoto.component.css']
  //Selector olarak 'app-displayphoto' kullanılır ve bileşenin HTML şablonu ve CSS dosyasının yolları belirtilir.

})
export class DisplayphotoComponent implements OnInit {
  //DisplayphotoComponent sınıfı, OnInit arayüzünü uygular.
  // Bu, bileşenin başlatılması sırasında gerçekleştirilecek işlemleri tanımlamak için kullanılır.
  
  photoUrl: string ='';
  //photoUrl değişkeni, görüntülenecek fotoğrafın URL'sini tutar.
  
  constructor( private photoService:PhotoService) {
    //Constructor, PhotoService servisini enjekte eder. 
    //Böylece, PhotoService'de tanımlanan getPhotos() fonksiyonunu kullanabiliriz.

  }
  
  ngOnInit(): void {
    this.getImages();
    //ngOnInit() fonksiyonu, bileşenin başlatılması sırasında çağrılır ve getImages() fonksiyonunu çalıştırır. 
    //Bu, bileşen yüklendiğinde rastgele bir fotoğrafın alınmasını sağlar.
  }

  getImages(){
    this.photoService.getPhotos().subscribe(response =>{
      this.photoUrl = response.urls.regular;
      //console.log(this.photoUrl);

      /*getImages() fonksiyonu, PhotoService'deki getPhotos() fonksiyonunu 
      çağırarak Unsplash API'sinden rastgele bir fotoğrafı alır. 
      Subscribe yöntemiyle, API'den gelen yanıtı dinler 
      ve photoUrl değişkenine yanıttaki fotoğrafın regular URL'sini atar. */
    });
  }

  onClick(){
    this.getImages();
    /*onClick() fonksiyonu, bileşen içinde bir düğmeye tıklama olayını temsil eder. 
    Bu düğmeye tıklandığında getImages() fonksiyonu çağrılır ve yeni bir rastgele fotoğraf alınarak görüntülenir. */
  }


}
/*Bileşen, PhotoService'i kullanarak Unsplash API'sinden rastgele fotoğrafları alır
 ve bu fotoğrafları HTML şablonunda görüntülemek için photoUrl değişkenini kullanır.
 Bileşen yüklendiğinde veya düğmeye tıklandığında yeni fotoğraflar alınabilir. */