 Musuani Senior School Official Website

![License](https://img.shields.io/badge/license-Proprietary-blue.svg)
![Status](https://img.shields.io/badge/status-Active-brightgreen.svg)
![Version](https://img.shields.io/badge/version-1.0-blue.svg)

 Official website for Musuani Senior School - Kenya's premier institution for competency-based senior education. 

Website: [https://www.musuaniseniorschool.co.ke/](https://www.musuaniseniorschool.co.ke/)

---

   Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Installation & Setup](#installation--setup)
- [Configuration](#configuration)
- [Usage](#usage)
- [Contact Form Features](#contact-form-features)
- [Backend Setup](#backend-setup)
- [Deployment](#deployment)
- [Contributors](#contributors)
- [License](#license)
- [Support](#support)

---

   Overview

Musuani Senior School is a public mixed Senior School categorized as C2 under the Competency-Based Education (CBE) curriculum. This repository contains the official school website, providing comprehensive information about:

-  Academic Programs : CBE pathways (STEM, Social Sciences, Arts & Sports Science)
-  School Information : History, mission, vision, and core values
-  Admissions : Application procedures and requirements
-  Contact Services : Direct communication channels and inquiry forms
-  Student Resources : Academic support and co-curricular activities

 #  Key Highlights

  Competency-Based Education (CBE) aligned curriculum
  Modern, responsive website design
  Interactive contact form with file attachment support
  Real-time carousel and dynamic content
  Azure Cosmos DB integration for secure data storage
  Mobile-friendly Bootstrap 5 framework
  Professional SEO-optimized pages
  Comprehensive FAQ section

---

    Features

 # Frontend Features
-  Responsive Design : Works seamlessly on desktop, tablet, and mobile devices
-  Interactive Carousels : Auto-rotating image galleries on multiple pages
-  Dynamic FAQ Section : Collapsible accordion-style FAQ with smooth animations
-  Contact Form : Full-featured form with file uploads and response preferences
-  School Profile Cards : Information cards with consistent styling
-  Google Maps Integration : Embedded location map
-  Modern Navigation : Clean, intuitive navigation bar with Bootstrap styling
-  Professional Styling : Consistent color scheme and typography

 # Backend Features
-  Contact Form Submission : Secure form handling with validation
-  File Upload Support : Attachment management (PDF, DOC, JPG, PNG, max 10MB)
-  Azure Cosmos DB Integration : Cloud-based data storage with automatic setup
-  Local Fallback : JSON file storage when Cosmos DB is not configured
-  Error Handling : Comprehensive error management and logging
-  CORS Support : Secure cross-origin requests

---

    Technology Stack

| Technology | Version | Purpose |
|---|---|---|
|  HTML5  | Latest | Structure and semantic markup |
|  CSS3  | Latest | Styling and animations |
|  JavaScript (ES6+)  | Latest | Interactivity and DOM manipulation |
|  Bootstrap  | 5.3.2 | Responsive grid and components |
|  Node.js  | 14+ | Backend runtime |
|  Express.js  | Latest | Web framework |
|  Azure Cosmos DB  | Latest | NoSQL database (optional) |
|  Multer  | Latest | File upload handling |

 # Language Composition
-  HTML : 95.8% (Structure and content)
-  JavaScript : 3.5% (Interactivity and form handling)
-  CSS : 0.7% (Styling)

---

    Project Structure

```
musuaniseniorschool-website/
│
├── 📄 index.html                    # Home page
├── 📄 about.html                    # About us page
├── 📄 academics.html                # Academics & programs page
├── 📄 admissions.html               # Admissions information
├── 📄 contact_details.html          # Contact form & information
│
├──   assets/                       # Static assets (if used)
│   ├──   css/
│   │   └── style.css               # Global stylesheet
│   └──   js/
│       ├── carousel.js             # Carousel functionality
│       ├── faq.js                  # FAQ accordion
│       └── form-validation.js      # Form validation
│
├── 📄 server.js                     # Express backend server
├── 📄 package.json                  # Project dependencies
├── 📄 .env.example                  # Environment variables template
├── 📄 CNAME                         # Custom domain configuration
├── 📄 README.md                     # This file
│
└──   Musuani Secondary School/     # Backend directory (legacy)
    └── 📄 README.md                # Backend documentation
```

---

    Getting Started

 # Prerequisites

Before you begin, ensure you have the following installed:

-  Node.js  (v14 or higher) - [Download](https://nodejs.org/)
-  npm  (comes with Node.js) or  yarn 
-  Git  (for cloning the repository)
-  Code Editor  (VS Code, Sublime Text, etc.)

 # Quick Start (Frontend Only)

To view the website without the backend:

1. Clone the repository:
   ```bash
   git clone https://github.com/emmah-mwangi/musuaniseniorschool-website.git
   cd musuaniseniorschool-website
   ```

2. Open any HTML file in your browser:
   ```bash
   # On macOS
   open index.html
   
   # On Windows
   start index.html
   
   # Or simply drag the file to your browser
   ```

---

  🔧 Installation & Setup

 # Full Setup (With Backend)

Follow these steps to set up the complete development environment:

   Step 1: Clone the Repository

```bash
git clone https://github.com/emmah-mwangi/musuaniseniorschool-website.git
cd musuaniseniorschool-website
```

   Step 2: Install Dependencies

```bash
npm install
```

This will install the following packages:
-  express : Web framework
-  @azure/cosmos : Cosmos DB client
-  multer : File upload middleware
-  dotenv : Environment variable management

   Step 3: Configure Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and add your credentials:
   ```env
   # Azure Cosmos DB (Optional - leave blank for local storage)
   COSMOS_ENDPOINT=https://your-cosmos-account.documents.azure.com:443/
   COSMOS_KEY=your-cosmos-primary-key
   COSMOS_DATABASE_ID=SchoolDB
   COSMOS_CONTAINER_ID=Contacts
   
   # Server Configuration
   PORT=3000
   NODE_ENV=development
   ```

   Step 4: Run the Server

```bash
npm start
```

You should see:
```
Server listening on http://localhost:3000
Cosmos DB initialized: https://your-cosmos-account.documents.azure.com:443/ -> DB: SchoolDB, Container: Contacts
```

   Step 5: Access the Website

Open your browser and navigate to:
```
http://localhost:3000
```

---

    Configuration

 # Environment Variables

Create a `.env` file in the project root with the following variables:

```env
# Server
PORT=3000
NODE_ENV=development  # 'development' or 'production'

# Azure Cosmos DB (Optional)
COSMOS_ENDPOINT=
COSMOS_KEY=
COSMOS_DATABASE_ID=SchoolDB
COSMOS_CONTAINER_ID=Contacts
```

 Note : If `COSMOS_ENDPOINT` and `COSMOS_KEY` are not provided, contact form data will be stored locally in JSON files in the `data/` directory.

 # File Upload Configuration

-  Max File Size : 10MB
-  Allowed Types : PDF, DOC, JPG, PNG
-  Storage Location : `uploads/` directory

To modify these settings, edit `server.js`:

```javascript
const upload = multer({ 
  dest: uploadsDir,
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});
```

---

    Usage

 # Navigating the Website

   Home Page (`index.html`)
- Welcome section with school overview
- Featured image carousel
- CBE education information
- Learning pathways overview
- FAQ section
- Partner organizations

   About Page (`about.html`)
- School history and profile
- School motto, vision, and mission
- Core values
- Board of Management members
- Photo carousel

   Academics Page (`academics.html`)
- Detailed curriculum information
- Learning pathways and tracks
- Subject offerings
- Academic programs

   Admissions Page (`admissions.html`)
- Application procedures
- Requirements and fees
- Entry grades
- Admission timeline

   Contact Page (`contact_details.html`)
- Contact form
- School contact information
- Location map
- Response preference options

 # Using the Contact Form

1. Navigate to the  Contact Us  page
2. Fill in your details:
   - Full Name (required)
   - Subject/Topic (required)
   - Message (required)
3. Optionally attach a file (PDF, DOC, JPG, PNG - max 10MB)
4. Select how you'd like to be contacted (Email, SMS, Phone)
5. Agree to data processing consent
6. Click  Send Message 
7. You'll be redirected with a success confirmation

---

    Contact Form Features

 # Data Collection
- Full Name
- Email address (inferred from form)
- Subject/Topic
- Message content
- File attachments
- Contact preference (Email, SMS, Phone)
- Timestamp

 # Data Storage Options

 Option 1: Azure Cosmos DB  (Recommended)
- Cloud-based secure storage
- Scalable and reliable
- Automatic backup
- Set `COSMOS_ENDPOINT` and `COSMOS_KEY` in `.env`

 Option 2: Local JSON Files  (Default)
- No external dependencies
- Files stored in `data/` directory
- Use for development and testing

 # Security Features
- Input validation
- File type verification
- File size limits
- CORS protection
- Data consent tracking

---

    Backend Setup

 # Express Server

The backend is powered by Express.js and handles:
- Static file serving
- Form submissions
- File uploads
- Database operations
- Error handling

 # Azure Cosmos DB Integration

 Automatic Setup : The server automatically creates the database and container if they don't exist.

 Manual Setup  (If needed):

1. Create an Azure Cosmos DB account
2. Get your endpoint and primary key
3. Add to `.env` file
4. Server will auto-create `SchoolDB` and `Contacts` container

 # Error Handling

The server implements comprehensive error handling:

```javascript
// Validation error
if (!fullName || !subject || !message || !consent) {
  return res.status(400).send('Please fill required fields...');
}

// Try-catch for database operations
try {
  await container.items.create(item);
} catch (err) {
  console.error('Error:', err);
  res.status(500).send('Server error saving submission.');
}
```

---

    Deployment

 # Deploy to Azure App Service

1.  Create an Azure App Service :
   ```bash
   az webapp create --resource-group myResourceGroup \
     --plan myAppServicePlan --name musuani-website
   ```

2.  Set Environment Variables :
   ```bash
   az webapp config appsettings set --resource-group myResourceGroup \
     --name musuani-website --settings \
     COSMOS_ENDPOINT="your-endpoint" \
     COSMOS_KEY="your-key" \
     PORT=3000
   ```

3.  Deploy Code :
   ```bash
   git push azure main
   ```

 # Deploy to Heroku

1.  Install Heroku CLI 
2.  Create Procfile :
   ```
   web: node server.js
   ```
3.  Deploy :
   ```bash
   heroku create musuani-website
   heroku config:set COSMOS_ENDPOINT="your-endpoint"
   heroku config:set COSMOS_KEY="your-key"
   git push heroku main
   ```

 # Deploy to GitHub Pages

For frontend-only deployment:

1. Create a new branch: `git checkout -b gh-pages`
2. Push to GitHub: `git push origin gh-pages`
3. Enable GitHub Pages in repository settings
4. Access at: `https://emmah-mwangi.github.io/musuaniseniorschool-website/`

---

   Contributors

-  Mwangi Emma  - Developer & Website Manager
  - Email: mwangiemmah2023@gmail.com
  - GitHub: [emmah-mwangi](https://github.com/emmah-mwangi)

---

    License

This project is the exclusive property of  Musuani Senior School . 

 Usage Restrictions :
-   Can be used by Musuani Senior School
-   Cannot be redistributed without permission
-   Cannot be used for commercial purposes
-   Cannot be modified without authorization

For licensing inquiries, contact: [musuani.sec@gmail.com](mailto:musuani.sec@gmail.com)

---

  📞 Support

 # Getting Help

 For Website Issues :
- Email: [musuani.sec@gmail.com](mailto:musuani.sec@gmail.com)
- Phone: 0722242293
- Address: 647-90400, Mwingi West, Kitui County

 For Technical Support :
- Developer: Mwangi Emma
- Email: mwangiemmah2023@gmail.com
- GitHub Issues: [Report Issue](https://github.com/emmah-mwangi/musuaniseniorschool-website/issues)

 # Quick Links

- [School Website](https://www.musuaniseniorschool.co.ke/)
- [KUCCPS Portal](https://kuccps.net)
- [KNEC Portal](https://www.knec.ac.ke)
- [TSC Portal](https://www.tsc.go.ke)

---

    Key Information

 # School Details

| Detail | Value |
|---|---|
|  School Name  | Musuani Senior School |
|  Type  | Public Mixed Day & Boarding |
|  Category  | C2 School |
|  County  | Kitui |
|  Sub-County  | Mwingi West |
|  NEMIS Code  | KSBL |
|  KNEC Code  | 13339108 |
|  Registration No  | 15S300012248 |
|  Motto  | Shine and Reflect |
|  Founded  | 2006 |

 # School Contacts

-  Phone : 0722242293
-  Email : musuani.sec@gmail.com
-  Postal Address : 647-90400, Mwingi West
-  Office Hours : Monday–Friday, 8:00 AM – 5:00 PM

---

    Version History

 # Version 1.0 (June 2026)
-   Initial website launch
-   Full CBE curriculum information
-   Contact form with file uploads
-   Azure Cosmos DB integration
-   Bootstrap 5 responsive design
-   Interactive carousels and FAQ
-   Mobile-friendly navigation

---

    Acknowledgments

This website was developed to support Musuani Senior School's mission of providing quality, competency-based education. Special thanks to:

- Ministry of Education, Kenya
- Teachers Service Commission (TSC)
- Kenya National Examinations Council (KNEC)
- School Board of Management
- All staff and students

---

   Additional Resources

- [Kenya Education Curriculum Framework](https://www.education.go.ke/)
- [Competency-Based Education (CBE) Guide](https://www.knec.ac.ke/)
- [Express.js Documentation](https://expressjs.com/)
- [Bootstrap 5 Documentation](https://getbootstrap.com/)
- [Azure Cosmos DB Docs](https://docs.microsoft.com/en-us/azure/cosmos-db/)

---

 Last Updated : June 2026

 Status : Active & Maintained  

---

   Notes

- All images are hosted externally via ibb.co for optimal performance
- The website is fully responsive and tested on all major browsers
- JavaScript enhancements are non-intrusive and gracefully degrade
- Contact form submissions are validated both client-side and server-side
- The site is optimized for SEO and accessibility standards

---

 Copyright © 2026 Musuani Senior School. All rights reserved. 
