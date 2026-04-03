export type RouteSearchParams = Promise<Record<string, string | string[] | undefined>>;

export async function getSingleSearchParam(
  searchParams: RouteSearchParams | undefined,
  key: string,
) {
  if (!searchParams) {
    return undefined;
  }

  const params = await searchParams;
  const value = params[key];

  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
}
