import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { FormGroup, FormControl } from '@angular/forms';
import { CarsService } from '../../../../shared/services/cars.service';
import { Car } from '../../../../shared';
import { Router } from '@angular/router';

@Component({
  selector: 'car-list',
  templateUrl: 'car-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarListComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator: MatPaginator;

  displayedColumns: string[] = ['id', 'make', 'model', 'year', 'action'];

  dataSource: any;

  // carDataSource$: Observable<MatTableDataSource<Car>> =
  //   this.carsService.cars.pipe(
  //     map((things) => {
  //       const dataSource = this.dataSource;
  //       dataSource.data = things;
  //       return dataSource;
  //     })
  //   );

  filterOn: boolean = false;
  form = new FormGroup({
    id: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    year: new FormControl(''),
    filterOn: new FormControl(false),
  });

  constructor(
    private carsService: CarsService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  getCarData(): void {
    this.carsService.getCars().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Car>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.filterPredicate = this.customFilter;
      this.form.valueChanges.subscribe((res: any) => {
        res.make = res.make.toUpperCase();
        res.model = res.model.toUpperCase();
        this.dataSource.filter = JSON.stringify(res);
      });
      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnInit() {
    this.getCarData();
  }
  filterToggle() {
    this.filterOn = !this.filterOn;
    this.form.controls.filterOn.setValue(this.filterOn);
  }
  customFilter = (data: Car, filter: string) => {
    const filterData = JSON.parse(filter);
    let ok: boolean = true;
    if (!filterData.filterOn) return true;
    if (filterData.id) ok = data.id == filterData.id;
    if (filterData.make)
      ok = ok && data.make.toUpperCase().indexOf(filterData.make) >= 0;
    if (filterData.model)
      ok = ok && ('' + data.model).indexOf(filterData.model) >= 0;
    if (filterData.year)
      ok = ok && ('' + data.year).indexOf(filterData.year) >= 0;
    return ok;
  };

  navigateToCarDetail(id: number): void {
    const url = 'car-list/car/' + id;
    this.router.navigate([url]);
  }
}
