import {TypeClientInterface} from "../type-client/type-client.interface";

export interface ClientInterface {
  clientId?:     number;
  typeClientId: number;
  name:         string;
  lastName:     string;
  dni:          string;
  email:        string;
  birthDate:    Date;
  phoneNumber:  string;
  status:       boolean;
  typeClientEntity?: TypeClientInterface;
}
