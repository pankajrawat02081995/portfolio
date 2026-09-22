export const profile = {
  name: 'Pankaj Rawat',
  role: 'Senior iOS Developer',
  location: 'Yamuna Nagar, Haryana, India',
  phone: '+91 90534 62565',
  phoneHref: '+919053462565',
  email: 'pankajrawat0070@gmail.com',
  // Drop a PDF into public/ and set this to its path (e.g. '/Pankaj_Rawat_Resume.pdf')
  // to switch on the "Download CV" button in the hero. Leave null to hide it.
  resumeUrl: null,
  summary:
    'Senior iOS Developer with 8+ years designing, developing and deploying native iOS applications across fintech, healthcare, e-commerce, insurance, education and on-demand service domains. Deep expertise in Swift, UIKit, MVVM, VIPER, REST APIs, Firebase, GraphQL, Socket.IO, Apple Pay, Stripe, MapKit and Core Location — with a track record of scalable architecture, third-party integrations, performance optimisation and App Store delivery.',
}

export const stats = [
  { value: 8, suffix: '+', label: 'Years building for iOS' },
  { value: 6, suffix: '', label: 'Product companies' },
  { value: 20, suffix: '+', label: 'Apps shipped & maintained' },
  { value: 6, suffix: '', label: 'Industry domains' },
]

export const marquee = [
  'Swift', 'UIKit', 'MVVM', 'VIPER', 'GraphQL', 'Socket.IO', 'Apple Pay', 'Stripe',
  'Firebase', 'MapKit', 'Core Data', 'URLSession', 'Crashlytics', 'TestFlight',
]

export const experience = [
  {
    company: 'Maaze Underwriting Solutions Pvt. Ltd.',
    role: 'Senior iOS Developer',
    period: '02/2025 — Present',
    current: true,
    domain: 'Insurance / Underwriting',
    points: [
      'Design and develop scalable native iOS applications using Swift and UIKit with MVVM architecture.',
      'Build secure and maintainable networking layers integrating REST APIs and GraphQL services.',
      'Implement Firebase Analytics, Crashlytics, Push Notifications and Remote Config.',
      'Integrate payment solutions including Apple Pay and Stripe.',
      'Develop location-based features using MapKit and Core Location.',
      'Optimise application performance, reduce memory usage and improve responsiveness.',
      'Collaborate with product managers, backend developers, QA engineers and UI/UX designers.',
      'Publish and maintain applications on the App Store while ensuring compliance with Apple guidelines.',
    ],
    tags: ['Swift', 'UIKit', 'MVVM', 'GraphQL', 'Apple Pay', 'Stripe', 'MapKit'],
  },
  {
    company: 'CePoch',
    role: 'Senior iOS Developer',
    period: '03/2023 — 11/2025',
    domain: 'Enterprise',
    points: [
      'Developed and maintained enterprise-grade iOS applications using Swift.',
      'Implemented real-time communication using Socket.IO.',
      'Integrated Firebase Authentication, Cloud Messaging, Analytics and Crashlytics.',
      'Built reusable UI components and modular architecture to improve development efficiency.',
      'Reduced application crashes through proactive debugging and performance tuning.',
      'Participated in code reviews, sprint planning and Agile ceremonies.',
    ],
    tags: ['Swift', 'Socket.IO', 'Firebase', 'Modular UI'],
  },
  {
    company: 'Tech Abet',
    role: 'Senior iOS Developer',
    period: '09/2021 — 02/2023',
    domain: 'Product Engineering',
    points: [
      'Delivered feature-rich iOS applications using MVVM architecture.',
      'Integrated RESTful APIs and implemented secure authentication workflows.',
      'Built responsive interfaces following Apple Human Interface Guidelines.',
      'Improved application performance and loading times through optimisation techniques.',
      'Worked closely with backend teams to define API contracts and resolve integration issues.',
    ],
    tags: ['MVVM', 'REST APIs', 'Auth', 'HIG'],
  },
  {
    company: 'Tec Hangouts',
    role: 'Senior iOS Developer',
    period: '01/2021 — 08/2021',
    domain: 'On-demand Services',
    points: [
      'Developed new application features and maintained existing production applications.',
      'Integrated third-party SDKs including Firebase and payment gateways.',
      'Fixed production issues and enhanced application stability.',
      'Participated in release management and App Store deployments.',
    ],
    tags: ['SDK Integration', 'Payments', 'Release Management'],
  },
  {
    company: 'Netscape Labs',
    role: 'Senior iOS Developer',
    period: '12/2019 — 12/2020',
    domain: 'Consumer Apps',
    points: [
      'Developed scalable iOS applications using Swift and UIKit.',
      'Implemented REST API integrations and local data persistence.',
      'Improved user experience through application responsiveness and UI consistency.',
      'Collaborated with QA teams to ensure high-quality releases.',
    ],
    tags: ['Swift', 'UIKit', 'Persistence', 'QA'],
  },
  {
    company: 'X Kode Studio LLP',
    role: 'Junior iOS Developer',
    period: '05/2018 — 11/2019',
    domain: 'Studio / Agency',
    points: [
      'Developed native iOS applications using Swift and UIKit.',
      'Implemented UI screens from design specifications.',
      'Integrated REST APIs and Firebase services.',
      'Fixed bugs, improved application performance and participated in App Store releases.',
      'Gained experience in Git, Agile methodology and collaborative software development.',
    ],
    tags: ['Swift', 'UIKit', 'Firebase', 'Git'],
  },
]

export const projects = [
  {
    name: 'Cheers2You',
    tagline: 'Liquor Delivery & E-commerce Platform',
    index: '01',
    accent: 'cyan',
    points: [
      'Native iOS app for online ordering and delivery with product browsing, cart, wishlist, checkout and order management.',
      'Integrated Apple Pay and Stripe for secure transactions.',
      'Built authentication, profile, address management, order history, REST APIs, Firebase services and push notifications.',
      'Optimised application performance and supported smooth App Store deployments.',
    ],
    tags: ['Swift', 'Apple Pay', 'Stripe', 'Firebase', 'REST APIs'],
  },
  {
    name: 'StrongBee',
    tagline: 'Fitness & Gym Management Platform',
    index: '02',
    accent: 'violet',
    points: [
      'Fitness application for gyms, trainers and members with workout plans, memberships, subscriptions and personal-training booking.',
      'Implemented coupon management, promotional offers, Firebase notifications, REST APIs and secure authentication.',
      'Developed dashboards for progress, memberships and fitness activities using VIPER architecture.',
    ],
    tags: ['VIPER', 'Subscriptions', 'Firebase', 'Dashboards'],
  },
  {
    name: 'The Training Notebook',
    tagline: 'Personal Training & Gym Management',
    index: '03',
    accent: 'pink',
    points: [
      'Workout logging, exercise records, fitness notes, progress tracking and personal-training appointment scheduling.',
      'Built client profiles, training history and fitness records with push notifications, REST APIs, Firebase and secure authentication.',
      'Enhanced performance and user experience through optimised UI and efficient data handling.',
    ],
    tags: ['Swift', 'Scheduling', 'Push Notifications', 'Core Data'],
  },
  {
    name: 'Clothing Click',
    tagline: 'Marketplace & Social Commerce Platform',
    index: '04',
    accent: 'lime',
    points: [
      'Marketplace features for seller registration, store management, product catalogs, inventory, orders, cart, wishlist, payments and tracking.',
      'Implemented Google, Apple and Facebook social login with authentication and profile management.',
      'Built product search, filtering, category browsing, REST APIs, Firebase services, push notifications and scalable backend communication.',
      'Optimised performance for a smooth shopping experience.',
    ],
    tags: ['Marketplace', 'Social Login', 'Search & Filter', 'Firebase'],
  },
]

export const skills = [
  { title: 'Languages', icon: 'code', items: ['Swift'] },
  {
    title: 'iOS Frameworks',
    icon: 'layers',
    items: ['UIKit', 'MapKit', 'Core Location', 'UserNotifications', 'AVFoundation'],
  },
  { title: 'Architectures', icon: 'grid', items: ['MVVM', 'MVP', 'VIPER', 'MVC'] },
  {
    title: 'Networking',
    icon: 'signal',
    items: ['REST APIs', 'GraphQL', 'Socket.IO', 'URLSession', 'JSON Parsing'],
  },
  {
    title: 'Firebase',
    icon: 'flame',
    items: ['Authentication', 'Cloud Messaging', 'Analytics', 'Crashlytics', 'Remote Config'],
  },
  { title: 'Payments', icon: 'card', items: ['Apple Pay', 'Stripe'] },
  { title: 'Persistence', icon: 'database', items: ['Core Data', 'UserDefaults'] },
  {
    title: 'Tools & Process',
    icon: 'tool',
    items: ['Xcode', 'Git', 'GitHub', 'Bitbucket', 'JIRA', 'Postman', 'TestFlight', 'Agile', 'Scrum'],
  },
]

export const sections = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
