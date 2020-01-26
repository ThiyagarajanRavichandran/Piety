import { Component, OnInit, ViewChild,ViewEncapsulation } from '@angular/core';
import { DialogComponent, DialogUtility } from '@syncfusion/ej2-angular-popups';
import { NumericTextBoxComponent } from '@syncfusion/ej2-angular-inputs';
import { DatePickerComponent } from '@syncfusion/ej2-angular-calendars';
import { enableRipple, addClass } from '@syncfusion/ej2-base';
import { AccordionComponent, AccordionItemsDirective, AccordionItemDirective } from '@syncfusion/ej2-angular-navigations';

enableRipple(true);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {

  @ViewChild(('accordion'), {static: false}) accordion;
   
   public dateValues: Date[] = [new Date('9/1/2019'), new Date('9/15/2019'), new Date('9/3/2019'), new Date('9/25/2019')];
   public multiSelect: Boolean = true;
  

  public priestDetails = false;
  public  priestView = false;
  constructor() {
    this.priestDetails = true;
    this.priestView =false;
    
  }

  public eventTypeData: { [key: string]: Object }[] = [{ Id: 'GANAPATHI_HOMAM', Event: 'Ganapathi Homam' },
  { Id: 'NAVAGRAHA_HOMAM', Event: 'Navagraha Homam' }, { Id: 'AYUSHYA_HOMAM', Event: 'Ayushya Homam' },
  { Id: 'SUDARSANA_HOMAM', Event: 'Sudarsana Homam' }, { Id: 'UGRA_RADHA_SANTI', Event: 'Ugra Radha Santi' }];
  public eventTypeFields: Object = { text: 'Event', value: 'Id' };
  public eventTypeText: string = "Event Type";

  public priestData: { [key: string]: Object }[] = [{ Id: 'A1', Name: 'V.P. Iyer Samathi' },
  { Id: 'A2', Name: 'Periyazhvar' }, { Id: 'A3', Name: 'Velukkudi Krishnan' }, 
  { Id: 'A4', Name: 'Tirumalai Krishnamacharya' }];
  public priestFields: Object = { text: 'Name', value: 'Id' };
  public priestText: string = "Select a Priest";


  public hostdata: { [key: string]: Object }[] = [{ Id: 'TEMPLE', Hostby: 'Temple' },
  { Id: 'HOUSE', Hostby: 'House' }, { Id: 'OTHER', Hostby: 'Other Venue' }];
  public hostfields: Object = { text: 'Hostby', value: 'Id' };
  public hosttext: string = "Hosted By";
    

  carouselCardVal: any = [
    {
      "priestImage": "./assets/profileImage/A1.jpg",
      "priestname": " V.P. Iyer Samadhi",
    },

    {
      "priestImage": "./assets/profileImage/A2.jpg",
      "priestname": " Periyalvar",
    },

    {
      "priestImage": "./assets/profileImage/A3.jpg",
      "priestname": " Tirumalai Krishnamacharya",
    },
    {
      "priestImage": "./assets/profileImage/A4.jpg",
      "priestname": " Velukkudi Krishnan",
    }, {
      "priestImage": "./assets/profileImage/A5.jpg",
      "priestname": " V. D. Trivadi",
      "className": "vitrine2"
    }, {
      "priestImage": "./assets/profileImage/A6.jpg",
      "priestname": " S.Subramania Iyer",
    },
    {
      "priestImage": "./assets/profileImage/A2.jpg",
      "priestname": " V. Swaminatha Iyer",
    },

    {
      "priestImage": "./assets/profileImage/A3.jpg",
      "priestname": " R. K. Narayan",

    },

    {
      "priestImage": "./assets/profileImage/A4.jpg",
      "priestname": "Gopalan Kasturi",

    },
    {
      "priestImage": "./assets/profileImage/A5.jpg",
      "priestname": " Kalki Sadasivam",

    }, {
      "priestImage": "./assets/profileImage/A6.jpg",
      "priestname": " Subramaniya",

    }, {
      "priestImage": "./assets/profileImage/A2.jpg",
      "priestname": " S. Subramania Iyer", 

    }
  ];

  type1() {
    this.priestDetails = true;
    this.accordion.enableItem(0, true);
    this.accordion.enableItem(1, false);
    this.accordion.enableItem(2, false);
    this.accordion.enableItem(3, false);
    this.accordion.expandItem(true, 0);
  }

  ngOnInit() {        
  }


  public acrdnCreated(): void {
    this.accordion.enableItem(1, false);
    this.accordion.enableItem(2, false);
  }

     backClickTwo(){
      this.accordion.enableItem(0, true);      
      this.accordion.enableItem(1, false);
      this.accordion.enableItem(2, false);
      this.accordion.expandItem(true, 0);
      
    }

   btnClick(){
     console.log("Next");     
    this.accordion.enableItem(1, true);
     this.accordion.enableItem(0, false);
      this.accordion.expandItem(true, 1);
  }
   btnClickTwo() {
    this.accordion.enableItem(1, false);
    this.accordion.enableItem(2, true);
    this.accordion.expandItem(true, 2);
  }
  
  
   secondBack(){
    this.accordion.enableItem(1, true);      
    this.accordion.enableItem(0, false);
    this.accordion.enableItem(2, false);
    this.accordion.expandItem(true, 1);
    
  }

Paymant(){
  this.accordion.enableItem(1, false);
  this.accordion.enableItem(2, false);
  this.accordion.enableItem(3, true);
  this.accordion.expandItem(true, 3);
}
payBackbtnClick(){
  this.accordion.enableItem(2, true);      
  this.accordion.enableItem(0, false);
  this.accordion.enableItem(1, false);
  this.accordion.enableItem(3, false);
  this.accordion.expandItem(true, 2);
}



  
public onPayDialog = function(event: any): void {
  DialogUtility.confirm('Your event (E2019CVX345) registered successfully! <br/> You will be receiving a confirmation email soon. For further questions / comments, please contact temple authorities.');
}



onLoad(args: any) {
	/*Date need to be customized*/
        if (args.date.getDate() === 10) {
           let span: HTMLElement;
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'birthday']);
             args.element.firstElementChild.setAttribute('title', 'Birthday !');
            args.element.setAttribute('title', 'Sashtiyaptha Poorthy');
             args.element.setAttribute('data-val', 'Sashtiyaptha Poorthy');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 15) {
            let span: HTMLElement;
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'farewell']);
             args.element.firstElementChild.setAttribute('title', 'Ugra Radha Santi');
            args.element.setAttribute('title', 'Ugra Radha Santi');
            args.element.setAttribute('data-val', 'Ugra Radha Santi');
            args.element.appendChild(span);
        }
        if (args.date.getDate() === 20) {
           let span: HTMLElement;
            span = document.createElement('span');
            span.setAttribute('class', 'e-icons highlight');
            addClass([args.element], ['special', 'e-day', 'vacation']);
            args.element.firstElementChild.setAttribute('title', 'Graha Pravesham');
            args.element.setAttribute('title', 'Graha Pravesham');
            args.element.setAttribute('data-val', 'Graha Pravesham');
            args.element.appendChild(span);
        }
    }    
    onValueChange(args: any) {
		let title: string = '';
        if(args.event){
	        /*Displays selected date in the label*/
            title = args.event.currentTarget.getAttribute('data-val');
            title = title == null ? "" : " ( "+title+" )";
        }
        (document.getElementById('selectedVal')).textContent = 'Event Details: ';

		(document.getElementById('selected')).textContent = args.value.toLocaleDateString() + title;
    }


}

