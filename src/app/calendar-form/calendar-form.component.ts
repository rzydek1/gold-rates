import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-calendar-form',
  templateUrl: './calendar-form.component.html',
  styleUrls: ['./calendar-form.component.css']
})
export class CalendarFormComponent {

  constructor(private http: HttpService, private router: Router) { }

  cal1: Date;
  cal2: Date;
  isValid = true;
  errorMessage = '';

// Walidacja danych przed wysłaniem zapytania do serwera
  onSubmit() {
    if (this.cal1 && this.cal2) {
      this.isValid = true;
  // ustaw dzisiejszą date do porwnania, bo cal1 i cal2 mają zawsze godzinę 12:00, co sprawia problem z porownaniem przed południem
      const today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 23, 59);
      if (this.cal1 > today  || this.cal2 > today ) {
        this.isValid = false;
        this.errorMessage = 'Nie można podać daty z przyszłości!';
      }

  // ewentualna zamiana przy odwrotnym wprowadzeniu danych
      if (this.cal1 > this.cal2) {
        const cal3 = this.cal1;
        this.cal1 = this.cal2;
        this.cal2 = cal3;
      }

  // sprawdz czy roznica dni nie przekracza 93 dni
      if ((this.cal2.getTime() - this.cal1.getTime()) / (1000 * 60 * 60 * 24) > 93) {
        this.isValid = false;
        this.errorMessage = 'Rożnica dni nie może przekroczyć 93 dni!';
      }

  // sprawdz czy data nie jest sprzed 02.01.2013
      if (this.cal1 < new Date(2013, 0, 2)) {
        this.isValid = false;
        this.errorMessage = 'Nie można podać daty sprzed 2 stycznia 2013 r.';
      }

    // Jeśli wszystko sie zgadza wyślij zapytanie
      if (this.cal1 && this.cal2 && this.isValid) {
        const start = this.changeTime(this.cal1);
        const end = this.changeTime(this.cal2);
        this.http.dateForPosts = {start, end};
        this.router.navigate(['/post']);
      }
    } else {
      this.isValid = false;
      this.errorMessage = 'Musisz wybrać daty!';
    }
  }

// funkcja wykorzystywana do zmiany formatu daty
  changeTime(date: Date) {
    return (
      date.getFullYear() + '-' +
      (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-' +
      (date.getDate() < 10 ? '0' + date.getDate() : date.getDate())
    );
  }
}
