export default {
    name: "imageContent",
    title: "Image Content",
    type: "document",
    fields: [
      {
        name: "title",
        title: "Title",
        type: "string",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "description",
        title: "Description",
        type: "text",
        validation: (Rule) => Rule.required(),
      },
      {
        name: "image",
        title: "Image",
        type: "image",
        options: {
          hotspot: true, // Allows cropping
        },
        validation: (Rule) => Rule.required(),
      },
    ],
  };
  