import { User } from "./user";

export interface ISite {
  id: string;
  imgSrc: string;
  siteName: string;
  mainContact: User;
}
