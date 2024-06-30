import React from 'react'
import {Button} from './Button'
import "./styles/SponsorHeader.css"

const SponsorHeader = () => {
  return (
    <div class="sponsor-header">
        <h1>Sponsors</h1>
        <p>Sponsorship is a strategic alliance in which a company or organization provides financial or in-kind support to an individual, event, or project in exchange for promotional opportunities. This symbiotic relationship offers mutual benefits: the sponsor gains visibility and enhances its brand image, while the sponsored entity receives necessary resources to achieve its goals. Sponsorship can take various forms, including sports events, cultural festivals, non-profit activities, and individual endeavors such as athletes or artists. Effective sponsorships align the sponsor’s marketing objectives with the values and interests of the target audience, fostering goodwill and creating memorable experiences that drive brand loyalty and engagement. Through this partnership, both parties can leverage each other's strengths to reach broader audiences and achieve their respective objectives.</p>
        <Button buttonStyle={"btn--black"} buttonSize={"btn--medium"}>Become a Sponsor</Button>
    </div>
  )
}

export default SponsorHeader