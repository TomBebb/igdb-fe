import { test, expect } from "vitest"
import { encodeIgdbBody } from "./body"
test("search body empty", () => expect(encodeIgdbBody({})).toBe(""))
test("search body single wildcard", () =>
  expect(encodeIgdbBody({ fields: "*" })).toBe("fields *;"))
test("search body single text", () =>
  expect(encodeIgdbBody({ text: "demo" })).toBe('text "demo";'))
test("search body single num", () =>
  expect(encodeIgdbBody({ answer: 42 })).toBe("answer 42;"))

test("encode body luigis mansion search", () =>
  expect(
    encodeIgdbBody({
      fields: "*",
      search: "luigi's mansion",
      limit: 50,
      offset: 0,
    })
  ).toBe(`fields *; search "luigi's mansion"; limit 50; offset 0;`))
