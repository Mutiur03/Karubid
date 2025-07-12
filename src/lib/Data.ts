import {
  Calendar,
  ClockIcon,
  Handshake,
  Mail,
  MapPin,
  Phone,
  Trophy,
} from "lucide-react";

export const testimonials = [
  {
    name: "Ahmed Al-Mansouri",
    company: "Emirates Real Estate",
    rating: 5,
    text: "KARUBID delivered exceptional interior design services for our luxury properties. Their attention to detail and professional approach exceeded our expectations.",
    image:
      "https://readdy.ai/api/search-image?query=professional%20middle%20eastern%20businessman%20in%20elegant%20suit%20smiling%20confidently%20against%20clean%20white%20background%20modern%20corporate%20portrait&width=80&height=80&seq=testimonial1&orientation=squarish",
  },
  {
    name: "Sarah Johnson",
    company: "Dubai Marina Hotel",
    rating: 5,
    text: "Outstanding technical services and maintenance support. KARUBID team is reliable, efficient, and always delivers on time with highest quality standards.",
    image:
      "https://readdy.ai/api/search-image?query=professional%20businesswoman%20with%20blonde%20hair%20wearing%20navy%20blue%20blazer%20smiling%20warmly%20against%20clean%20white%20background%20corporate%20headshot&width=80&height=80&seq=testimonial2&orientation=squarish",
  },
  {
    name: "Mohammed Hassan",
    company: "Gulf Construction Group",
    rating: 5,
    text: "Their cleaning services transformed our commercial spaces. Professional team, eco-friendly approach, and consistent quality make them our preferred partner.",
    image:
      "https://readdy.ai/api/search-image?query=confident%20middle%20eastern%20business%20executive%20in%20dark%20suit%20with%20professional%20smile%20against%20clean%20white%20background%20corporate%20portrait%20photography&width=80&height=80&seq=testimonial3&orientation=squarish",
  },
];

export const projects = [
  {
    title: "Luxury Villa Interior",
    category: "Interior Design",
    client: "Private Residence",
    description:
      "Complete luxury interior transformation with custom furniture and premium finishes",
    image:
      "https://readdy.ai/api/search-image?query=elegant%20luxury%20villa%20interior%20design%20with%20modern%20furniture%20gold%20accents%20navy%20blue%20elements%20sophisticated%20living%20room%20with%20marble%20floors%20and%20designer%20lighting&width=400&height=300&seq=project1&orientation=landscape",
  },
  {
    title: "Corporate Office Cleaning",
    category: "Cleaning Services",
    client: "Business District",
    description:
      "Professional deep cleaning and maintenance for modern office complexes",
    image:
      "https://readdy.ai/api/search-image?query=pristine%20modern%20corporate%20office%20space%20with%20gleaming%20floors%20spotless%20glass%20surfaces%20professional%20cleaning%20results%20bright%20contemporary%20workspace&width=400&height=300&seq=project2&orientation=landscape",
  },
  {
    title: "Smart Building Systems",
    category: "Technical Services",
    client: "Commercial Tower",
    description: "Advanced HVAC and smart building automation installation",
    image:
      "https://readdy.ai/api/search-image?query=advanced%20smart%20building%20control%20systems%20modern%20technology%20panels%20digital%20displays%20professional%20technical%20installation%20contemporary%20automation%20equipment&width=400&height=300&seq=project6&orientation=landscape",
  },
  {
    title: "Hotel Suite Design",
    category: "Interior Design",
    client: "Luxury Hotel",
    description:
      "Sophisticated hospitality interior design with premium amenities",
    image:
      "https://readdy.ai/api/search-image?query=luxurious%20hotel%20suite%20interior%20with%20elegant%20furniture%20gold%20and%20navy%20color%20scheme%20premium%20bedding%20sophisticated%20lighting%20modern%20hospitality%20design&width=400&height=300&seq=project4&orientation=landscape",
  },
  {
    title: "Mall Maintenance",
    category: "Cleaning Services",
    client: "Shopping Center",
    description: "Comprehensive facility maintenance and cleaning solutions",
    image:
      "https://readdy.ai/api/search-image?query=immaculate%20shopping%20mall%20interior%20with%20polished%20marble%20floors%20pristine%20storefronts%20professional%20maintenance%20results%20bright%20commercial%20space&width=400&height=300&seq=project5&orientation=landscape",
  },
  {
    title: "Residential HVAC",
    category: "Technical Services",
    client: "Villa Complex",
    description: "Energy-efficient HVAC system installation and maintenance",
    image:
      "https://readdy.ai/api/search-image?query=modern%20HVAC%20system%20installation%20in%20commercial%20building%20professional%20technical%20equipment%20sleek%20ductwork%20and%20ventilation%20systems%20industrial%20excellence&width=400&height=300&seq=project3&orientation=landscape",
  },
];

export const quickStats = [
  {
    value: "100+",
    label: "Projects",
  },
  {
    value: "50+",
    label: "Clients",
  },
  {
    value: "10+",
    label: "Years",
  },
];

export const aboutFeatures = [
  {
    icon: Trophy,
    title: "Premium Quality",
    description:
      "Highest standards in every project with meticulous attention to detail and craftsmanship.",
    color: "accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    textColor: "text-accent",
  },
  {
    icon: Calendar,
    title: "Timely Delivery",
    description:
      "Professional project management ensures on-schedule completion within budget.",
    color: "primary",
    bgColor: "bg-primary/10",
    borderColor: "border-primary/20",
    textColor: "text-primary",
  },
  {
    icon: Handshake,
    title: "Trusted Partnership",
    description:
      "Building long-term relationships through transparency, reliability, and excellence.",
    color: "secondary",
    bgColor: "bg-secondary/10",
    borderColor: "border-secondary/20",
    textColor: "text-foreground",
  },
];

export const contactInfo = [
  {
    icon: MapPin,
    title: "Office Location",
    content: "Dubai, United Arab Emirates",
    color: "accent",
  },
  {
    icon: Mail,
    title: "Email Address",
    content: "info@karubidtechnical.com",
    color: "accent",
  },
  {
    icon: Phone,
    title: "Phone Number",
    content: "+971 XX XXX XXXX",
    color: "accent",
  },
  {
    icon: ClockIcon,
    title: "Business Hours",
    content: "Sunday - Thursday: 8AM - 6PM\nFriday - Saturday: 9AM - 4PM",
    color: "accent",
  },
];

// Helper function to get stats data with current store values
export const getStatsData = (
  projectsCount: number,
  clientsCount: number,
  experienceCount: number
) => [
  {
    count: projectsCount,
    label: "Completed Projects",
    suffix: "+",
  },
  {
    count: clientsCount,
    label: "Satisfied Clients",
    suffix: "+",
  },
  {
    count: experienceCount,
    label: "Years Experience",
    suffix: "+",
  },
  {
    count: "24/7",
    label: "Support Available",
    suffix: "",
  },
];
