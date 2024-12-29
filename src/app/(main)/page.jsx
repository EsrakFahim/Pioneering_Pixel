'use client';

import Div from '@/app/ui/Div';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import useFetchDataFromDB from '@/API/FetchData';
import Loader from '../ui/Loader/Loader';
import Hero5 from '../ui/Hero/Hero5';
import FunFact2 from '../ui/FunFact/FunFact2';
import PortfolioSlider2 from '../ui/Slider/PortfolioSlider2';
import ServiceList from '../ui/ServiceList';
import PricingTableList from '../ui/PricingTable/PricingTableList';

// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Facebook',
    links: 'https://www.facebook.com/GalaxySparkBD9',
  },
  {
    name: 'Linkedin',
    links: 'https://www.linkedin.com/in/galaxy-spark-797090312/',
  },
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/galaxysparkbd/ '
  },
  {
    name: 'Pinterest',
    links: 'https://www.pinterest.com/galaxyspark_/'
  }
];
// FunFact Data
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40',
  },
  {
    title: 'Project Completed',
    factNumber: '50',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];
export default function Home() {

  const { data, isLoading, isError } = useFetchDataFromDB('home-page');
  // Use optional chaining and a fallback value to avoid destructuring undefined
  const {
    bannerImage = "/images/hero_bg.jpg",
    callToAction = {},
    isActive,
    title = "",
    subTitle = '',
    video = '',
    videoText = ''
  } = data?.data?.[0] || {};

  if (isLoading) return <Loader />


  return (
    <>
      {/* Start Hero Section */}
      <Hero5
        title="Grow Your Business<br /> With Digital Strategy"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnLink="contact"
        btnText="Let’s talk"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
      />
      {/* End Hero Section */}

      {/* Start Video Block Section */}
      <Div className="cs-video_block_1_wrap">
        <Div className="container">
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
            bgUrl="/images/video_bg_2.jpeg"
          />
        </Div>
      </Div>
      {/* End Video Block Section */}

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our core services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      {/* Start PortfolioSlider Section */}
      <Spacing lg="120" md="50" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      {/* End PortfolioSlider Section */}

      {/* Start FunFact Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <FunFact2
          data={funfaceData}
          variant="cs-no_shadow"
          bgUrl="/images/funfact_shape_bg.svg"
        />
      </Div>
      {/* End FunFact Section */}

      {/* Start Pricing Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Providing best <br/>pricing for client"
          subtitle="Pricing & Packaging"
        />
        <Spacing lg="85" md="40" />
        <PricingTableList />
      </Div>
      <Spacing lg="125" md="55" />
      {/* End Pricing Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="100" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="90" md="80" />
      {/* End LogoList Section */}
    </>
  );
}
