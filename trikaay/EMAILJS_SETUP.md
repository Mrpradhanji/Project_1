# EmailJS Setup Guide

## Problem
The contact form is failing to send emails because EmailJS is not properly configured.

## Solution

### Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### Step 2: Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

### Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Design your email template with these variables:
   - `{{user_name}}` - Customer's full name
   - `{{user_email}}` - Customer's email
   - `{{user_phone}}` - Customer's phone number
   - `{{user_date}}` - Preferred date
   - `{{user_time}}` - Preferred time
   - `{{user_message}}` - Customer's message
4. Save the template and note down your **Template ID**

### Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### Step 5: Configure Environment Variables
1. Create a file called `.env.local` in your project root (trikaay folder)
2. Add the following variables:

```env
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
```

3. Replace the placeholder values with your actual EmailJS credentials

### Step 6: Restart Development Server
```bash
npm run dev
```

## Testing
1. Fill out the contact form
2. Submit the form
3. Check your email for the received message
4. Check the browser console for any error messages

## Troubleshooting

### Common Issues:
1. **"EmailJS is not configured"** - Check that your `.env.local` file exists and has the correct values
2. **"Service not found"** - Verify your Service ID is correct
3. **"Template not found"** - Verify your Template ID is correct
4. **"Invalid public key"** - Check your Public Key is correct

### Debug Mode:
The form now includes better error logging. Check the browser console for detailed error information.

## Alternative Solutions

If EmailJS doesn't work for you, consider these alternatives:
1. **Formspree** - Simple form handling service
2. **Netlify Forms** - If deploying to Netlify
3. **Custom API** - Build your own email API endpoint
4. **Nodemailer** - Server-side email sending with Next.js API routes 