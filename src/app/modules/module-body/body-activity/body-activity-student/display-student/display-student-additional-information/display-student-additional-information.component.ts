import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-display-student-additional-information',
  templateUrl: './display-student-additional-information.component.html',
  styleUrls: ['./display-student-additional-information.component.scss']
})
export class DisplayStudentAdditionalInformationComponent implements OnChanges {

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  @Input() lastNameInfo!: string;
  @Input() firstNameInfo!: string;
  @Input() ageInfo!: string;
  @Input() cityInfo!: string;
  @Input() facultyInfo!: string;
  @Input() specialityInfo!: string;
  @Input() AIactive!: boolean;

  AIopen()
  {
    if (this.AIactive === false)
    {
      this.AIactive = true;
    }
  }

  AIclose()
  {
    this.AIactive = false;
  }


}
