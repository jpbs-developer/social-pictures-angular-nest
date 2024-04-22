import { CommonModule, NgOptimizedImage } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  HostListener,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { Photo } from '../../../core/models/photo';

@Component({
  selector: 'app-photos-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './photos-list.component.html',
  styleUrl: './photos-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class PhotosListComponent implements OnInit {
  private window!: Window;
  threshold = 600;
  photos = signal<Photo[]>([]);

  private readonly element = inject(ElementRef);

  @HostListener('window:scroll', ['$event.target'])
  windowScrollEvent(event: KeyboardEvent) {
    const heightOfWholePage = this.window.document.documentElement.scrollHeight;

    const heightOfElement = this.element.nativeElement.scrollHeight;
    const currentScrolledY = this.window.scrollY;
    const innerHeight = this.window.innerHeight;

    const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

    const scrollToBottom =
      heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;
    if (scrollToBottom < this.threshold) {
      this.generatePhotos(10);
    }
  }

  ngOnInit(): void {
    this.generatePhotos(50);
    this.window = window;
  }

  generatePhotos(numberOfPhotos: number): void {
    const newPhotos: Photo[] = [];

    for (
      let index = this.photos().length + 1;
      index <= this.photos().length + numberOfPhotos;
      index++
    ) {
      newPhotos.push({
        url: `https://source.unsplash.com/random/${index}`,
        description: 'lorem ipsum dolor sit amet lore m earum et  justo',
        id: index,
      });
    }

    this.photos.update((photos) => photos.concat(newPhotos));
  }
}
