import { QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default (() => {
  const Webring = (_props: QuartzComponentProps) => {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "15px", backgroundColor: "var(--light)", padding: "5px 10px", borderRadius: "8px", border: "1px solid var(--lightgray)" }}>
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=prev" style={{ color: "var(--dark)", textDecoration: "none", fontSize: "16px" }}>{"⬅️"}</a>
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/" target="_blank"><img src="https://WebRing.skule.ca/img/icon.svg" alt="SKULE WebRing" style={{ width: "44px", height: "34px"}} /></a>
        <a href="https://WebRing.skule.ca/#https://rango-lf.github.io/rango-lf/?nav=next" style={{ color: "var(--dark)", textDecoration: "none", fontSize: "16px" }}>{"➡️"}</a>
      </div>
    )
  }

  return Webring
}) satisfies QuartzComponentConstructor