export type IgdbBody = Record<string, "*" | string | number>

export function mapValue(value: any): string {
  if (value === "*" || typeof value !== "string") return String(value)

  return `"${value.replaceAll('"', "")}"`
}
export function encodeIgdbBody(body: IgdbBody): string {
  return Object.entries(body)
    .map(([key, value]) => `${key} ${mapValue(value)};`)
    .join(" ")
}
