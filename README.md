# WSET Level 3 Study Guide Website

## 📚 Complete Package Contents

This package contains everything you need to deploy your WSET Level 3 study guide website.

### Files Included:

#### Core Files (Required)
- `index.html` - Homepage with navigation to all regions
- `styles.css` - Complete styling with responsive design
- `script.js` - Navigation functionality and mobile menu
- `quiz.html` - Interactive quiz system with progress tracking
- `quiz-data.js` - Quiz questions for Viticulture, Winemaking, and Service

#### Completed Regional Pages (Full Content)
- `austria.html` - Complete guide to Austrian wines
- `hungary.html` - Complete guide to Tokaj and Hungarian wines
- `greece.html` - Complete guide to Greek wines
- `south-africa.html` - Complete guide to South African wines

#### Placeholder Pages (Ready for Content)
These pages have the complete navigation and structure - just add your content:
- `france.html`
- `germany.html`
- `italy.html`
- `spain.html`
- `portugal.html`
- `usa.html`
- `australia.html`
- `new-zealand.html`
- `south-america.html`
- `canada.html`
- `sparkling.html`
- `fortified.html`

---

## 🚀 How to Deploy to GitHub Pages

### Option 1: Upload All Files at Once
1. Go to your GitHub repository: `gmatlick/wset-level3-study-guide`
2. Click "Add file" → "Upload files"
3. Drag ALL files from this folder into GitHub
4. Write commit message: "Complete site with quiz system"
5. Click "Commit changes"
6. Wait 1-2 minutes for GitHub Pages to rebuild
7. Visit: `https://gmatlick.github.io/wset-level3-study-guide/`

### Option 2: Using Git Command Line
```bash
# Navigate to your local repository
cd path/to/wset-level3-study-guide

# Copy all files from this package to your repo
cp /path/to/complete-site/* .

# Add all files
git add .

# Commit
git commit -m "Complete site with Austria, Hungary, Greece, South Africa, and Quiz system"

# Push to GitHub
git push origin main
```

---

## ✨ Features

### Navigation System
- **Dropdown Menus** for Europe, New World, and Styles
- **Mobile Responsive** - works perfectly on phones and tablets
- **Consistent across all pages** - every page has the same navigation

### Quiz System
- **20 questions per topic**
- **Progress tracking** with localStorage (saves your progress)
- **Color-coded grades:**
  - Red/Yellow (0-54%): Needs Work
  - Yellow/Green (55-64%): Pass ✓
  - Green (65-79%): Merit ⭐
  - Blue/Green (80-100%): Distinction 🌟
- **Three foundation topics ready:**
  - Viticulture (20 questions)
  - Winemaking (20 questions)
  - Service & Storage (20 questions)

### Completed Regional Content
Four complete regional guides with detailed information:
- Austria: Grüner Veltliner, Wachau, DAC system, Prädikatswein
- Hungary: Tokaji Aszú, Furmint, puttonyos classification
- Greece: Assyrtiko, Xinomavro, Santorini volcanic terroir
- South Africa: Pinotage, Stellenbosch, Wine of Origin system

---

## 📝 Adding Content to Placeholder Pages

Each placeholder page has this structure ready - just replace the "Coming Soon" section:

```html
<main class="container">
    <!-- Replace this section with your content -->
    <div style="background: white; padding: 3rem; border-radius: 15px;">
        <h2 style="color: var(--burgundy);">Your Content Here</h2>
        <!-- Add your regional information -->
    </div>
</main>
```

**Tip:** Copy the structure from Austria, Hungary, Greece, or South Africa pages as templates for your other regions.

---

## 🎨 Customization

### Colors
Edit `styles.css` to change the color scheme:
```css
:root {
    --burgundy: #6d1f31;        /* Main brand color */
    --burgundy-dark: #4a0e1f;   /* Darker shade */
    --gold: #d4af37;            /* Accent color */
    --cream: #f8f6f0;           /* Background */
}
```

### Adding More Quiz Questions
Edit `quiz-data.js` to add questions to existing topics or create new topics:
```javascript
const quizData = {
    yourNewTopic: {
        name: "Your Topic Name",
        questions: [
            {
                q: "Your question?",
                options: ["A", "B", "C", "D"],
                correct: 0  // Index of correct answer (0-3)
            }
            // Add 19 more questions for 20 total
        ]
    }
};
```

Then update `quiz.html` to include your new topic in the `allQuizzes` object.

---

## 🔧 Troubleshooting

### Navigation not working on mobile?
- Make sure `script.js` is properly linked in all HTML files
- Check browser console for errors

### Quiz not saving progress?
- Quiz uses localStorage - make sure you're testing on a server (GitHub Pages or local server)
- localStorage doesn't work with `file://` protocol

### Styles not loading?
- Verify `styles.css` is in the same folder as your HTML files
- Check that the filename is exactly `styles.css` (case-sensitive)

---

## 📱 Browser Support

Tested and working on:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)  
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 🎯 Next Steps

1. **Deploy** the current version to see everything working
2. **Add content** to placeholder pages as you study each region
3. **Expand quizzes** by adding regional quiz questions to `quiz-data.js`
4. **Share** your progress and get feedback!

---

## 📞 Need Help?

If you encounter issues:
1. Check that ALL files are uploaded to GitHub
2. Verify GitHub Pages is enabled in repository settings
3. Wait 2-3 minutes after uploading for changes to appear
4. Clear browser cache if you don't see updates

---

**Good luck with your WSET Level 3 studies! 🍷**
