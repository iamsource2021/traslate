import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TraslateFactoryService {

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|es/) ? browserLang : 'en');
  }

  use(lang:string){
    this.translate.use(lang)
  }

  getLangs(): Array<string>{
    return this.translate.getLangs()
  }

  currentLang(lang:string): boolean{
    return lang === this.translate.currentLang;
  }
}
