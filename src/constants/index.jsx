// src/constants/index.jsx
import { BrainCircuit } from "lucide-react";
import { Rocket } from "lucide-react";
import { Users2 } from "lucide-react";
import { LineChart } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { CloudLightning } from "lucide-react";

import user1 from "../assets/profile-pic/user1.png";
import user2 from "../assets/profile-pic/user2.png";
import user3 from "../assets/profile-pic/user3.png";
import user4 from "../assets/profile-pic/user4.png";
import user5 from "../assets/profile-pic/user5.png";
import user6 from "../assets/profile-pic/user6.png";


export const features = [
  {
    icon: <BrainCircuit />,
    text: "AI-Powered Insights",
    description:
      "Leverage built-in AI to automate routine tasks, generate insights, and keep your startup moving faster than ever.",
  },
  {
    icon: <Rocket />,
    text: "Launch-Ready Workflows",
    description:
      "From idea to execution, Elevatr streamlines the entire journey with pre-built workflows designed for startups.",
  },
  {
    icon: <Users2 />,
    text: "Seamless Collaboration",
    description:
      "Work with your team in real-time, share updates instantly, and keep everyone aligned no matter where they are.",
  },
  {
    icon: <LineChart />,
    text: "Growth Analytics",
    description:
      "Track progress, measure impact, and gain insights into what drives your startup’s growth with a sleek analytics dashboard.",
  },
  {
    icon: <ShieldCheck />,
    text: "Enterprise-Grade Security",
    description:
      "Your ideas and data are protected with top-tier encryption and privacy-first design — built to scale with you.",
  },
  {
    icon: <CloudLightning />,
    text: "Scalable Cloud Platform",
    description:
      "Whether you're a team of 3 or 300, Elevatr grows with you — fast, reliable, and always ready to elevate your vision.",
  },
];

export const navItems = [

  { label: "Overview", href: "#hero" },
  { label: "Solutions", href: "#features" },
  { label: "How It Works", href: "#workflow" },
  { label: "Plans", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "Aarav Mehta",
    company: "NextGen Robotics",
    image: user1,
    text: "Elevatr gave our team the clarity and speed we needed. From ideation to launch, the platform streamlined everything — it felt like having an extra co-founder on board.",
  },
  {
    user: "Sophia Lee",
    company: "Lumen AI",
    image: user2,
    text: "We scaled from a small prototype to a global SaaS in record time. Elevatr’s collaboration tools and real-time insights kept everyone aligned and moving forward.",
  },
  {
    user: "Daniel Carter",
    company: "Orbit Finance",
    image: user3,
    text: "As a fintech startup, speed and trust are critical. Elevatr’s seamless workflow and built-in security gave us both. Our investors loved the transparency.",
  },
  {
    user: "Maya Rodriguez",
    company: "Aether Labs",
    image: user4,
    text: "Elevatr’s AI features and real-time collaboration completely changed how our team works. Project reviews that used to take days now happen in hours — it keeps everyone aligned and moving forward.",
  },
  {
    user: "Liam O’Connor",
    company: "Pulse HealthTech",
    image: user5,
    text: "Elevatr changed the way we collaborate across continents. Meetings turned into action instantly, and productivity metrics jumped by 40%.",
  },
  {
    user: "Emma Wilson",
    company: "Skyline Ventures",
    image: user6,
    text: "For startups, focus is everything. Elevatr removed the noise, automated the routine, and let us concentrate on building what truly matters.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];


//workflow
export const checklistItems = [
  {
    title: "Brainstorm & Plan",
    description:
      "Kickstart your idea with structured templates that help your team align on goals and milestones.",
  },
  {
    title: "Collaborate in Real-Time",
    description:
      "Work together seamlessly with live editing, instant updates, and built-in team communication.",
  },
  {
    title: "Automate with AI",
    description:
      "Save hours with AI-driven task suggestions, smart summaries, and automated reporting.",
  },
  {
    title: "Track & Scale",
    description:
      "Monitor progress with growth analytics and scale effortlessly as your startup expands.",
  },
];





// Learn
export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "Case Studies" },
  { href: "#", text: "Blog" },
];

// Build with Elevatr
export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Integrations" },
  { href: "#", text: "API Access" },
  { href: "#", text: "Pricing Plans" },
  { href: "#", text: "Product Updates" },
];

// Network
export const communityLinks = [
  { href: "#", text: "Community Hub" },
  { href: "#", text: "Events & Meetups" },
  { href: "#", text: "Partner Program" },
  { href: "#", text: "Open Source" },
  { href: "#", text: "Careers" },
];
