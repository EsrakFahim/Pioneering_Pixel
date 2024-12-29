import React from 'react'
import Link from "next/link";
import { Icon } from '@iconify/react';
import Div from '../Div';

export default function SocialWidget({ socialLinks }) {
  const { facebook, instagram, linkedin, pinterest } = socialLinks || {};

  return (
    <Div className="cs-social_btns cs-style1">
      <Link href={facebook ? facebook : "#"} target='_blank' className="cs-center">
        <Icon icon="fa6-brands:facebook" />
      </Link>
      <Link href={linkedin ? linkedin : "#"} target='_blank' className="cs-center">
        <Icon icon="fa6-brands:linkedin-in" />
      </Link>
      <Link href={instagram ? instagram : "#"} target='_blank' className="cs-center">
        <Icon icon="fa6-brands:instagram" />
      </Link>
      <Link href={pinterest ? pinterest : "#"} target='_blank' className="cs-center">
        <Icon icon="fa6-brands:pinterest" />
      </Link>
    </Div>
  )
}
