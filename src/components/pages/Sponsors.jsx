import React from 'react'
import SponsorHeader from '../SponsorHeader'
import SponsorList from "../SponsorList";

const Sponsors = () => {
  return (
    <div>
        <img src="/images/members.jpg" alt="Sponsors" className="sponsor-cover sponsor-img" />
        <SponsorHeader />
      <SponsorList/>
    </div>
  )
}

export default Sponsors