"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Div from '../Div';
import useFetchDataFromDB from '@/API/FetchData';
import Loader from '../Loader/Loader';

const serviceData = [
  {
    title: 'WP Development',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.',
    imgUrl: '/images/service_7.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'UI/UX Design',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.',
    imgUrl: '/images/service_8.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Branding',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.',
    imgUrl: '/images/service_9.jpeg',
    href: '/service/service-details',
  },
  {
    title: 'Social Ad Campaign',
    subtitle:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium lorema doloremque laudantium, totam rem.',
    imgUrl: '/images/service_10.jpeg',
    href: '/service/service-details',
  },
];

export default function ServiceList({ variant }) {
  const [active, setActive] = useState(0);
  const handelActive = index => {
    setActive(index);
  };

  const { data, isLoading, isError } = useFetchDataFromDB('service');



  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);


  console.log("All Services Here", data);
  if (isLoading) return <Loader />;
  if (isError) return <div>Something went wrong</div>;

  return (
    <Div className={`cs-iconbox_3_list ${variant ? variant : ''}`}>
      {data?.data?.slice(0,4)?.map((item, index) => (
        <Div
          className={`cs-hover_tab ${active === index ? 'active' : ''}`}
          key={index}
          onMouseEnter={() => handelActive(index)}
        >
          <Link href={`/service/${item?.slug}`} className="cs-iconbox cs-style3">
            <>
              <Div className="cs-image_layer cs-style1 cs-size_md">
                <Div className="cs-image_layer_in">
                  <img
                    src={item.coverImage}
                    alt="Thumb"
                    className="w-100 cs-radius_15"
                  />
                </Div>
              </Div>
              <span className="cs-iconbox_icon cs-center">
                <svg
                  width={30}
                  height={29}
                  viewBox="0 0 30 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M29.3803 3.05172C29.4089 1.94752 28.537 1.02921 27.4328 1.00062L9.43879 0.534749C8.33459 0.506159 7.41628 1.37811 7.38769 2.48231C7.35911 3.58651 8.23106 4.50482 9.33526 4.53341L25.3299 4.94752L24.9158 20.9422C24.8872 22.0464 25.7592 22.9647 26.8634 22.9933C27.9676 23.0218 28.8859 22.1499 28.9144 21.0457L29.3803 3.05172ZM3.37714 28.5502L28.7581 4.4503L26.0039 1.54961L0.622863 25.6495L3.37714 28.5502Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
              <Div className="cs-iconbox_in">
                <h2 className="cs-iconbox_title">{item.title}</h2>
                <Div className="cs-iconbox_subtitle">{item?.subtitle || "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"}</Div>
              </Div>
            </>
          </Link>
        </Div>
      ))}
    </Div>
  );
}
