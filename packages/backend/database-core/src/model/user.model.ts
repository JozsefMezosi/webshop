type UserRoles = "user" | "admin";

export interface UserData {
  email: string;
  password: string;

  firstName: string;
  lastName: string;
  roles: UserRoles;
  address: {
    country: string;
    zipCode: string;
    city: string;
    street: string;
    houseNumber: string;
  };
}
