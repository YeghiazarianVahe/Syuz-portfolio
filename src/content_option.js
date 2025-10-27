/*
IMAGES
*/
import mainPhoto from "./assets/images/mainPhoto.jpg"
import hogwarts1 from "./assets/projects/Hogwarts/Hogwarts1.png"
import hogwarts2 from "./assets/projects/Hogwarts/Hogwarts2.png"
import bar1 from "./assets/projects/bar/logo.jpg"
import bar2 from "./assets/projects/bar/menu1_1.jpg"
import japan1 from "./assets/projects/Japan/Japan1.png"
import japan2 from "./assets/projects/Japan/Japan2.png"




const logotext = "SYUZANNA";
const meta = {
    title: "Syuzanna Gabrielyan",
    description: "Creative Designer & Marketing Strategist — crafting visuals that inspire and strategies that sell.",
};

const introdata = {
    title: "I’m Syuzanna Gabrielyan",
    animated: {
        first: "I create brands that connect",
        second: "I design visuals that tell stories",
        third: "I bring ideas to life with style and strategy",
    },
    description: "I’m a passionate Creative Designer and Marketing Specialist focused on building strong brand identities, engaging visual experiences, and marketing strategies that make a difference. I blend design, psychology, and storytelling to help businesses grow and stand out in a crowded digital world.",
    your_img_url: mainPhoto,
};

const dataabout = {
    title: "About Me",
    aboutme: "I’m Syuzanna — a multidisciplinary designer with a marketing mindset. My work bridges creativity and strategy, combining visual aesthetics with data-driven insight. From brand identity and social media design to campaign direction and storytelling, I craft experiences that resonate with people and help brands find their authentic voice.",
};


const skills = [
  {
    name: "Brand Identity & Visual Design",
    value: 95,
  },
  {
    name: "Canva & Adobe Photoshop",
    value: 95,
  },
  {
    name: "Creative Marketing & Copywriting",
    value: 90,
  },
  {
    name: "Presentation Design (Business / Academic / Pitch Decks)",
    value: 95,
  },
  {
    name: "AI Tools & Content Generation",
    value: 90,
  },
  {
    name: "Social Media & SEO Optimization",
    value: 85,
  },
];

const services = [
  {
    title: "Brand Identity & Logo Design",
    description:
      "I create unique visual identities that reflect your brand’s essence — from logos and color systems to full brand guidelines. Every design is made to capture attention and leave a lasting impression.",
  },
  {
    title: "Creative Marketing & Content Production",
    description:
      "I develop stylish, conversion-focused content for businesses and personal brands — including banners, ads, and videos for platforms like TikTok, Instagram, and YouTube, using modern AI-assisted tools.",
  },
  {
    title: "Presentation & Pitch Deck Design",
    description:
      "I design elegant and persuasive presentations for business, education, or investment projects. Every slide is clear, visually appealing, and strategically structured to communicate your message.",
  },
  {
    title: "Website & Landing Page Design",
    description:
      "I design modern, responsive websites and landing pages that combine clean aesthetics with marketing psychology — helping brands stand out and attract clients.",
  },
  {
    title: "Photo Editing & Visual Enhancement",
    description:
      "I professionally enhance, retouch, and prepare photos for advertising and social media campaigns, ensuring a polished and brand-consistent look.",
  },
  {
    title: "Marketing Strategy & SEO",
    description:
      "I optimize both text and visuals for search visibility and engagement, ensuring your brand reaches the right audience with the right message.",
  },
];


const heroData = {
  eyebrow: "Creative Designer • Marketing Specialist",
  title: "Selected Work — Syuz",
  subtitle:
    "I craft brands and campaigns that connect emotionally and perform commercially. Explore a few highlights below.",
  cta: "Explore projects",
};

const dataportfolio = [
  {
    title: "Timeo Brand Identity & Event Campaign",
    subtitle: "Branding • Event Promotion • Graphic Design",
    img: bar1, // Replace with actual URL for the logo image
    images: [
        bar1,
        bar2,
    ],
    tags: ["Branding", "Event Marketing", "Graphic Design"],
    description:
      "A chilling and immersive brand identity for Timeo, blending horror aesthetics with a vibrant cocktail culture. The project includes a striking logo with a cocktail glass and eerie eye motif, a detailed cocktail menu featuring a menacing clown design, event tickets for 'The Rebirth of Venus' with a dark mythological theme, and wristbands for staff, guests, and performers, all tied together with a consistent red and black color scheme to captivate the target audience.",
    features: [
      "Unique horror-inspired logo and typography",
      "Comprehensive cocktail menu with pricing and variety",
      "Event ticket design for 'The Rebirth of Venus' campaign",
      "Custom wristbands for staff, guests, and performers",
    ],
    link: "https://www.instagram.com/thetimeopub",
  },
    {
        title: "Japan: The Land of the Rising Sun",
        subtitle: "Research Presentation • Cultural Analysis • Historical Overview",
        img: japan1, // Replace with actual URL for image1.png
        images: [
            japan1,
            japan2
        ],
        tags: ["Research", "Cultural Study", "Presentation Design"],
        description:
        "A comprehensive presentation titled 'Japan: The Land of the Rising Sun' by Syuzanna Gabrielyan, exploring the unique cultural, historical, and national aspects of Japan. This work highlights Japan's geographical details, historical milestones (e.g., the founding of Emperor Jimmu’s Empire in 660 BC, isolation in 1603), language statistics, national dishes, and intriguing cultural quirks like the 'Pusher' job and Karoshi. It concludes with an emphasis on Japan’s hidden peculiarities.",
        features: [
        "Detailed overview of Japan’s geography and demographics",
        "Historical timeline and cultural insights",
        "Highlight of unique social practices and national dishes",
        "Engaging slide design with interactive elements",
        ],
        link: "https://www.slideshare.net/slideshow/japan-art-discipline-and-innovation-90d2/283926031",
    },
  {
    title: "Hogwarts: The Magic of Words & Emotions",
    subtitle: "Presentation Design • Emotional Branding • Storytelling",
    img: hogwarts1, // Replace with actual URL for image1.png
    images: [
        hogwarts1,
        hogwarts2
    ],
    tags: ["Presentation Design", "Emotional Marketing", "Storytelling"],
    description:
      "A captivating presentation titled 'Hogwarts: The Magic of Words & Emotions,' blending the mystical allure of Hogwarts with profound insights into the power of language and emotion. This project explores how words act as spells, influencing communication and marketing through the 'Four Spells of Communication' (Lumos, Protego, Expecto Patronum, Expelliarmus) and emphasizes emotional resonance over mere information in branding strategies.",
    features: [
      "Thematic storytelling inspired by Hogwarts",
      "Four spells framework for effective communication",
      "Emotional marketing insights with color psychology",
      "Engaging slide design with interactive elements",
    ],
    link: "https://www.slideshare.net/slideshow/emotional-alchemy-turning-words-into-magic/283924300",
  }
  
];

const contactConfig = {
  YOUR_EMAIL: "gabrieliansyuzanna@gmail.com",
  LINKEDIN: "https://www.linkedin.com/in/gabrieliansyuzanna/"
};


export {
    meta,
    dataabout,
    dataportfolio,
    skills,
    services,
    introdata,
    logotext,
    heroData,
    contactConfig
};
