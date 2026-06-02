# Musuani Senior School Official Website

Official website for Musuani Senior School

**Website Link:** https://www.musuaniseniorschool.co.ke/

## 📋 About

This repository contains the official website for Musuani Senior School, built with HTML, JavaScript, and CSS to provide information about the school, its academics, admissions, and contact details.

## 🌐 Website Pages

The website includes the following main pages:

- **Home Page** (`index.html`) - Welcome and overview of Musuani Senior School
- **About Us** (`about.html`) - Information about the school's mission, vision, and history
- **Academics** (`academics.html`) - Detailed information about academic programs and courses
- **Admissions** (`admissions.html`) - Admissions process, requirements, and application information
- **Contact** (`contact_details.html`) - Contact form and school contact information

## 💻 Technology Stack

- **HTML** - 95.8% (Structure and content)
- **JavaScript** - 3.5% (Interactivity and form handling)
- **CSS** - 0.7% (Styling)

## 📁 Project Structure

```
musuaniseniorschool-website/
├── index.html                          # Home page
├── about.html                          # About page
├── academics.html                      # Academics page
├── admissions.html                     # Admissions page
├── contact_details.html                # Contact page
├── server.js                           # Node.js backend server
├── package.json                        # Project dependencies
├── Musuani Secondary School/           # Backend directory
│   └── README.md                       # Backend documentation
└── CNAME                               # Custom domain configuration
```

## 🚀 Getting Started

### Frontend Only
Simply open any `.html` file in your web browser to view the pages.

### With Backend (Contact Form Submission)

The website includes a Node.js backend for handling contact form submissions. Follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/emmah-mwangi/musuaniseniorschool-website.git
   cd musuaniseniorschool-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables (optional):**
   Copy `.env.example` to `.env` and configure Azure Cosmos DB credentials if you want to use it:
   ```bash
   cp .env.example .env
   ```

4. **Run the server:**
   ```bash
   npm start
   ```

5. **Access the website:**
   Open your browser and navigate to:
   ```
   http://localhost:3000
   ```

## 📬 Contact Form Features

- Submit contact information through the contact page
- Form data is stored locally or in Azure Cosmos DB (if configured)
- Support for file attachments
- Automatic redirection after successful submission

## 🔧 Configuration

For detailed backend configuration and setup instructions, see the [Backend README](./Musuani%20Secondary%20School/README.md).

### Environment Variables
- `COSMOS_ENDPOINT` - Azure Cosmos DB endpoint (optional)
- `COSMOS_KEY` - Azure Cosmos DB access key (optional)

If not configured, the contact form data will be stored locally.

## 📧 Contact Information

For inquiries about the school, please visit the Contact page on the website or email the school directly through the contact form.

## 📄 License

This project is the property of Musuani Senior School.

---

**Last Updated:** June 2026
