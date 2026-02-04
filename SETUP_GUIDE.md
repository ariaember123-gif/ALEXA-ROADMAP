# ALEXA Roadmap Website - Complete Setup Guide

## 📦 What You're Getting

A complete, production-ready single-page website featuring:

- ✅ **5 Sprints** (10 weeks) of detailed roadmap content
- ✅ **Interactive Timeline** with expandable accordion sections
- ✅ **Fully Responsive** design (desktop, tablet, mobile)
- ✅ **Brand Assets** integrated from Figma
- ✅ **Structured Data** in JSON format (easy to update)
- ✅ **No Dependencies** - Pure HTML, CSS, JavaScript
- ✅ **Fast Loading** - Optimized for performance
- ✅ **Accessible** - WCAG 2.1 compliant

## 🚀 Quick Start (3 Steps)

### Step 1: Verify Files

Ensure you have all these files:

```
alexa-roadmap-website/
├── index.html                    ✓ Main website
├── setup-verification.html       ✓ Check installation
├── README.md                     ✓ Documentation
├── SETUP_GUIDE.md               ✓ This file
├── server.py                     ✓ Python server script
├── package.json                  ✓ NPM scripts
├── css/
│   └── styles.css               ✓ All styles
├── js/
│   └── app.js                   ✓ All functionality
├── data/
│   └── roadmap-data.json        ✓ Content (editable)
└── assets/
    └── images/                   ✓ 16+ brand assets
```

### Step 2: Start Local Server

Choose ONE method:

**Option A: Python (Recommended)**
```bash
python3 server.py
```
Or:
```bash
python3 -m http.server 8000
```

**Option B: Node.js**
```bash
npx serve -p 8000
```

**Option C: PHP**
```bash
php -S localhost:8000
```

### Step 3: Open in Browser

```
http://localhost:8000
```

First, check: `http://localhost:8000/setup-verification.html`

Then view: `http://localhost:8000/index.html`

## 📋 Detailed Instructions

### For Windows Users

1. **Install Python** (if not installed)
   - Download from python.org
   - Check "Add Python to PATH" during installation

2. **Open Command Prompt**
   - Press `Win + R`, type `cmd`, press Enter
   - Navigate to the project folder:
     ```cmd
     cd C:\path\to\alexa-roadmap-website
     ```

3. **Start Server**
   ```cmd
   python server.py
   ```

4. **Open Browser**
   - Go to `http://localhost:8000`

### For Mac Users

1. **Open Terminal**
   - Press `Cmd + Space`, type "Terminal", press Enter

2. **Navigate to Project**
   ```bash
   cd /path/to/alexa-roadmap-website
   ```

3. **Start Server** (Python is pre-installed)
   ```bash
   python3 server.py
   ```

4. **Open Browser**
   - Go to `http://localhost:8000`

### For Linux Users

1. **Open Terminal**

2. **Navigate to Project**
   ```bash
   cd /path/to/alexa-roadmap-website
   ```

3. **Start Server**
   ```bash
   python3 server.py
   ```
   Or make it executable first:
   ```bash
   chmod +x server.py
   ./server.py
   ```

4. **Open Browser**
   - Go to `http://localhost:8000`

## 🔧 Troubleshooting

### Issue: "python3: command not found"

**Solution:**
- Windows: Install Python from python.org
- Mac: Should be pre-installed, try `python` instead
- Linux: `sudo apt-get install python3` (Ubuntu/Debian)

### Issue: "Port 8000 already in use"

**Solution:**
Change the port in `server.py` or use a different port:
```bash
python3 -m http.server 3000
```
Then open `http://localhost:3000`

### Issue: "Failed to load JSON"

**Cause:** Opening HTML file directly (file://) instead of through a server

**Solution:** Always use a local server (see Step 2 above)

### Issue: Images not loading

**Check:**
1. All PNG files are in `/assets/images/`
2. Using a local server (not file://)
3. Browser console for errors (F12 → Console)

## 📝 Updating Content

### Where to Edit

**File:** `/data/roadmap-data.json`

This file contains ALL the website content:
- Overview section
- All 5 sprints with weeks
- Traction metrics
- Competitive analysis
- Monetization details
- Use of funds
- Quarterly roadmap
- Token transparency

### How to Edit

1. Open `roadmap-data.json` in any text editor
2. Find the section you want to change
3. Edit the text (keep the JSON structure intact)
4. Save the file
5. Refresh your browser

**Example - Updating a metric:**

Before:
```json
{ "label": "Waitlist signups", "value": "___" }
```

After:
```json
{ "label": "Waitlist signups", "value": "247" }
```

### JSON Editing Tips

- Don't remove commas between items
- Keep quotes around text values
- Arrays use `[]`, objects use `{}`
- Test your JSON: jsonlint.com

## 🎨 Customizing Design

### Colors

Edit `/css/styles.css`, find the `:root` section:

```css
:root {
    --color-primary: #00FF00;     /* Change green */
    --color-secondary: #FF00FF;   /* Change magenta */
    --color-background: #000000;  /* Change background */
    /* ... more colors ... */
}
```

### Typography

To change font sizes, edit in `:root`:

```css
--font-size-h1: 40px;
--font-size-h2: 24px;
--font-size-body: 16px;
```

### Spacing

Adjust spacing variables:

```css
--spacing-sm: 16px;
--spacing-md: 24px;
--spacing-lg: 32px;
```

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)

1. Create GitHub repository
2. Push all files
3. Go to Settings → Pages
4. Select branch → Save
5. Site live at: `username.github.io/repo-name`

### Option 2: Netlify (Free)

1. Go to netlify.com
2. Drag & drop the folder
3. Site live in seconds
4. Auto-deploy on updates

### Option 3: Vercel (Free)

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel` in project folder
3. Follow prompts
4. Site deployed

### Option 4: Traditional Hosting

1. Get hosting (Bluehost, SiteGround, etc.)
2. Upload files via FTP/cPanel
3. Point domain to hosting
4. Site live

## 📊 Performance Tips

### Already Optimized

- ✓ Minimal CSS (single file, ~15KB)
- ✓ Vanilla JS (no frameworks, ~8KB)
- ✓ Google Fonts (only Montserrat)
- ✓ Lazy loading ready
- ✓ Smooth scroll
- ✓ CSS animations

### Further Optimization

1. **Compress Images**
   ```bash
   # Use tools like TinyPNG or ImageOptim
   ```

2. **Minify CSS/JS** (for production)
   ```bash
   # Use online tools or build scripts
   ```

3. **Enable Caching** (in hosting settings)

## ✅ Testing Checklist

Before going live, test:

- [ ] All accordion sections open/close correctly
- [ ] Navigation links scroll to correct sections
- [ ] Mobile view looks good (use DevTools)
- [ ] All images load
- [ ] JSON data displays correctly
- [ ] CTA buttons work (update functionality first)
- [ ] Keyboard navigation works (Tab, Enter, Space)
- [ ] Check in different browsers (Chrome, Firefox, Safari)
- [ ] Run Lighthouse audit (Chrome DevTools)

## 🔐 Security Notes

### Before Production

1. **Update CTA Buttons**
   - In `js/app.js`, find `ctaButtons.forEach`
   - Replace alert with real waitlist functionality

2. **Add Real Proof Links**
   - Update in `roadmap-data.json`
   - Link to actual demos, changelogs, transparency pages

3. **Review Content**
   - Ensure no placeholder text remains
   - Verify all metrics are accurate
   - Check token transparency statement

## 📱 Mobile Testing

Test on real devices or use:

- Chrome DevTools (F12 → Device Toolbar)
- Firefox Responsive Design Mode
- Safari Developer Tools
- BrowserStack (for multiple devices)

**Key breakpoints:**
- 768px - Tablet
- 480px - Mobile

## 🎯 Next Steps

1. ✅ Verify setup with `setup-verification.html`
2. ✅ Review the main website at `index.html`
3. ✅ Update `roadmap-data.json` with your actual data
4. ✅ Test on mobile devices
5. ✅ Deploy to production
6. ✅ Share with stakeholders

## 📞 Support

### Common Questions

**Q: Can I change the font?**
A: Yes, update the Google Fonts link in `index.html` and CSS variables

**Q: How do I add a new sprint?**
A: Add a new sprint object to the `sprints` array in `roadmap-data.json`

**Q: Can I add more sections?**
A: Yes, but requires editing HTML, CSS, and JS files

**Q: What about analytics?**
A: Add Google Analytics or similar before the `</head>` tag

**Q: How do I add a waitlist form?**
A: Integrate with a service like Mailchimp, ConvertKit, or build custom

## 🎓 Learning Resources

- JSON Tutorial: w3schools.com/js/js_json_intro.asp
- CSS Variables: developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties
- Accessibility: web.dev/accessibility

## 📄 File Descriptions

| File | Purpose |
|------|---------|
| `index.html` | Main website markup |
| `css/styles.css` | All styles with brand colors |
| `js/app.js` | Dynamic rendering & interactions |
| `data/roadmap-data.json` | All content (easy to edit) |
| `assets/images/*` | Brand assets from Figma |
| `server.py` | Local development server |
| `setup-verification.html` | Installation check |

## 🏆 Best Practices

1. **Always use a local server** during development
2. **Test on real devices** before deployment
3. **Keep JSON valid** when editing data
4. **Backup before major changes**
5. **Use version control** (Git)
6. **Monitor performance** with Lighthouse
7. **Update content regularly** to show progress

---

## ✨ You're All Set!

Your ALEXA Roadmap Website is ready to showcase your development journey. 

**Start the server and begin building in public!** 🚀

```bash
python3 server.py
```

Then open: `http://localhost:8000`

---

**Questions?** Check the README.md or refer back to this guide.

**Happy Building!** 🎉
