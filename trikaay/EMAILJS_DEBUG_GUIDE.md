# EmailJS Debugging Guide

## 🔍 Quick Debug Steps

### Step 1: Check Browser Console
1. Open your website
2. Press `F12` to open Developer Tools
3. Go to the **Console** tab
4. Look for these messages:
   - ✅ `EmailJS initialized with public key` - Good!
   - ❌ `EmailJS Public Key not found` - Problem!

### Step 2: Test Configuration
1. Fill out the contact form
2. Click the **"🔍 Test EmailJS Configuration"** button (only visible in development)
3. Check console for configuration status

### Step 3: Submit Form and Check Logs
1. Fill out the form completely
2. Submit the form
3. Watch the console for detailed logs

## 🚨 Common Error Messages & Solutions

### Error: "EmailJS is not configured"
**Problem:** Missing environment variables
**Solution:**
1. Create `.env.local` file in `trikaay` folder
2. Add your EmailJS credentials:
```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
```
3. Restart development server: `npm run dev`

### Error: "Service not found"
**Problem:** Invalid Service ID
**Solution:**
1. Go to EmailJS Dashboard → Email Services
2. Check your Service ID
3. Make sure the service is active
4. Update `.env.local` with correct Service ID

### Error: "Template not found"
**Problem:** Invalid Template ID
**Solution:**
1. Go to EmailJS Dashboard → Email Templates
2. Check your Template ID
3. Make sure template variables match:
   - `{{user_name}}`
   - `{{user_email}}`
   - `{{user_phone}}`
   - `{{user_date}}`
   - `{{user_time}}`
   - `{{user_message}}`

### Error: "Invalid public key"
**Problem:** Wrong or expired Public Key
**Solution:**
1. Go to EmailJS Dashboard → Account → API Keys
2. Copy the correct Public Key
3. Update `.env.local`

### Error: "Request timed out"
**Problem:** Network or EmailJS service issue
**Solution:**
1. Check internet connection
2. Try again in a few minutes
3. Check EmailJS service status

## 🔧 Advanced Debugging

### Check Environment Variables
Add this to your component temporarily:
```javascript
console.log('Environment Variables:', {
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
});
```

### Test EmailJS Manually
Open browser console and run:
```javascript
// Test EmailJS initialization
emailjs.init('YOUR_PUBLIC_KEY');

// Test email sending
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
  user_name: 'Test User',
  user_email: 'test@example.com',
  user_phone: '1234567890',
  user_date: '2024-01-01',
  user_time: '10:00',
  user_message: 'Test message'
}).then(
  function(response) {
    console.log('SUCCESS!', response);
  },
  function(error) {
    console.log('FAILED...', error);
  }
);
```

## 📋 EmailJS Setup Checklist

### ✅ Account Setup
- [ ] EmailJS account created
- [ ] Email verified
- [ ] Public Key copied

### ✅ Email Service Setup
- [ ] Email service added (Gmail, Outlook, etc.)
- [ ] Service authenticated
- [ ] Service ID copied
- [ ] Service is active

### ✅ Email Template Setup
- [ ] Template created
- [ ] Template variables added:
  - `{{user_name}}`
  - `{{user_email}}`
  - `{{user_phone}}`
  - `{{user_date}}`
  - `{{user_time}}`
  - `{{user_message}}`
- [ ] Template ID copied
- [ ] Template is active

### ✅ Environment Variables
- [ ] `.env.local` file created
- [ ] All three variables set:
  - `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`
  - `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
  - `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- [ ] Development server restarted

### ✅ Testing
- [ ] Configuration test passed
- [ ] Form submission successful
- [ ] Email received

## 🆘 Still Having Issues?

### Check EmailJS Dashboard
1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Check "Activity" tab for failed requests
3. Check "Usage" tab for quota limits

### Alternative Solutions
If EmailJS continues to fail, consider:
1. **Formspree** - Simple form handling
2. **Netlify Forms** - If deploying to Netlify
3. **Custom API** - Build your own email endpoint
4. **Nodemailer** - Server-side email with Next.js API routes

### Get Help
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/
- Check EmailJS status: https://status.emailjs.com/ 