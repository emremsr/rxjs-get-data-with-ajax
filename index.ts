import { Observable, Subscriber } from 'rxjs';

const helloButton = document.querySelector('#hello');

const HelloClick = new Observable<MouseEvent>((Subscriber) => {
  helloButton.addEventListener('click', (event) => {
    Subscriber.next(event as MouseEvent);
  });
});

HelloClick.subscribe((event) =>
  console.log('Sub 1 :', event.type, event.x, event.y)
);

HelloClick.subscribe((event) =>
  console.log('Sub 2 :', event.type, event.x, event.y)
);
