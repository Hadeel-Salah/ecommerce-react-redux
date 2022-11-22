import React from 'react';
import { Category } from '../../components/Category/Category';
import { Features } from '../../components/features/Features';
import Helemet from '../../components/Helemet/Helemet';
import { HomeSectionOne } from '../../components/Sections/HomeSections/HomeSectionOne';
import { Testimonial } from '../../components/testimonial/Testimonial';

export const Home = () => {
  return (
    <Helemet title="Home">
      <HomeSectionOne />
      <Category />
      <Features />
      <Testimonial />
    </Helemet >
  );
};
