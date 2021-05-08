import { Injectable } from '@angular/core';


@Injectable()
export class FilmingVisibleService {

  setLastTime(lastTime: number) {
    sessionStorage.setItem('lastTime', lastTime.toString());
  }

  getLastTime(): number {
    if (sessionStorage.getItem('lastTime')) {
      return Number(sessionStorage.getItem('lastTime'));
    }
  }

  // setPrintState(isComplete: boolean) {
  //   sessionStorage.setItem('isComplete', isComplete.toString());
  // }

  // getPrintState() {
  //   if (sessionStorage.getItem('isComplete')) {
  //     return sessionStorage.getItem('isComplete');
  //   }
  // }

  // setSelectedCells(selectedCells: string) {
  //   sessionStorage.setItem('selectedCells', selectedCells);
  // }

  // getSelectedCells(): string {
  //   if (sessionStorage.getItem('selectedCells')) {
  //     return sessionStorage.getItem('selectedCells');
  //   }
  // }

}