import MyButton from "~/components/MyButton.tsx"

export default function Homepage() {
  return (
    <div>
      Homepage
      <MyButton icon="mdi-light:home" to="/">
        Go Home
      </MyButton>
    </div>
  )
}
