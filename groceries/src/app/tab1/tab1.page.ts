import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  title = "My Grocery List";

  items = [
    {
      name: "Mountain Dew ",
      quantity: 2    
    },
    {
      name: "Wheat Flour",
      quantity: 1    
    },
    {
      name: "Pears",
      quantity: 3    
    },
    {
      name: "Egg Land eggs",
      quantity: 1    
    },
  ];

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }
  async removeItem(item, index) {
	  console.log("Removing Item - ", item);
      const toast = await this.toastCtrl.create({
        message: 'Removing Item - ' + item.name + " ...",
		duration: 3000
      });
      toast.present();

      this.items.splice(index, 1);
    }

  addItem() {
    console.log("Adding Item");
    this.showAddItemPrompt();
    }
  
  async showAddItemPrompt() {
    const prompt = await this.alertCtrl.create({
      message: "Please enter item...",
      inputs: [
          {
            name: 'name',
            placeholder: 'Name'
          },
          {
            name: 'quantity',
            placeholder: 'Quantity'
          },
        ],
        buttons: [
          {
            text: 'Cancel',
            handler: data => {
              console.log('Cancel clicked');
            }
          },
          {
            text: 'Save',
            handler: item => {
              console.log('Saved clicked', item);
              this.items.push(item);
            }
          }
        ]
      });
      prompt.present();
    }
  
  }
