const LOGGED_IN_KEY = "loggedIn";

const ACTIONS = [
  {
    title: "Schedule a Telemedicine Appointment",
    image: "./assets/schedule-telemedicine.jpeg",
    description:
      "Book a virtual appointment with healthcare professionals for medical advice and prescriptions.",
    properties: [
      { name: "Full Name", value: "John Doe" },
      { name: "Contact Number", value: "555-1234" },
      { name: "Preferred Date", value: "2023-12-10" },
      { name: "Preferred Time", value: "15:30" },
      { name: "Reason for Appointment", value: "General health checkup" },
    ],
  },
  {
    title: "Complete a Digital Health Assessment",
    image: "./assets/digital-health-assessment.jpeg",
    description:
      "Take a comprehensive digital health assessment to receive personalized health recommendations.",
    properties: [
      { name: "Full Name", value: "Jane Smith" },
      { name: "Date of Birth", value: "1985-05-20" },
      { name: "Gender", value: "Female" },
      { name: "Health Conditions", value: "None" },
      { name: "Lifestyle Habits", value: "Regular exercise, balanced diet" },
    ],
  },
  {
    title: "Place an Order on the Virtual Pharmacy",
    image: "./assets/virtual-pharmacy.jpeg",
    description:
      "Order prescription medications and healthcare products online, with secure and discreet delivery.",
    properties: [
      { name: "Full Name", value: "Alex Johnson" },
      { name: "Delivery Address", value: "123 Main St, Cityville" },
      { name: "Prescription Details", value: "Medication X, 30 tablets" },
      { name: "Additional Comments", value: "Leave package at the front door" },
    ],
  },
  {
    title: "Subscribe to the Newsletter",
    image: "./assets/newsletter-subscription.jpeg",
    description:
      "Stay informed by subscribing to our newsletter for the latest healthcare updates and promotions.",
    properties: [
      { name: "Email Address", value: "alex@example.com" },
      { name: "Full Name", value: "Alex Johnson" },
      { name: "Interests", value: "General Health, Wellness Tips" },
    ],
  },
  {
    title: "Engage with a Blog Post",
    image: "./assets/blog-engagement.jpeg",
    description:
      "Read, like, and share informative blog posts on various healthcare topics.",
    properties: [
      { name: "Full Name", value: "Samantha Williams" },
      { name: "Email Address", value: "samantha@example.com" },
      { name: "Comment", value: "Great article, very informative!" },
      { name: "Share on Social Media", value: "Yes" },
    ],
  },
  {
    title: "Complete a Contact Form Submission",
    image: "./assets/contact-form.jpeg",
    description:
      "Reach out to us with inquiries, feedback, or requests through our online contact form.",
    properties: [
      { name: "Full Name", value: "Robert Brown" },
      { name: "Email Address", value: "robert@example.com" },
      { name: "Phone Number", value: "555-5678" },
      { name: "Message", value: "I have a billing inquiry." },
    ],
  },
];

const HEADER_NAV_CONFIG = [
  { htmlId: "homeLink", pageName: "Home" },
  { htmlId: "servicesLink", pageName: "Savings" },
  { htmlId: "solutionsLink", pageName: "Investments" },
  { htmlId: "contactLink", pageName: "Crypto" },
];
