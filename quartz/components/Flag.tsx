import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Flag = (_props: QuartzComponentProps) => {
    return (
      <img src="https://rainy.gay/pride/bv/progress.png" alt="Progress Pride Flag" />
    )
  }

  return Flag
}) satisfies QuartzComponentConstructor