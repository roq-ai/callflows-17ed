const mapping: Record<string, string> = {
  admins: 'admin',
  companies: 'company',
  diagrams: 'diagram',
  owners: 'owner',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
