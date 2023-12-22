export const UserRoles = { user: "user", admin: "admin" } as const;

export type UserRoles = keyof typeof UserRoles;
