import React from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function ContactInfoWidget({ withIcon, title }) {
  return (
    <>
      {title && <h2 className="cs-widget_title">{title}</h2>}
      <ul className="cs-menu_widget cs-style1 cs-mp0">
        <li>
          <Link
            href={`https://wa.me/8801958392794`}
            target='_blank'
          >
            {withIcon ? <span className='cs-accent_color'><Icon icon="material-symbols:add-call-rounded" /></span> : ''}
            +880 1958-392794
          </Link>
        </li>
        <li>
          <Link
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=galaxysparkbd@gmail.com`}
            target='_blank'
          >
            {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:envelope" /></span> : ''}
            galaxysparkbd@gmail.com
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
          // target='_blank'
          >
            {withIcon ? <span className='cs-accent_color'><Icon icon="mdi:map-marker" /></span> : ''}
            26, 1 Farazi para lane, Khulna 9100 <br />Khulna, Bangladesh
          </Link>
        </li>
      </ul>
    </>
  )
}
