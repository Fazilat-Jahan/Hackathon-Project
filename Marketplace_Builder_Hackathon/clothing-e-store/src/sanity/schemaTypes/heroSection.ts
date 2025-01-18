// /schemas/heroImage.js
import { defineType } from 'sanity';

export default defineType({
  name: 'heroSection-Landing-Image',
  title: 'HeroSection Landing Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
  ],
  
});
    // {
    //   name: 'subtitle',
    //   title: 'Subtitle',
    //   type: 'string',
    // },
    // {
    //   name: 'buttonText',
    //   title: 'Button Text',
    //   type: 'string',
    // },
    // {
    //   name: 'buttonLink',
    //   title: 'Button Link',
    //   type: 'url',
    // },
  
