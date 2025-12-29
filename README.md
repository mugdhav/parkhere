# ParkHere Coming Soon Landing Page

A beautiful "Coming Soon" landing page with email collection that stores submissions in Google Sheets.

## 🎨 Design Features

- **Coming Soon Theme**: Eye-catching design with yellow (#F7C948) and black color scheme
- **Background Image**: Full-page parking lot background throughout the site
- **Email Collection Form**: Validates and collects visitor emails
- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Professional transitions and hover effects
- **Google Sheets Integration**: Automatically stores emails in your spreadsheet

## 📁 Files

1. **index.html** - The main landing page
2. **google-apps-script.js** - Backend script for Google Sheets integration
3. **parkhere_website_background.png** - Background image (place in same directory)
4. **ParkhereLogo.png** - Logo image (place in same directory)
5. **parkhere.ico** - Favicon (place in same directory)

## 🚀 Setup Instructions

### Step 1: Prepare Your Files

1. Download all files to a folder on your computer
2. Place `parkhere_website_background.png`, `ParkhereLogo.png`, and `parkhere.ico` in the same directory as `index.html`

### Step 2: Set Up Google Sheets

1. **Create a New Google Sheet**:
   - Go to [Google Sheets](https://sheets.google.com)
   - Click "Blank" to create a new spreadsheet
   - Name it "ParkHere Email List" or any name you prefer

2. **Set Up the Spreadsheet Structure**:
   - In Row 1, add these headers:
     - Cell A1: `Email`
     - Cell B1: `Timestamp`
     - Cell C1: `Status`
   - Format Row 1 (bold, background color)

3. **Open Script Editor**:
   - In your Google Sheet, click `Extensions` → `Apps Script`
   - This opens the Google Apps Script editor

4. **Add the Script**:
   - Delete any existing code in the editor
   - Copy the entire contents of `google-apps-script.js`
   - Paste it into the Apps Script editor
   - Click `File` → `Save` (or Ctrl+S)
   - Name your project "ParkHere Email Collection"

5. **Deploy as Web App**:
   - Click `Deploy` → `New deployment`
   - Click the gear icon ⚙️ next to "Select type"
   - Choose `Web app`
   - Configure the deployment:
     - **Description**: ParkHere Email Collection API
     - **Execute as**: Me (your email)
     - **Who has access**: Anyone
   - Click `Deploy`
   - **Important**: You'll need to authorize the script:
     - Click `Authorize access`
     - Choose your Google account
     - Click `Advanced` → `Go to [Project Name] (unsafe)`
     - Click `Allow`
   - Copy the **Web app URL** (looks like: `https://script.google.com/macros/s/.../exec`)

6. **Update Your Website**:
   - Open `index.html` in a text editor
   - Find this line (around line 580):
     ```javascript
     const GOOGLE_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';
     ```
   - Replace `'YOUR_GOOGLE_SCRIPT_URL_HERE'` with your Web app URL:
     ```javascript
     const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/YOUR-SCRIPT-ID/exec';
     ```
   - Save the file

### Step 3: Test Your Setup

1. Open `index.html` in a web browser
2. Enter a test email address in the form
3. Click "Notify Me"
4. Check your Google Sheet - the email should appear with a timestamp!

### Step 4: Deploy Your Website

Upload all files to your web hosting service:
- Most hosting providers support drag-and-drop upload
- Make sure all image files are in the same directory as `index.html`
- If using GitHub Pages, commit all files to your repository

## 🔧 Customization

### Update Colors

The design uses CSS variables. Find and modify these in `index.html`:

```css
:root {
    --primary-yellow: #F7C948;  /* Change to your brand color */
    --dark-bg: #1a1a1a;
    --parking-gray: #4a4a4a;
    --black: #000000;
    --white: #ffffff;
}
```

### Update Content

- **Launch Date**: Change "Launching Early 2026" text in the HTML
- **Description**: Modify the hero description text
- **Features**: Update the 4 feature items in the "What We're Building" section
- **Social Links**: Add your social media URLs in the footer

### Enable Email Notifications (Optional)

The Google Apps Script includes a function to send confirmation emails. To enable:

1. Uncomment this line in `google-apps-script.js`:
   ```javascript
   // sendConfirmationEmail(email);
   ```
   Change to:
   ```javascript
   sendConfirmationEmail(email);
   ```

2. Customize the email content in the `sendConfirmationEmail` function
3. Save and redeploy the script

## 📊 Managing Your Email List

### View Submissions

1. Open your Google Sheet
2. All submissions appear with:
   - Email address
   - Timestamp (when they signed up)
   - Status (defaults to "Pending")

### Export Email List

1. In Google Sheets, click `File` → `Download` → `CSV`
2. Use this file to import into your email marketing service

### Prevent Duplicates

The script automatically prevents duplicate email submissions. If someone tries to sign up twice, they'll see a friendly message.

## 🔒 Security Notes

- The script validates all email addresses
- Duplicate submissions are automatically rejected
- The form uses CORS mode for security
- No sensitive data is exposed in the frontend

## 🐛 Troubleshooting

### Emails Not Appearing in Sheet

1. Check that you copied the correct Web App URL
2. Make sure the script is deployed with "Who has access: Anyone"
3. Check the Apps Script execution logs: `Executions` in the left sidebar

### Form Shows Error Message

1. Verify your Google Script URL is correct in `index.html`
2. Make sure the script is authorized and deployed
3. Test the script URL directly in your browser

### Images Not Loading

1. Verify all image files are in the same directory as `index.html`
2. Check that filenames match exactly (case-sensitive)
3. Clear your browser cache and refresh

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📧 Support

For issues or questions:
- Check the troubleshooting section above
- Review Google Apps Script documentation
- Verify all setup steps were completed

## 📄 License

This template is free to use for your ParkHere project.

---

**Built with:** HTML5, CSS3, JavaScript, Google Apps Script
**Fonts:** Outfit, Space Mono (via Google Fonts)
**Hosting:** Compatible with any static hosting service
