import React, { useRef } from 'react';
import './WorkExperience.css';
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import { WORK_EXPERIENCE } from '../../utils/data';
import Slider from "react-slick";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const WorkExperience = () => {

  const slideRef = useRef();

  const slideRight = () => {
    slideRef.current.slickNext(); // Corrected ref name
  }

  const slideLeft = () => { // Corrected function name
    slideRef.current.slickPrev(); // Corrected ref name
  }


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className='experience-container'>
      <h5>Work Experience</h5>
      <div className='experience-content'>

      <div className='arrow-right' onClick={slideRight}>
          <ChevronRightIcon />
        </div>

      <div className='arrow-left' onClick={slideLeft}>
          <ChevronLeftIcon />
        </div>

        <Slider ref={slideRef} {...settings}>
          {WORK_EXPERIENCE.map((item) => (
            <ExperienceCard key={item.title} details={item}/>
          ))}
          </Slider>
      </div>
    </section>
  );
}

export default WorkExperience;
