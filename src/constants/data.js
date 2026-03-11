export const NAV_LINKS = ['Home', 'About', 'Academics', 'Projects', 'Resume', 'Contact'];

export const SKILLS_BARS = [
  { label: 'WordPress', pct: 95, color: '#21759b' },
  { label: 'HTML', pct: 85, color: '#e34c26' },
  { label: 'CSS', pct: 80, color: '#264de4' },
  { label: 'JavaScript', pct: 70, color: '#f7df1e' },
  { label: 'React', pct: 60, color: '#61dafb' },
  { label: 'PHP', pct: 45, color: '#777bb4' },
  { label: 'Python', pct: 30, color: '#83cef1' },
  { label: 'Django', pct: 30, color: '#81f9e3' },

];

export const ABOUT_CARDS = [
  { icon: '👩‍💻', title: 'Personal Interest', items: ['Helping hand: Volunteer WordPress Trainer at Matrix Master', 'Kitchen experimenter — recipes that have no business working, but usually do', 'Exploring Netherlands'] },
  { icon: '💡', title: 'My Approach to Work', items: ['Empathy First', 'Leaving Things Better Than I Found Them', 'Writing clean, maintainable, and scalable code', 'Attention to detail'] },
  { icon: '📚', title: 'Education Journey', items: ['Full-Stack Web Development training (React, Python, Django)', 'WooCommerce & PHP Development', 'Shopify & SaaS Products', 'Continuous learning through online courses, projects, and practice'] },
  { icon: '🎯', title: 'Future Goals', items: ['A Collaborative Team', 'Impactful Work', 'Language Fluency'] },
];

export const CERTIFICATIONS = [
  { title: 'Full Stack Web Developer', platform: 'Code Matrix Zone', year: '2025', desc: 'Comprehensive training in HTML5, CSS, JavaScript, Python, React.js and Django.' },
  { title: 'No-Code Development', platform: 'Le Wagon Netherlands', year: '2025', desc: 'Building web products on Webflow without traditional coding.' },
  { title: 'Web Development Course with AI', platform: 'Internshala Trainings', year: '2025', desc: 'Full web development training covering PHP, JavaScript and React.js with AI.' },
  { title: 'React Bootcamp', platform: 'LetsUpgrade', year: '2025', desc: 'Intensive bootcamp focused on building modern applications with React.js.' },
  { title: 'Git & GitHub Bootcamp', platform: 'LetsUpgrade', year: '2025', desc: 'Version control fundamentals including branching, merging and collaborative workflows with Git and GitHub.' },
  { title: 'Customer Care Executive', platform: 'Skill India', year: '2025', desc: 'Professional certification in customer service and communication skills.' },
];

export const EDUCATION_ITEMS = [
  { label: 'Degree', value: 'Bachelor of Computer Engineering' },
  { label: 'Year', value: '2015' },
  { label: 'Location', value: 'India' },
];

export const SUBJECTS = [
  'Web Technologies', 'Software Engineering', 'Database Management', 'UI/UX Design',
  'JavaScript Frameworks', 'PHP & Server-side Dev', 'Cloud Computing', 'Project Management',
];

export const PROJECTS = [

  // ── Projects ────────────────────────────────────────────────────

  {
    id: 'smart-service-booking-system',
    category: 'Projects',
    emoji: '📅',
    image: '/images/service-booking.png',
    title: 'Smart Service Booking System',
    desc: 'A full-stack service booking platform that connects users with service providers — browse, compare, and book appointments instantly.',
    tags: ['Python', 'Django', 'Bootstrap'],
    stack: 'HTML, CSS, Bootstrap, Python, Django',
    link: 'https://smart-service-booking-system.onrender.com/',
    year: '2026',
    features: [
      'User authentication with separate Login and Register flows for customers and providers',
      'Search and browse service providers based on specific service needs',
      'View provider profiles with ratings, reviews, and availability',
      'Instant booking with time slot selection and confirmation',
      'Provider onboarding flow to register and list services on the platform',
      'Responsive landing page with a step-by-step "How It Works" guide',
    ],
  },

  {
    id: 'prdd',
    category: 'Projects',
    emoji: '🎨',
    image: '/images/prdd_ui.png',
    title: 'PRDD Plugin UI Redesign',
    desc: 'Converted Figma prototype into a fully-functional modern admin panel.',
    tags: ['HTML', 'CSS', 'Bootstrap', 'Figma'],
    stack: 'HTML, CSS, Bootstrap',
    year: '2022',
    features: [
      'Converted Figma design into a fully functional UI for the PRDD plugin admin panel',
      'Used HTML5, Bootstrap 4, and custom CSS to create responsive layouts',
      'Improved onboarding flow, navigation menus, and page structure',
      'Worked with cross-functional teams (designer + developers) to finalize UI updates',
    ],
  },

  // ── Plugin / Customization ──────────────────────────────────────

  {
    id: 'cos-email',
    category: 'Plugin',
    emoji: '📧',
    image: '/images/COS_Email.png',
    title: 'Email Sending Enhancement',
    desc: 'Sends email notifications when WooCommerce order status changes to a custom status.',
    tags: ['PHP', 'WordPress', 'WooCommerce'],
    stack: 'PHP, MySQL (via WooCommerce data), Hooks & Filters',
    year: '2025',
    features: [
      'Developed Email Sending functionality with dynamic placeholders support',
      'Used HTML & PHP form for settings input',
      'Used WordPress functions to securely store and retrieve data from post_meta',
      'wc_mail function used to send emails',
    ],
  },
  {
    id: 'quickcart',
    category: 'Plugin',
    emoji: '🛒',
    image: '/images/quickcart_update.png',
    title: 'QuickCart Plugin',
    desc: 'Auto-updates WooCommerce cart totals on quantity change without page reload.',
    tags: ['PHP', 'WordPress', 'jQuery', 'AJAX'],
    stack: 'PHP, WordPress, JavaScript (jQuery), AJAX',
    year: '2024',
    features: [
      'Automatically detects quantity changes in the WooCommerce cart',
      'Uses AJAX to update cart contents without full page reload',
      'Added a timed delay to prevent unnecessary multiple updates on rapid quantity changes',
      'Loads JavaScript only on the cart page for performance optimization',
    ],
  },
  {
    id: 'qty-dropdown',
    category: 'Plugin',
    emoji: '🔽',
    image: '/images/qty_product.png',
    title: 'Quantities Dropdown Box',
    desc: 'Replaces WooCommerce quantity input with a dropdown selector for better UX.',
    tags: ['PHP', 'WordPress', 'WooCommerce'],
    stack: 'PHP, WordPress, WooCommerce, WP Settings API',
    year: '2024',
    features: [
      'Converts WooCommerce quantity input fields into dropdown selectors',
      'Admin settings page to enable/disable on product and/or cart pages',
      'Integration with WooCommerce template system by overriding quantity input templates',
    ],
  },
  {
    id: 'category',
    category: 'Plugin',
    emoji: '📦',
    image: '/images/product_category.png',
    title: 'Product Categorization',
    desc: 'Dynamic multi-select category selector using WordPress REST API and React.',
    tags: ['PHP', 'React', 'WP REST API'],
    stack: 'PHP, React.js, JavaScript (ES6+), Tailwind CSS, WordPress REST API',
    year: '2024',
    features: [
      'Implemented a multi-selection dropdown in the product form for multiple categories',
      'Pulled category data dynamically from wpCategoryData using the WordPress REST API',
    ],
  },
  {
    id: 'csv',
    category: 'Plugin',
    emoji: '📊',
    image: '/images/csv.jpg',
    title: 'CSV Exporter Addon',
    desc: 'Generates rich CSV reports with per-product quantities and weights.',
    tags: ['PHP', 'MySQL', 'WooCommerce'],
    stack: 'PHP, MySQL (via WooCommerce data), Hooks & Filters',
    features: [
      'Extracts unique products from all orders dynamically and creates individual CSV columns',
      'Calculates and displays total quantities and total weight (in kg) for each product',
      'Supports orders with multiple products and dynamically updates',
    ],
  },
  {
    id: 'coupon',
    category: 'Plugin',
    emoji: '🎟️',
    image: '/images/coupon.jpg',
    title: 'CouponCraft Plugin',
    desc: 'Bulk-delete WooCommerce coupons by date range to keep store database clean.',
    tags: ['PHP', 'WooCommerce API'],
    stack: 'PHP, WooCommerce API, WordPress Hooks & Filters',
    features: [
      'Allows selection of start and end dates to filter coupons for deletion',
      'Integrates seamlessly with WooCommerce admin dashboard for easy access',
      'Ensures safe deletion with validation checks to avoid accidental removals',
    ],
  },


  // ── Frontend Demos ─────────────────────────────────────────────
  {
    id: 'calc',
    category: 'Demo',
    emoji: '🧮',
    image: '/images/calculator.png',
    title: 'Calculator',
    desc: 'Functional calculator built with vanilla JavaScript and clean CSS styling.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://codepen.io/chetna181/full/ZExNNBg',
    stack: 'JavaScript, HTML, CSS',
    features: [
      'Supports basic arithmetic operations',
      'Keyboard-friendly input handling',
      'Clean and minimal UI design',
    ],
  },
  {
    id: 'animated-card',
    category: 'Demo',
    emoji: '🃏',
    image: '/images/animated-card.png',
    title: 'Animated Card',
    desc: 'CSS animated card with smooth hover transitions and modern styling.',
    tags: ['HTML', 'CSS'],
    link: 'https://codepen.io/chetna181/full/jOzoooN',
    stack: 'HTML, CSS',
    features: [
      'Smooth CSS hover animation',
      'Modern card design with layered effects',
      'Responsive layout',
    ],
  },
  {
    id: 'grocery',
    category: 'Demo',
    emoji: '🛍️',
    image: '/images/Grocery list.png',
    title: 'Grocery Shopping List',
    desc: 'Interactive grocery list with add, remove and check-off functionality.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://codepen.io/chetna181/full/yLKmEqZ',
    stack: 'JavaScript, HTML, CSS',
    features: [
      'Add and remove grocery items dynamically',
      'Check off items as completed',
      'Clean and intuitive UI',
    ],
  },
  {
    id: 'clock',
    category: 'Demo',
    emoji: '🕐',
    image: '/images/clock.png',
    title: 'Clock',
    desc: 'Live analog and digital clock built with JavaScript and CSS animations.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://codepen.io/chetna181/full/XWEwLrN',
    stack: 'JavaScript, HTML, CSS',
    features: [
      'Real-time clock updates every second',
      'Smooth CSS rotation for clock hands',
      'Displays current time in digital format',
    ],
  },
  {
    id: 'faq',
    category: 'Demo',
    emoji: '❓',
    image: '/images/FAQ-page.png',
    title: 'FAQ Page',
    desc: 'Accordion-style FAQ page with smooth expand/collapse interactions.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    link: 'https://codepen.io/chetna181/full/bGvXKmK',
    stack: 'JavaScript, HTML, CSS',
    features: [
      'Accordion open/close animation',
      'Only one item open at a time',
      'Accessible keyboard navigation',
    ],
  },

];

export const WORK_EXPERIENCE = [

  {
    period: 'Sep 2025 – Present',
    active: true,
    role: 'Volunteer WordPress Trainer',
    company: 'Matrix Master, Rotterdam, Netherlands',
    pts: [
      'Delivered hands-on WordPress training sessions to beginner developers as part of the traineeship program.',
      'Guided students through plugin development, theme customisation, and WordPress best practices.',
      'Drew on 9+ years of real-world WordPress experience to bridge the gap between theory and practical application.',
    ],
  },
  {
    period: 'Sep 2025 – Jan 2026',
    active: false,
    role: 'Full-Stack Web Development Trainee',
    company: 'Matrix Master, Rotterdam, Netherlands',
    pts: [
      'Built an interactive, production-ready Service Booking System utilizing ReactJS for the frontend and Python/Django for the backend.',
      'Developed and consumed REST APIs to handle secure user authentication and CRUD operations.',
      'Implemented responsive, user-friendly UI components using Bootstrap, HTML5, and CSS3.',
      'Collaborated in an Agile team environment using Git/GitHub for version control and code reviews.',
    ],
  },
  {
    period: 'Oct 2015 – Aug 2025',
    active: false,
    role: 'Technical Customer Support Specialist & WordPress Developer',
    company: 'Tyche Softwares, Remote / India',
    pts: [
      'Provided high-level technical support for 15+ WooCommerce plugins, a Shopify app, and a SaaS product, successfully resolving 350+ complex technical tickets monthly.',
      'Debugged, patched, and developed minor plugin features using PHP, JavaScript, HTML, and CSS.',
      'Translated Figma UI/UX mockups into fully responsive frontend web pages alongside the design team.',
      'Maintained GitHub repositories, performed rigorous QA/regression testing, and optimized codebases.',
      'Improved internal documentation and knowledge bases, resulting in a 30% reduction in support tickets.',
      'Earned 500+ five-star customer reviews by combining technical expertise with deep empathy for the end-user.',
    ],
  },
];

export const SOFT_SKILLS = [
  {
    title: 'User-Centric Empathy',
    desc: 'Drawing from 9 years in technical support, I don\'t just write code; I code with the end-user in mind. I anticipate how users will interact with a product to prevent frustrations before they happen.',
  },
  {
    title: 'Deep Problem Solving',
    desc: 'I thrive on troubleshooting. I enjoy digging into error logs, breaking down complex bugs, and finding clean, efficient, and permanent solutions to technical conflicts.',
  },
  {
    title: 'Cross-Functional Collaboration',
    desc: 'Highly experienced in bridging the gap between customers, designers, and developers. I communicate technical issues clearly to non-technical stakeholders and work seamlessly within Agile teams.',
  },
  {
    title: 'Attention to Detail & QA',
    desc: 'Careful about code quality, UI consistency, and catching edge cases. My background in regression testing means I focus heavily on ensuring updates do not break existing functionalities.',
  },
  {
    title: 'Loyalty & Reliability',
    desc: 'I value stability and long-term growth. Having spent nearly a decade at my previous employer, I am deeply committed to the teams I join and the products I help build.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Passionate about staying up to date with modern web technologies. Successfully transitioned my skill set from pure PHP/WordPress to modern React and Python stacks through intensive, hands-on training.',
  },
];

export const TECH_ICONS = [
  { label: 'HTML', bg: '#e34c26', icon: 'devicon-html5-plain colored' },
  { label: 'CSS', bg: '#264de4', icon: 'devicon-css3-plain colored' },
  { label: 'JavaScript', bg: '#f7df1e', icon: 'devicon-javascript-plain colored' },
  { label: 'React', bg: '#20232a', icon: 'devicon-react-original colored' },
  { label: 'Python', bg: '#3572A5', icon: 'devicon-python-plain colored' },
  { label: 'Django', bg: '#092e20', icon: 'devicon-django-plain colored' },
  { label: 'PHP', bg: '#4f5b93', icon: 'devicon-php-plain colored' },
  { label: 'Bootstrap', bg: '#7952b3', icon: 'devicon-bootstrap-plain colored' },
  { label: 'WordPress', bg: '#21759b', icon: 'devicon-wordpress-plain colored' },
  { label: 'WooCommerce', bg: '#7f54b3', icon: 'devicon-woocommerce-plain colored' },
  { label: 'Shopify', bg: '#96bf48', icon: 'devicon-shopify-plain colored' },
  { label: 'MySQL', bg: '#00618a', icon: 'devicon-mysql-plain colored' },
  { label: 'GitHub', bg: '#24292e', icon: 'devicon-github-original colored' },
  { label: 'VS Code', bg: '#0078d4', icon: 'devicon-vscode-plain colored' },
  { label: 'Figma', bg: '#1e1e1e', icon: 'devicon-figma-plain colored' },
  { label: 'Postman', bg: '#ff6c37', icon: 'devicon-postman-plain colored' },
  { label: 'LocalWP', bg: '#3970b5', icon: 'devicon-wordpress-plain colored' },
  { label: 'Freshdesk', bg: '#25c16f', icon: 'devicon-google-plain colored' },
];