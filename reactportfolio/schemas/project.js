/* eslint-disable import/no-anonymous-default-export */
export default {
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },

        {
            name: "link",
            type: "url",
        },

        {
            name: "type",
            title: "Type",
            type: "string",
            options: {
                list: [
                    { value: "Personal", title: "Personal" },
                    { value: "Freelance", title: "Freelance" },
                    { value: "Job", title: "Job" },
                    { value: "Course", title: "Course" },
                ],
            },
        },

        {
            name: "level",
            title: "Level",
            type: "string",
            options: {
                list: [
                    { value: "Junior", title: "Junior" },
                    { value: "Middle", title: "Middle" },
                    { value: "Senior", title: "Senior" },
                ],
            },
        },

        {
            name: "techStack",
            type: "string",
        },

        {
            name: "adaptive",
            title: "Adaptive",
            type: "string",
            options: {
                list: [
                    { value: "Yes", title: "Yes" },
                    { value: "No", title: "No" },
                ],
            },
        },

        {
            name: "optimize",
            title: "Optimize",
            type: "string",
            options: {
                list: [
                    { value: "Yes", title: "Yes" },
                    { value: "No", title: "No" },
                ],
            },
        },

        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
              hotspot: true,
            },
        },

    ],
};