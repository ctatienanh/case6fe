import { Component, OnInit } from '@angular/core';
import {ScriptService} from "../../service/script.service";
import {LoginserviceService} from "../../service/loginservice.service";

@Component({
  selector: 'app-homeph',
  templateUrl: './homeph.component.html',
  styleUrls: ['./homeph.component.css']
})
export class HomephComponent implements OnInit {

  constructor(private script: ScriptService, private loginService: LoginserviceService) { }

  ngOnInit(): void {
    this.script.load('global', 'Chartbundle', 'jquerymin', 'apexchart', 'nouislider', 'wNumb', 'dashboard-1', 'custom', 'dlabnav').then(data => {
    }).catch(error => console.log(error));
  }

  logout(){
    this.loginService.logout();
  }
  }


