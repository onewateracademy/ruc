import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Images {
  aboutImgs = [
      {
          src:'assets/img/about/IMG_4113.jpg',
          thumb:'assets/img/about/IMG_4113_thumb.jpg',
          caption:'IMG_4113'
      },
      {
        src:'assets/img/about/IMG_4173.jpg',
        thumb:'assets/img/about/IMG_4173_thumb.jpg',
        caption:'IMG_4173'
    },
    {
        src:'assets/img/about/IMG_4189.jpg',
        thumb:'assets/img/about/IMG_4189_thumb.jpg',
        caption:'IMG_4189'
    },
    {
        src:'assets/img/about/IMG_4259.jpg',
        thumb:'assets/img/about/IMG_4259_thumb.jpg',
        caption:'IMG_4259'
    }
  ]
}