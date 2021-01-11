export default {
  name: "projects",
  title: "Projects",
  type: "document",
  fields: [
    {
      name: "projectTitle",
      title: "Project Title",
      type: "string",
    },
    {
      name: "projectDesc",
      title: "Project Description",
      type: "string",
    },

    {
      name: "projectPreview",
      title: "Project Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "projectTech",
      title: "Technologies used in project",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "projectGithubUrl",
      title: "Github Url",
      type: "url"
    },
    {
      name: "projectUrl",
      title: "Live Preview Url",
      type: "url"
    }
  ],
};
