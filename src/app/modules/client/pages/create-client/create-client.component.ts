import { Component } from '@angular/core';
import {ClientService} from "../../../../data/services/client/client.service";
import {TypeClientService} from "../../../../data/services/type-client/type-client.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Message} from "primeng/api";
import {TypeClientInterface} from "../../../../data/interfaces/type-client/type-client.interface";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ClientInterface} from "../../../../data/interfaces/client/client.interface";

@Component({
  selector: 'app-create-client',
  standalone: false,
  templateUrl: './create-client.component.html',
  styleUrl: './create-client.component.scss'
})
export class CreateClientComponent {
  action: string[] = ['Create Client', 'Update Client'];
  status: object[] = [];
  typeClient: TypeClientInterface[] = [];
  messages!: Message[];

  formClient!: FormGroup;

  btnSave = false;

  id: number = 0;
  index: number = 0;
  constructor(
    private clientService: ClientService,
    private route: ActivatedRoute,
    private typeClientService: TypeClientService,
    private formBuilder: FormBuilder,
    ) {
    this.route.paramMap.subscribe((params: ParamMap)=> {
      this.id = parseInt(params.get('id') || '0');
    });
  }
  ngOnInit() {
    this.getTypeClient();
    this.status = [
      { name: 'Activo', value: true },
      { name: 'Inactivo', value: false },
    ];
    this.formClient = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      lastName: ['', Validators.required],
      status: [false, Validators.required],
      email: ['', Validators.required, Validators.email],
      typeClientId: [0, Validators.required],
      dni: ['', Validators.required],
      birthDate: ['', Validators.required],
    });
    if (this.id !== 0) {
      this.getCustomer();
    }
  }
  getTypeClient() {
    this.typeClientService.list().subscribe(
      (response: TypeClientInterface[]) => {
        this.typeClient = response;
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ]
      }
    )
  }

  saveCustomer(data: ClientInterface | any) {
    data.status = data.status.value;
    data.typeClientId = data.typeClientId.typeClientId;
    if (this.index === 0) {
      this.clientService.create(data).subscribe(
        (res: ClientInterface | any) => {
          this.formClient.reset();
          this.messages = [
            { severity: 'success', detail: 'Successfully created' },
          ]
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message },
          ]
        }
      );
    }
    if (this.index === 1) {
      console.log('Creating client');
      this.clientService.update(this.id, data).subscribe(
        (res: ClientInterface | any) => {
          this.formClient.reset();
          this.messages = [
            { severity: 'success', detail: 'Successfully updated' },
          ]
        },
        error => {
          console.log(error);
          this.messages = [
            { severity: 'error', detail: error.message },
          ]
        }
      )
    }
  }
  async getCustomer() {
    this.index = 1;
    this.clientService.getOne(this.id).subscribe(
      (res: ClientInterface) =>{
        console.log(res.dni);
        this.formClient.controls['name'].setValue(res.name);
        this.formClient.controls['phoneNumber'].setValue(res.phoneNumber);
        this.formClient.controls['lastName'].setValue(res.lastName);
        this.formClient.controls['status'].setValue(res.status);
        this.formClient.controls['email'].setValue(res.email);
        this.formClient.controls['status'].setValue(res.status);
        this.formClient.controls['birthDate'].setValue(res.birthDate);
        this.formClient.controls['dni'].setValue(res.dni);
        this.formClient.controls['typeClientId'].setValue(res.typeClientId);
      },
      error => {
        console.log(error);
        this.messages = [
          { severity: 'error', detail: error.message },
        ]
      }
    )
  }
}
