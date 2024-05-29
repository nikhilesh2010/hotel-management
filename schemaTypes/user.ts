import { defineField } from "sanity";

const user = {
    name: "user",
    title: "user",
    type: "document",
    fields: [
        defineField({
            name: "isAdmin",
            title: "Is Admin",
            type: "boolean",
            description: "Check if the user is a admin",
            initialValue: false,
            validation: (Rule) => Rule.required(),
            // readOnly: true,
            // hidden: true,
        }),
        defineField({
            name: "name",
            title: "Name",
            type: "string",
            description: "Name of the user",
            readOnly: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: "image",
            title: "Image",
            type: "url",
        }),
        defineField({
            name: 'password',
            title: 'Password',
            type:'string',
            description: 'Password of the user',
            hidden: true,
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'about',
            title: 'About',
            type: 'text',
            description: 'A breif information about the user'
        })
    ]
};

export default user;
