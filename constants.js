const LOGGED_IN_KEY = "loggedIn";

const ACTIONS = [
  {
    title: "Open Trial Account",
    image: "./assets/open-account.jpeg",
    description: "Easily organize your work. Start free. Access Asana's features. No credit card required.",
    properties: [
      { name: "Account Type", value: "Trial" },
      { name: "Account Tier", value: "Personal" },
      { name: "Cost", value: "$0" }
    ]
  },
  {
    title: "Download App",
    image: "./assets/transfer-funds.jpeg",
    description: "Asana’s native desktop app removes distractions so you can focus on what's important. Just download according to your OS, login with your email on the web, and you'll be guided to your new favorite app.",
    properties: [
      { name: "OS", value: "MacOS" },
      { name: "App Version", value: "2.1.2" }
    ]
  },
  {
    title: "View Advanced Pricing",
    image: "./assets/purchase-crypto.jpeg",
    description: "For companies that need to manage a portfolio of work and goals across departments.",
    properties: [
      { name: "Account Tier", value: "Advanced" },
      { name: "Cost", value: "$24.99" },
      { name: "Payment Cycle", value: "Annually" },
      { name: "Payment Method", value: "Credit Card" }
    ]
  },
  {
    title: "Attend Webinar",
    image: "./assets/manage-investments.jpeg",
    description: "Meet Asana Intelligence: AI has joined the team",
    properties: [
      { name: "Resource Category", value: "Live Webinar" }
    ]
  },
  {
    title: "Read Blog",
    image: "./assets/pay-bills.jpeg",
    description: "Make payments for bills, loans, or recurring expenses through your financial account, often with the option to set up automated payments for convenience.",
    properties: [
      { name: "Biller Information", value: "Name of the Company" },
      { name: "Bill Amount", value: "$100" },
      { name: "Payment Date", value: "Due Date" },
      { name: "Payment Method", value: "Online Banking" }
    ]
  },
  {
    title: "Request Customer Support",
    image: "./assets/customer-support.jpeg",
    description: "Contact customer support to seek assistance with account-related issues, resolve problems, or ask questions regarding products and services.",
    properties: [
      { name: "Customer Name", value: "Your Name" },
      { name: "Contact Information", value: "Email" },
      { name: "Issue Description", value: "Transaction Inquiry" },
      { name: "Priority Level", value: "High" },
      { name: "Request Timestamp", value: "Date and Time of Request" }
    ]
  }
];

const HEADER_NAV_CONFIG = [
  { htmlId: "homeLink", pageName: "Home" },
  { htmlId: "servicesLink", pageName: "Features" },
  { htmlId: "solutionsLink", pageName: "Solutions" },
  { htmlId: "contactLink", pageName: "Resources" },
];
