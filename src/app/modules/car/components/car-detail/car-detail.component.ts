import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';
import { CarsService } from '../../../../shared/services/cars.service';
import { Car } from '../../../../shared';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'car-detail',
  templateUrl: 'car-detail.component.html',
  styleUrls: ['car-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarDetailComponent implements OnInit {
  cars: Car[];
  car: Car;

  constructor(
    private carService: CarsService,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.carService.getCars().subscribe((res) => {
      const id = +this.route.snapshot.params['id'];
      this.cars = res;
      this.car = this.getCarByCarById(id, this.cars);
    });
    this.changeDetectorRef.detectChanges();
  }

  getCarByCarById(id: number, cars: Car[]): Car {
    return cars.filter((car) => car.id === id)[0];
  }

  getUrlImg(car: Car): string {
    return `assets/images/${car.model}.jpg`;
  }
}
