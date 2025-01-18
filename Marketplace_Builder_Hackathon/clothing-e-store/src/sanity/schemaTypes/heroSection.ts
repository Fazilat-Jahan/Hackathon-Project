import { defineType } from 'sanity';

export default defineType({
  name: 'landingImage', // Changed to match the query
  title: 'HeroSection Landing Image',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'isDesktop',
      title: 'Is Desktop Image',
      type: 'boolean',
      description: 'Check if this is the desktop version of the image'
    }
  ],
});

