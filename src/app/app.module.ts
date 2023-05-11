import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module'; 
//AppRoutingModule, uygulamanın yönlendirme işlemlerini yönetmek için kullanılan bir modülün import edildiği yerdir.
import { AppComponent } from './app.component';
//AppComponent, uygulamanın ana bileşenidir. Bu bileşen, uygulamanın kök bileşeni olarak belirlenir ve diğer bileşenleri içerebilir.
import { DisplayphotoComponent } from './displayphoto/displayphoto.component';
//DisplayphotoComponent, uygulamanın içinde yer alacak bir başka bileşendir.

@NgModule({ //NgModule decorator'ü, AppModule sınıfının bir Angular modülü olduğunu belirtmek için kullanılır.
  declarations: [ //declarations, AppModule'da kullanılacak bileşenlerin tanımlandığı alandır. 
    AppComponent,
    DisplayphotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    /*imports, AppModule'un kullanacağı diğer modüllerin import edildiği alandır.
      BrowserModule, tarayıcı tarafında çalışan uygulamalar için gereklidir.
      AppRoutingModule, yönlendirme işlemlerini yönetmek için kullanılan modülü temsil eder. 
      HttpClientModule, HTTP istekleri yapmak için HttpClient modülünün kullanılmasını sağlar. */
  ],
  providers: [],
  //providers, AppModule'da kullanılacak servislerin veya diğer bağımlılıkların belirtildiği alandır

  bootstrap: [AppComponent]
  /*bootstrap, AppModule'un başlatma bileşenini belirtir. 
    AppComponent, uygulamanın başlatma bileşeni olarak belirlenmiştir.
    Bu, uygulama çalıştırıldığında ilk olarak AppComponent'in yükleneceği anlamına gelir. */
})
export class AppModule { }
/*AppModule, genellikle uygulamanın ana yapılandırma dosyası olarak kullanılır. 
  Bu modül, uygulamanın temel bileşenlerini, modüllerini ve yönlendirmelerini tanımlayarak uygulamanın genel yapısını belirler. */
