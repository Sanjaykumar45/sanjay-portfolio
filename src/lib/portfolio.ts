export const profile = {
  name: "Sanjay Kumar",
  role: "Full Stack Developer",
  email: "rsanjay9601@gmail.com",
  location: "Chennai, Tamil Nadu, India",
  // Replace with your real WhatsApp number (country code + number, digits only)
  whatsapp: "919876543210",
  linkedin: "https://linkedin.com/in/sanjay-kumar-8b748919a",
  github: "https://github.com/Sanjaykumar45",
  resume: "/Resume.pdf",
};

export const mailtoHireMe =
  `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}` +
  `&su=${encodeURIComponent("Career Opportunity - Full Stack Developer")}` +
  `&body=${encodeURIComponent(
`Dear Sanjay,

I hope you are doing well.

I reviewed your portfolio and was impressed by your experience in Full Stack Development, 
particularly your expertise in Angular, ASP.NET Core, SQL Server, and modern web technologies.

We currently have an opportunity that aligns well with your background and would like to discuss it with you.

Position:
Company:
Location:
Employment Type (Full-time / Contract / Remote):
Experience Required:

Brief Overview:
[Please provide a short description of the role and responsibilities]

Preferred Time to Connect:
[Date & Time]

Looking forward to connecting with you.

Best Regards,
[Recruiter Name]
[Designation]
[Company Name]
[Email]
[Phone Number]`
  )}`;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Expertise", href: "#expertise" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];
