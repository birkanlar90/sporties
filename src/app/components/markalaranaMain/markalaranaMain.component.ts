import { Component, OnInit } from '@angular/core';

import { Kayit } from '../../models/kayit';
import { Sonuc } from '../../models/sonuc';
import { map } from 'rxjs/operators'
import { FbServisService3 } from 'src/app/services/fbServis.service';

@Component({
  selector: 'app-markalaranaMain',
  templateUrl: './markalaranaMain.component.html',
  styleUrls: ['./markalaranaMain.component.css']
})
export class MarkalaranaMainComponent implements OnInit {
  kayitlar: any;
  secKayit: Kayit = new Kayit();
  sonuc: Sonuc = new Sonuc();


  constructor(public fbServis: FbServisService3
    ) { }

  ngOnInit() {
    this.KayitListele();
    this.secKayit.key = null;
  }
  KayitSec(k: Kayit) {
    Object.assign(this.secKayit, k);

  }

  KayitListele() {
    this.fbServis.KayitListele().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        )
      )
    ).subscribe(data => {
      this.kayitlar = data;
    });

  }


}

