export default [
  {
    name: "contactName",
    label: "Your Name",
    placeholder: "Your Name",
    required: true,
    error: "Input cannot be empty",
  },
  {
    name: "contactMail",
    label: "Your Mail",
    placeholder: "Your Mail",
    required: true,
    error: "Input cannot be empty",
    type: "email",
  },
  {
    name: "contactSubject",
    label: "Enter Subject",
    placeholder: "Enter Subject",
    required: true,
    error: "Input cannot be empty",
  },
  {
    name: "contactMessage",
    label: "Your Message",
    placeholder: "Your Message",
    required: true,
    error: "Input cannot be empty",
    type: "textarea",
    cols: 20,
    rows: 8,
  },
];
