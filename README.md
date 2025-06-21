# Convoluted Soup Website

A modern, responsive website for Convoluted Soup - showcasing delicious soups and culinary experiences.

## 🍲 Features

- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Contact Form**: Interactive contact form with validation
- **SEO Optimized**: Proper meta tags and structured content
- **Fast Loading**: Optimized for performance and speed
- **Accessibility**: Keyboard navigation and screen reader friendly

## 🚀 Deployment to Netlify

### Option 1: Deploy from GitHub (Recommended)

1. **Push to GitHub**:
   ```bash
   git add .
   git commit -m "Initial commit - Convoluted Soup website"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click "New site from Git"
   - Choose GitHub and authorize Netlify
   - Select your repository (`soup`)
   - Set build settings:
     - Build command: (leave empty - static site)
     - Publish directory: `.` (root directory)
   - Click "Deploy site"

3. **Custom Domain Setup**:
   - In your Netlify dashboard, go to "Domain settings"
   - Click "Add custom domain"
   - Enter your domain name
   - Follow the DNS configuration instructions:
     - Add a CNAME record pointing to your Netlify URL
     - Or add an A record pointing to Netlify's IP addresses

### Option 2: Manual Upload

1. **Zip your files**:
   - Select all files in your project folder
   - Create a ZIP archive

2. **Upload to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your ZIP file to the deploy area
   - Your site will be live instantly

## 📁 File Structure

```
soup/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
├── README.md           # This file
└── .git/               # Git repository
```

## 🎨 Customization

### Colors
The website uses a warm orange theme (`#e67e22`) that's perfect for food websites. You can customize colors in `styles.css`:

```css
/* Primary color */
--primary-color: #e67e22;

/* Secondary color */
--secondary-color: #f39c12;
```

### Content
Update the content in `index.html`:
- Change "Convoluted Soup" to your brand name
- Update contact information
- Modify service descriptions
- Add your own images

### Images
Replace the placeholder emoji (🍲) in the hero section with your own images:
1. Add image files to your project
2. Update the HTML to reference your images
3. Optimize images for web (compress them)

## 🔧 Local Development

To run the website locally:

1. **Simple method**: Double-click `index.html` to open in your browser
2. **With live server** (if you have VS Code):
   - Install "Live Server" extension
   - Right-click `index.html` → "Open with Live Server"

## 📱 Mobile Optimization

The website is fully responsive and includes:
- Mobile-first design
- Touch-friendly navigation
- Optimized typography for small screens
- Fast loading on mobile networks

## 🔍 SEO Features

- Meta tags for social media sharing
- Open Graph tags for Facebook
- Twitter Card support
- Semantic HTML structure
- Fast loading times
- Mobile-friendly design

## 📧 Contact Form

The contact form includes:
- Client-side validation
- Email format checking
- Success/error notifications
- Form reset after submission

**Note**: The form currently shows a success message but doesn't actually send emails. To make it functional, you'll need to:
1. Use Netlify Forms (automatic with Netlify deployment)
2. Or integrate with a service like Formspree
3. Or set up your own backend

## 🌐 Custom Domain Setup

### DNS Configuration

If your domain is managed by a provider like GoDaddy, Namecheap, etc.:

1. **Add CNAME record**:
   - Name: `@` or `www`
   - Value: `your-site-name.netlify.app`

2. **Or add A records**:
   - Point to Netlify's IP addresses:
     - `75.2.60.5`
     - `76.76.19.19`

### SSL Certificate
Netlify automatically provides SSL certificates for custom domains.

## 🚀 Performance Tips

- Images are optimized for web
- CSS and JavaScript are minified
- Fonts are loaded efficiently
- Smooth scrolling and animations are optimized

## 📞 Support

For deployment issues:
- Check Netlify's documentation
- Verify DNS settings
- Ensure all files are committed to Git

## 🎯 Next Steps

After deployment, consider:
1. Adding Google Analytics
2. Setting up email marketing
3. Adding a blog section
4. Integrating with social media
5. Adding more interactive features

---

**Convoluted Soup** - Bringing warmth and flavor to every bowl! 🍲 