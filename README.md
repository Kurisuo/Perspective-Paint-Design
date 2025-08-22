# Perspective Paint & Design - Professional Painting Services Website

A modern, responsive website for Perspective Paint & Design, a professional painting company serving San Diego. Built with HTML5, CSS3, and JavaScript, featuring a dark theme with elegant animations and comprehensive service information.

## 🎨 Features

### Design & User Experience
- **Dark Theme**: Professional dark gradient background with red accent colors
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Smooth Animations**: Scroll-triggered effects and hover animations
- **Interactive Elements**: Video controls, image galleries, and carousels
- **Professional Typography**: Clean, modern font hierarchy using Poppins

### Key Sections
- **Hero Section**: Video background with compelling call-to-action
- **Trust Badges**: Animated certification and accreditation displays
- **Services Overview**: Interactive service cards with hover effects
- **About Section**: Company information with statistics
- **Process Steps**: Visual workflow presentation
- **Gallery**: Interactive image slider with thumbnails
- **Our Work Carousel**: Continuous scrolling gallery showcasing projects
- **Team Section**: Team member carousel with hover descriptions
- **Testimonials**: Customer review carousel
- **Color Palette**: Interactive color selection tool
- **Contact Information**: Map integration and contact details
- **Footer**: Comprehensive site navigation and social links

### Technical Features
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Variables**: Consistent theming and easy customization
- **Media Queries**: Responsive breakpoints for all screen sizes
- **JavaScript Interactivity**: Dynamic content loading and user interactions
- **Performance Optimized**: Optimized images and animations

## 📁 Project Structure

```
Work_Program/
├── index.html              # Main homepage
├── styles.css              # Complete CSS stylesheet
├── script.js               # JavaScript functionality
├── README.md               # Project documentation
├── netlify.toml            # Netlify deployment configuration
├── media/                  # Image and video assets
│   ├── house_1.jpg         # Hero background image
│   ├── house_2.jpg         # Gallery images
│   ├── house_3.jpg
│   ├── house_4.jpg
│   ├── house_5.jpg
│   ├── house_6.jpg
│   ├── house_7.JPG
│   ├── calle-la-serra-exterior.jpg
│   ├── calle-la-serra-interior.jpg
│   ├── chipotle-building-exterior.jpg
│   ├── firebrand-exterior.jpg
│   ├── firebrand-interior.jpg
│   ├── fumc-interior.jpg
│   ├── Mimulus-cabinets-and-interior.jpg
│   ├── Mimulus-exterior.jpg
│   ├── mustaine-exterior.jpg
│   ├── ocean-front-exterior.jpg
│   ├── paso-real-interior.jpg
│   ├── rancho-cielo-exterior.jpg
│   ├── restuarant-exterior.jpg
│   ├── trieste-cabinets-and-interior.jpg
│   ├── verdes-el-ranchero-interior.jpeg
│   ├── property-painted-video.mp4
│   ├── team photos         # Team member images
│   ├── trust badges        # Certification logos
│   └── social icons        # Social media icons
├── contact.html            # Contact page
├── estimate.html           # Estimate request page
├── gallery.html            # Full gallery page
├── career.html             # Career opportunities page
├── thank-you.html          # Form confirmation page
├── offline.html            # Offline fallback page
└── 404.html               # Error page
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

## 🎯 Key Features Explained

### Hero Section
- Full-screen video background with overlay
- Compelling headline and call-to-action buttons
- Trust indicators prominently displayed
- Responsive design adapts to all screen sizes

### Trust Badges
- Animated certification logos with glow effects
- Hover interactions with scale and brightness changes
- Responsive grid layout
- Performance-optimized animations

### Services Overview
- Interactive service cards with background images
- Hover effects with content overlays
- Grid layout that adapts to screen size
- Call-to-action buttons for each service

### Our Work Carousel
- Continuous scrolling gallery showcasing 20+ project images
- Seamless infinite loop animation (3-minute duration)
- Responsive design with proper image sizing
- Optimized for smooth performance

### Team Section
- Carousel navigation with arrow controls
- Hover descriptions for team members
- Responsive grid that shows different numbers of cards per screen size
- Smooth transitions between slides

### Testimonials
- Side-by-side testimonial cards
- Navigation arrows and dot indicators
- Responsive layout that stacks on mobile
- Star ratings and customer information

### Color Palette Tool
- Interactive color selection interface
- Real-time preview of selected colors
- Custom color picker integration
- Professional color options

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization:

```css
:root {
    --primary: #A8383B;        /* Main brand color */
    --secondary: #1A1A1A;      /* Dark background */
    --accent: #FF4444;         /* Accent color */
    --gradient-main: linear-gradient(135deg, #0D0D0D 0%, #1A1A1A 50%, #2C1A1A 100%);
}
```

### Content Updates
- **Images**: Replace files in the `media/` directory
- **Text**: Edit content directly in HTML files
- **Contact Info**: Update phone numbers and addresses in footer
- **Services**: Modify service cards in the services section

## 📱 Responsive Design

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 Pages

### Main Pages
- **Homepage** (`index.html`): Complete company overview
- **Contact** (`contact.html`): Contact form and information
- **Estimate** (`estimate.html`): Quote request form
- **Gallery** (`gallery.html`): Extended project gallery
- **Career** (`career.html`): Job opportunities

### Utility Pages
- **Thank You** (`thank-you.html`): Form submission confirmation
- **404** (`404.html`): Error page
- **Offline** (`offline.html`): Offline fallback

## 🎬 Media Assets

### Images
- High-quality project photos (interior and exterior)
- Team member portraits
- Trust badge logos (BBB, CSLB, OSHA, Google Guaranteed, PCA Accredited)
- Social media icons

### Videos
- Property showcase video
- Optimized for web delivery

## 🔍 SEO Features

- Semantic HTML structure
- Meta tags for social sharing
- Alt text for all images
- Structured data markup
- Fast loading times

## 📞 Contact Information

**Perspective Paint & Design**
- Phone: (619) 818-4816
- Service Areas: San Diego and surrounding areas
- Specialties: Interior & Exterior Painting, Commercial & Residential

## 🛠️ Development

### CSS Architecture
- Modular CSS with clear section organization
- CSS custom properties for theming
- Mobile-first responsive design
- Performance-optimized animations

### JavaScript Features
- Smooth scrolling navigation
- Interactive carousels and sliders
- Form validation and submission
- Dynamic content loading
- Video player controls

## 📈 Performance

- Optimized images and videos
- Efficient CSS animations
- Minimal JavaScript footprint
- Fast loading times
- Mobile-optimized

## 🔒 Security

- Form validation and sanitization
- Secure contact form handling
- HTTPS ready
- No external dependencies

## 🚀 Deployment

The website is configured for deployment on Netlify with:
- `netlify.toml` configuration file
- Optimized for static site hosting
- Fast CDN delivery

## 📝 License

This project is proprietary to Perspective Paint & Design. All rights reserved.

## 🤝 Support

For technical support or questions about the website:
- Contact the development team
- Review the documentation
- Check browser compatibility

---

**Built with ❤️ for Perspective Paint & Design** 