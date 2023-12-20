export const UserRoles = { user: "user", admin: "admin" } as const;

export type UserRoles = keyof typeof UserRoles;

export interface UserData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  roles: UserRoles;
  addresses: Array<{
    country: string;
    zipCode: string;
    city: string;
    street: string;
    houseNumber: string;
  }>;
}
