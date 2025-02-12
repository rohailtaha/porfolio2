export function getProtocol(): string {
  return process.env.PROTOCOL!;
}

export function getDomain(): string {
  return process.env.DOMAIN!;
}

export function getAbsoluteUrl(path: string = ''): string {
  return `${getProtocol()}://${getDomain()}${path}`;
}
