export interface BuildingBlockMilestone {
  id: string
  year: number
  title: string
  description: string
  categories: string[]
  impact: string
}

export interface CategoryGroup {
  name: string
  categories: string[]
}

export const buildingBlockMilestones: BuildingBlockMilestone[] = [
  {
    id: "perl",
    year: 1987,
    title: "Perl",
    description: "Larry Wall releases Perl, a high-level, general-purpose, interpreted, dynamic programming language.",
    categories: ["Backend", "Programming Language"],
    impact: "Became one of the first popular languages for CGI scripting and web development.",
  },
  {
    id: "http",
    year: 1991,
    title: "HTTP",
    description:
      "Tim Berners-Lee introduces the Hypertext Transfer Protocol (HTTP) as the foundation of data communication for the World Wide Web.",
    categories: ["Protocol", "Web Infrastructure"],
    impact: "Established the standard for transmitting web pages and other content on the internet.",
  },
  {
    id: "cgi",
    year: 1993,
    title: "Common Gateway Interface (CGI)",
    description:
      "CGI is introduced, allowing web servers to execute programs and scripts to generate dynamic web content.",
    categories: ["Backend", "Web Infrastructure"],
    impact: "Enabled the creation of dynamic websites and laid the groundwork for server-side programming.",
  },
  {
    id: "php",
    year: 1995,
    title: "PHP",
    description: "Rasmus Lerdorf releases the first version of PHP, a server-side scripting language.",
    categories: ["Backend", "Programming Language"],
    impact: "Became one of the most widely-used languages for web development, powering millions of websites.",
  },
  {
    id: "java",
    year: 1995,
    title: "Java",
    description: "Sun Microsystems releases Java, a programming language designed for cross-platform compatibility.",
    categories: ["Backend", "Programming Language", "Mobile"],
    impact:
      "Widely adopted for enterprise applications and backend systems, introduced 'write once, run anywhere' concept.",
  },
  {
    id: "mysql",
    year: 1995,
    title: "MySQL",
    description: "MySQL, an open-source relational database management system, is released.",
    categories: ["Database", "Backend"],
    impact: "Became one of the most popular databases for web applications, especially in the LAMP stack.",
  },
  {
    id: "flash",
    year: 1996,
    title: "Flash",
    description:
      "Macromedia releases Flash (originally FutureSplash Animator), a multimedia software platform for creating animations and web applications.",
    categories: ["Frontend", "Web Technology"],
    impact: "Revolutionized web interactivity and online animation before being superseded by HTML5.",
  },
  {
    id: "css",
    year: 1996,
    title: "CSS",
    description: "The World Wide Web Consortium (W3C) publishes the first CSS specification.",
    categories: ["Frontend", "Web Technology"],
    impact: "Standardized web page styling, separating presentation from content.",
  },
  {
    id: "asp",
    year: 1996,
    title: "Active Server Pages (ASP)",
    description: "Microsoft releases ASP, a server-side scripting engine for dynamically generated web pages.",
    categories: ["Backend", "Web Technology"],
    impact: "Became a popular choice for developing dynamic websites on Windows servers.",
  },
  {
    id: "xml",
    year: 1998,
    title: "XML",
    description: "The World Wide Web Consortium (W3C) publishes the first XML specification.",
    categories: ["Data", "Web Technology"],
    impact: "Provided a versatile format for storing and transporting data, widely used in web services and APIs.",
  },
  {
    id: "drupal",
    year: 2001,
    title: "Drupal",
    description: "Drupal, an open-source content management framework, is released.",
    categories: ["CMS", "Backend", "Web Technology"],
    impact: "Gained popularity for its flexibility and became a go-to solution for complex, content-heavy websites.",
  },
  {
    id: "sitecore",
    year: 2001,
    title: "Sitecore",
    description: "Sitecore, a .NET-based digital experience platform, is founded.",
    categories: ["DXP", "CMS", "Backend", "Web Technology"],
    impact:
      "Became a leading enterprise-level CMS and digital experience platform, known for its marketing automation and personalization capabilities.",
  },
  {
    id: "episerver",
    year: 2002,
    title: "Episerver (now Optimizely)",
    description: "Episerver, a .NET-based CMS and digital commerce platform, is founded.",
    categories: ["DXP", "CMS", "E-commerce", "Web Technology"],
    impact:
      "Became a significant player in the DXP space, known for its strong commerce capabilities alongside content management.",
  },
  {
    id: "wordpress",
    year: 2003,
    title: "WordPress",
    description: "WordPress, a free and open-source content management system, is released.",
    categories: ["CMS", "Web Technology"],
    impact: "Became the most popular CMS, powering a significant percentage of websites on the internet.",
  },
  {
    id: "ruby-on-rails",
    year: 2004,
    title: "Ruby on Rails",
    description:
      "David Heinemeier Hansson extracts Ruby on Rails from his work on Basecamp and releases it as open source.",
    categories: ["Web Framework", "Backend"],
    impact: "Popularized convention over configuration and DRY principles in web development.",
  },
  {
    id: "kentico",
    year: 2004,
    title: "Kentico",
    description: "Kentico, a web content management system, is launched.",
    categories: ["CMS", "E-commerce", "Web Technology"],
    impact:
      "Provided an all-in-one CMS, E-commerce, and Online Marketing platform, popular among mid-size to large organizations.",
  },
  {
    id: "hadoop",
    year: 2006,
    title: "Apache Hadoop",
    description: "Yahoo! releases Hadoop, a framework for distributed storage and processing of big data.",
    categories: ["Big Data", "Backend"],
    impact: "Enabled scalable, distributed computing and became foundational for many big data technologies.",
  },
  {
    id: "shopify",
    year: 2006,
    title: "Shopify",
    description: "Shopify, an e-commerce platform for online stores and retail point-of-sale systems, is launched.",
    categories: ["E-commerce", "Web Technology"],
    impact: "Democratized e-commerce by making it easy for small businesses to set up online stores.",
  },
  {
    id: "jquery",
    year: 2006,
    title: "jQuery",
    description: "John Resig releases jQuery, a fast, small, and feature-rich JavaScript library.",
    categories: ["Frontend", "Web Technology"],
    impact: "Simplified HTML document traversing, event handling, animating, and Ajax interactions.",
  },
  {
    id: "aws-s3",
    year: 2006,
    title: "Amazon S3",
    description: "Amazon launches Simple Storage Service (S3), a scalable object storage service.",
    categories: ["Cloud Storage", "Web Infrastructure"],
    impact: "Revolutionized web-scale storage and became a fundamental component of many web applications.",
  },
  {
    id: "joomla",
    year: 2005,
    title: "Joomla",
    description: "Joomla, an open-source content management system, is released.",
    categories: ["CMS", "Web Technology"],
    impact:
      "Became one of the most popular open-source CMS options, known for its extensibility and user-friendly interface.",
  },
  {
    id: "ajax",
    year: 2005,
    title: "AJAX",
    description:
      "Jesse James Garrett coins the term AJAX (Asynchronous JavaScript and XML), describing a set of web development techniques.",
    categories: ["Frontend", "Web Technology"],
    impact: "Enabled the creation of more interactive and responsive web applications.",
  },
  {
    id: "google-analytics",
    year: 2005,
    title: "Google Analytics",
    description: "Google launches Google Analytics, a web analytics service.",
    categories: ["Analytics", "Web Technology"],
    impact: "Became the most widely used web analytics service, providing insights for millions of websites.",
  },
  {
    id: "umbraco",
    year: 2005,
    title: "Umbraco",
    description: "Umbraco, an open-source content management system built on ASP.NET, is released.",
    categories: ["CMS", "Web Technology"],
    impact: "Gained popularity in the .NET ecosystem, offering a flexible and developer-friendly CMS solution.",
  },
  {
    id: "ios-sdk",
    year: 2008,
    title: "iOS SDK",
    description:
      "Apple releases the iOS SDK, allowing developers to create native applications for iPhone and iPod Touch.",
    categories: ["Mobile", "Development Tools"],
    impact: "Sparked the mobile app revolution and created a new ecosystem for developers.",
  },
  {
    id: "adobe-experience-manager",
    year: 2008,
    title: "Adobe Experience Manager",
    description:
      "Adobe launches CQ5, which later becomes Adobe Experience Manager, a comprehensive content management solution.",
    categories: ["DXP", "CMS", "Web Technology"],
    impact:
      "Established itself as a powerful enterprise-level digital experience platform, integrating with other Adobe marketing tools.",
  },
  {
    id: "acquia",
    year: 2007,
    title: "Acquia",
    description: "Acquia, a software-as-a-service company co-founded by Drupal's creator, is established.",
    categories: ["DXP", "CMS", "Web Technology", "Cloud Storage"],
    impact: "Expanded Drupal's enterprise adoption by providing hosting, tools, and services for Drupal websites.",
  },
  {
    id: "nodejs",
    year: 2009,
    title: "Node.js",
    description: "Ryan Dahl creates Node.js, allowing JavaScript to be used for server-side scripting.",
    categories: ["Backend", "Web Technology", "Programming Language"],
    impact: "Enabled full-stack JavaScript development and popularized event-driven, non-blocking I/O model.",
  },
  {
    id: "stripe",
    year: 2010,
    title: "Stripe",
    description: "Stripe, an online payment processing platform for internet businesses, is founded.",
    categories: ["E-commerce", "Web Technology", "API"],
    impact: "Simplified online payment integration for developers and businesses.",
  },
  {
    id: "elasticsearch",
    year: 2010,
    title: "Elasticsearch",
    description: "Shay Banon releases Elasticsearch, a distributed, RESTful search and analytics engine.",
    categories: ["Search", "Big Data", "Backend"],
    impact: "Became a popular choice for implementing search functionality and log analytics in web applications.",
  },
  {
    id: "angular",
    year: 2010,
    title: "AngularJS",
    description: "Google releases AngularJS, a structural framework for dynamic web apps.",
    categories: ["Frontend Framework", "Web Technology"],
    impact: "Popularized MVC architecture in frontend development and influenced many subsequent frameworks.",
  },
  {
    id: "raspberry-pi",
    year: 2012,
    title: "Raspberry Pi",
    description: "The Raspberry Pi Foundation releases the first Raspberry Pi, a low-cost, credit-card sized computer.",
    categories: ["Hardware", "IoT"],
    impact: "Democratized computing and IoT development, making it accessible to hobbyists and educators.",
  },
  {
    id: "webpack",
    year: 2012,
    title: "Webpack",
    description: "Tobias Koppers creates Webpack, a static module bundler for modern JavaScript applications.",
    categories: ["Build Tools", "Web Technology"],
    impact: "Became the de facto standard for bundling JavaScript applications, especially in the React ecosystem.",
  },
  {
    id: "typescript",
    year: 2012,
    title: "TypeScript",
    description: "Microsoft releases TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.",
    categories: ["Programming Language", "Web Technology"],
    impact: "Improved developer productivity and code quality in large-scale JavaScript projects.",
  },
  {
    id: "docker",
    year: 2013,
    title: "Docker",
    description:
      "Docker, Inc. releases Docker, a platform for developing, shipping, and running applications in containers.",
    categories: ["DevOps", "Web Infrastructure"],
    impact: "Revolutionized application deployment and scaled container adoption in software development.",
  },
  {
    id: "contentful",
    year: 2013,
    title: "Contentful",
    description: "Contentful, a headless CMS, is launched.",
    categories: ["CMS", "API", "Web Technology"],
    impact: "Pioneered the concept of headless CMS, separating content management from content presentation.",
  },
  {
    id: "react",
    year: 2013,
    title: "React",
    description: "Facebook publicly releases React, a JavaScript library for building user interfaces.",
    categories: ["Frontend Framework", "Web Technology"],
    impact: "Introduced the concept of a virtual DOM and influenced modern frontend development practices.",
  },
  {
    id: "vue",
    year: 2014,
    title: "Vue.js",
    description: "Evan You releases Vue.js, a progressive JavaScript framework for building user interfaces.",
    categories: ["Frontend Framework", "Web Technology"],
    impact: "Gained popularity for its simplicity and flexibility in building modern web applications.",
  },
  {
    id: "kubernetes",
    year: 2014,
    title: "Kubernetes",
    description: "Google open-sources Kubernetes, an automated container deployment, scaling, and management platform.",
    categories: ["DevOps", "Web Infrastructure", "Cloud Storage"],
    impact: "Became the de facto standard for container orchestration in cloud-native applications.",
  },
  {
    id: "swift",
    year: 2014,
    title: "Swift",
    description: "Apple introduces Swift, a powerful and intuitive programming language for iOS, macOS, and beyond.",
    categories: ["Mobile", "Programming Language"],
    impact: "Simplified iOS app development and improved developer productivity.",
  },
  {
    id: "gatsby",
    year: 2015,
    title: "Gatsby",
    description: "Kyle Mathews releases Gatsby, a static site generator for React.",
    categories: ["Web Framework", "Frontend", "Web Technology"],
    impact: "Popularized the use of GraphQL in static site generation and contributed to the JAMstack movement.",
  },
  {
    id: "tensorflow",
    year: 2015,
    title: "TensorFlow",
    description: "Google releases TensorFlow, an open-source machine learning framework.",
    categories: ["AI/ML", "Big Data"],
    impact: "Accelerated the development and deployment of machine learning models in various applications.",
  },
  {
    id: "graphql",
    year: 2015,
    title: "GraphQL",
    description: "Facebook publicly releases GraphQL, a query language for APIs.",
    categories: ["API", "Web Technology"],
    impact: "Provided a more efficient, powerful and flexible alternative to REST for API development.",
  },
  {
    id: "pwas",
    year: 2015,
    title: "Progressive Web Apps (PWAs)",
    description: "Google introduces the concept of Progressive Web Apps, combining the best of web and mobile apps.",
    categories: ["Web Technology", "Mobile"],
    impact: "Blurred the line between web and native apps, improving user experience on mobile devices.",
  },
  {
    id: "amp",
    year: 2015,
    title: "Accelerated Mobile Pages (AMP)",
    description:
      "Google introduces AMP, an open-source HTML framework to create fast-loading web pages for mobile devices.",
    categories: ["Web Technology", "Mobile"],
    impact: "Improved mobile web performance and influenced SEO practices.",
  },
  {
    id: "jamstack",
    year: 2015,
    title: "JAMstack",
    description:
      "Mathias Biilmann and Chris Bach coin the term JAMstack, promoting a modern web development architecture.",
    categories: ["Web Architecture", "Web Technology"],
    impact: "Popularized the approach of pre-rendering and decoupling the frontend from the backend.",
  },
  {
    id: "redux",
    year: 2015,
    title: "Redux",
    description: "Dan Abramov and Andrew Clark release Redux, a predictable state container for JavaScript apps.",
    categories: ["State Management", "Frontend", "Web Technology"],
    impact:
      "Became the go-to state management solution for React applications and influenced state management patterns.",
  },
  {
    id: "nextjs",
    year: 2016,
    title: "Next.js",
    description:
      "Vercel (formerly Zeit) releases Next.js, a React framework with server-side rendering and static site generation capabilities.",
    categories: ["Web Framework", "Frontend", "Web Technology"],
    impact: "Simplified the creation of server-rendered React applications and static websites.",
  },
  {
    id: "webassembly",
    year: 2017,
    title: "WebAssembly",
    description: "The World Wide Web Consortium (W3C) releases the first WebAssembly specification.",
    categories: ["Web Technology", "Programming Language"],
    impact:
      "Enabled high-performance applications on web platforms, bridging the gap between web and native performance.",
  },
  {
    id: "sitecore-xm-cloud",
    year: 2022,
    title: "Sitecore XM Cloud",
    description:
      "Sitecore launches XM Cloud, a cloud-native CMS built on their composable digital experience platform.",
    categories: ["DXP", "CMS", "Cloud Storage", "Web Technology"],
    impact:
      "Accelerated the shift towards composable architecture in enterprise content management, offering scalability and flexibility for digital experiences.",
  },
]

export const buildingBlockCategories = Array.from(new Set(buildingBlockMilestones.flatMap((m) => m.categories))).sort()

export const categoryGroups: CategoryGroup[] = [
  {
    name: "Backend Technologies",
    categories: ["Backend", "Database", "API", "DevOps", "Cloud Storage"],
  },
  {
    name: "Frontend Technologies",
    categories: ["Frontend", "Frontend Framework", "Web Technology"],
  },
  {
    name: "Web Infrastructure",
    categories: ["Protocol", "Infrastructure", "Web Architecture"],
  },
  {
    name: "Content Management",
    categories: ["CMS", "DXP"],
  },
  {
    name: "Programming Languages",
    categories: ["Programming Language"],
  },
  {
    name: "Mobile & Hardware",
    categories: ["Mobile", "Hardware", "IoT"],
  },
  {
    name: "Data & Analytics",
    categories: ["Big Data", "Analytics", "Search"],
  },
  {
    name: "E-commerce & Business",
    categories: ["E-commerce", "Service Fees"],
  },
  {
    name: "Emerging Technologies",
    categories: ["AI/ML", "AR", "Cryptocurrency", "Decentralized"],
  },
  {
    name: "Development Tools",
    categories: ["Build Tools", "State Management"],
  },
]

