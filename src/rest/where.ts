import { mapValue } from "./body"

export type WhereBody<
  T extends object,
  TKey extends keyof T & string = keyof T & string,
> = Partial<Record<TKey, WhereBodyValue<T, TKey>>>

export type WhereBodyValue<
  T extends object,
  TKey extends keyof T & string = keyof T & string,
> = {
  eq?: T[TKey]
  neq?: T[TKey]
  lt?: T[TKey]
  lte?: T[TKey]
  gt?: T[TKey]
  gte?: T[TKey]
  in?: T[TKey][]
}

export function whereBodyValueParts<
  T extends object,
  TKey extends keyof T & string = keyof T & string,
>(key: TKey, value: WhereBodyValue<T, TKey>): string[] {
  const parts: string[] = []
  if (value.eq) {
    parts.push(`${key} = ${mapValue(value.eq)}`)
  }
  if (value.lt) {
    parts.push(`${key} < ${mapValue(value.lt)}`)
  }
  if (value.lte) {
    parts.push(`${key} <= ${mapValue(value.lte)}`)
  }
  if (value.gt) {
    parts.push(`${key} > ${mapValue(value.gt)}`)
  }
  if (value.gte) {
    parts.push(`${key} >= ${mapValue(value.gte)}`)
  }
  if (value.neq) {
    parts.push(`${key} != ${mapValue(value.neq)}`)
  }
  if (value.in) {
    parts.push(`${key} = (${value.in.map(mapValue).join(",")})`)
  }
  return parts
}

export function encodeWhereBody<
  T extends object,
  TKey extends keyof T & string = keyof T & string,
>(body: WhereBody<T, TKey>): string {
  return Object.entries(body)
    .flatMap(([key, value]) =>
      whereBodyValueParts<T, TKey>(
        key as TKey,
        value as WhereBodyValue<T, TKey>
      )
    )
    .join(" & ")
}
