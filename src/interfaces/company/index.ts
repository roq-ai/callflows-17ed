import { AdminInterface } from 'interfaces/admin';
import { DiagramInterface } from 'interfaces/diagram';
import { OwnerInterface } from 'interfaces/owner';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  admin?: AdminInterface[];
  diagram?: DiagramInterface[];
  owner?: OwnerInterface[];
  user?: UserInterface;
  _count?: {
    admin?: number;
    diagram?: number;
    owner?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
