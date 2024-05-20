import { expect, test } from "vitest"
import { encodeWhereBody } from "./where"

type DemoObj = {
  id: number
  name: string
}
test("encodeWhereBody(empty) = ''", () => {
  expect(encodeWhereBody<DemoObj>({})).eq("")
})
test("encodeWhereBody(id=1) = 'id = 1'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { eq: 1 } })).eq("id = 1")
})

test("encodeWhereBody(id!=1) = 'id != 1'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { neq: 1 } })).eq("id != 1")
})

test("encodeWhereBody(id<5) = 'id < 5'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { lt: 5 } })).eq("id < 5")
})
test("encodeWhereBody(id<=5) = 'id <= 5'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { lte: 5 } })).eq("id <= 5")
})
test("encodeWhereBody(id>5) = 'id > 5'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { gt: 5 } })).eq("id > 5")
})

test("encodeWhereBody(id>=5) = 'id >= 5'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { gte: 5 } })).eq("id >= 5")
})

test("encodeWhereBody(id gte 5 and name='Hello, world') = 'id >= 5 & name = \"Hello, world\"'", () => {
  expect(
    encodeWhereBody<DemoObj>({ id: { gte: 5 }, name: { eq: "Hello, world" } })
  ).eq('id >= 5 & name = "Hello, world"')
})

test("encodeWhereBody(id in [8,9,11]) = 'id = (8,9,11);'", () => {
  expect(encodeWhereBody<DemoObj>({ id: { in: [8, 9, 11] } })).eq(
    "id = (8,9,11)"
  )
})
