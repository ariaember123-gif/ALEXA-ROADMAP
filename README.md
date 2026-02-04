# ALEXA Roadmap Website

A professional, responsive single-page website showcasing ALEXA's development roadmap using YC-style + Agile methodology.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works seamlessly on desktop, tablet, and mobile devices
- **Interactive Timeline**: Vertical timeline with expandable accordion sections for each sprint and week
- **Structured Data**: All roadmap content stored in JSON format for easy updates
- **Accessibility**: WCAG 2.1 compliant with keyboard navigation and ARIA attributes
- **Fast Loading**: Optimized CSS and vanilla JavaScript with no heavy frameworks
- **SEO Optimized**: Meta tags, semantic HTML, and Open Graph support
- **Brand Consistency**: Uses ALEXA brand colors (#00FF00 green, #FF00FF magenta) and Montserrat typography

## 📁 Project Structure

```
alexa-roadmap-website/
├── index.html              # Main HTML file
├── css/
│   └── styles.css          # All styles with CSS variables
├── js/
│   └── app.js              # Dynamic content rendering & interactions
├── data/
│   └── roadmap-data.json   # Structured roadmap content (easy to update)
├── assets/
│   └── images/             # Brand assets and mascots from Figma
└── README.md               # This file
```

## 🎨 Design System

### Typography (Montserrat)
- **H1**: 40px/48px (32px/40px mobile) - Bold 700
- **H2**: 24px/32px (20px/28px mobile) - SemiBold 600
- **Body**: 16px/24px - Regular 400

### Colors
- **Primary**: #00FF00 (Bright Green)
- **Secondary**: #FF00FF (Magenta)
- **Background**: #000000 (Black)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #CCCCCC (Light Gray)

## 🛠️ Setup Instructions

### Local Development

1. **Clone or extract the project**
   ```bash
   cd alexa-roadmap-website
   ```

2. **Serve the files with a local server**
   
   Using Python 3:
   ```bash
   python3 -m http.server 8000
   ```
   
   Using Python 2:
   ```bash
   python -m SimpleHTTPServer 8000
   ```
   
   Using Node.js (npx):
   ```bash
   npx serve
   ```
   
   Using PHP:
   ```bash
   php -S localhost:8000
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Alternative: Open Directly
For quick viewing (though CORS may prevent JSON loading):
```bash
open index.html
# or
double-click index.html
```

## 📝 Updating Content

All roadmap content is stored in `/data/roadmap-data.json`. To update the roadmap:

1. Open `data/roadmap-data.json`
2. Edit the relevant sections:
   - `overview` - Hero section content
   - `sprints` - Sprint and week details
   - `traction` - Metrics and proof links
   - `competitive` - Competitive analysis
   - `monetization` - Monetization strategy
   - `useOfFunds` - Funds allocation
   - `quarterlyRoadmap` - High-level quarterly milestones
   - `tokenTransparency` - Token buyback statement

3. Save the file and refresh the page

**No code changes needed!** The JavaScript automatically loads and renders the updated content.

## 🎯 Page Sections

### 1. Overview (Hero)
- Roadmap overview description
- "We will:" commitments list
- CTA button

### 2. Main Roadmap (Timeline)
- 5 sprints (10 weeks total)
- Each sprint contains:
  - Sprint header with number, weeks, title, and goal
  - 2 weeks with accordion functionality
  - Week details organized by category:
    - 📦 Product / Research
    - 💼 Business / Strategy
    - 🎨 Design / Brand
    - 👥 Team
    - 📢 Marketing / Community
    - 🔒 Token / Trust
  - Week planned results
  - Sprint deliverables

### 3. Traction / Results Scoreboard
- Live metrics grid (8 key metrics)
- Proof links section

### 4. Competitive Analysis
- Direct competitors
- Indirect substitutes
- "Do nothing" alternatives
- Our wedge

### 5. Monetization + Revenue Model
- Monetization strategy
- Revenue model candidates
- Team notes

### 6. Use of Funds
- 40% Product & Engineering
- 20% Marketing & Growth
- 20% Go-To-Market & Partnerships
- 20% Operations & Legal

### 7. Quarterly Roadmap
- Q1 2026: Launch + First Pull
- Q2 2026: Retention + Monetization
- Q3 2026: Scale + Expansion

### 8. Token Transparency
- Scheduled buyback statement
- Proof links
- Factual, no-hype approach

## ♿ Accessibility Features

- Semantic HTML5 structure
- ARIA labels and attributes
- Keyboard navigation support (Tab, Enter, Space)
- Focus indicators
- Color contrast ratios meet WCAG AA standards
- Reduced motion support
- Screen reader friendly

## 🚢 Deployment

### Deploy to GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select branch and /root folder
4. Your site will be live at `https://username.github.io/repo-name`

### Deploy to Netlify

1. Drag and drop the folder to Netlify
2. Or connect your Git repository
3. Build command: (none needed)
4. Publish directory: `/`

### Deploy to Vercel

1. Run `vercel` in the project directory
2. Or import from GitHub
3. No configuration needed

## 🔧 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

## ⚡ Performance

- Minimal CSS (~15KB)
- Vanilla JavaScript (~8KB)
- No external dependencies except Google Fonts
- Fast page load (<1s on good connection)
- Optimized images from Figma

## 🎨 Brand Assets

Located in `/assets/images/`:
- `Group_129.png` - ALEXA logo
- `Frame_3.png` - Hero visualization
- `Mask_Group*.png` - Icon sets
- Additional mood board and brand assets

## 📄 File Details

### Where Content Lives
- **Roadmap content**: `/data/roadmap-data.json`
- **Styles**: `/css/styles.css`
- **Logic**: `/js/app.js`
- **Images**: `/assets/images/`

### Key Features in Code
- CSS Variables for easy theming
- Modular JavaScript functions
- JSON-based content management
- Accordion with multi-open support
- Smooth scroll navigation
- Lazy loading ready

## 🤝 Contributing

To add new features or fix bugs:

1. Edit the relevant files
2. Test across browsers
3. Ensure accessibility standards
4. Maintain brand consistency

## 📧 Support

For questions or issues, refer to the task documentation or contact the development team.

## 📜 License

Proprietary - ALEXA Project

---

**Built with** ❤️ **using YC-style + Agile methodology**

*Last updated: February 2026*
