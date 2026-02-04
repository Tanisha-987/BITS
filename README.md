# BITS International School Website

A professional, multipage school website built with React JS and Tailwind CSS.

## Features

- **Multipage Navigation**: Fully functional routing with React Router DOM
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean and professional design with blue and white theme
- **CBSE Compliant**: Includes mandatory disclosures as per CBSE guidelines

## Pages

1. **Home** - Hero carousel, welcome section, and school highlights
2. **About** - School history, vision & mission, principal's message, infrastructure
3. **Admissions** - Admission process, requirements, age criteria
4. **Academics** - Curriculum details, subjects, examination system, co-curricular activities
5. **Faculty** - Teacher profiles with qualifications
6. **Downloads** - Downloadable forms and documents
7. **Mandatory Disclosures** - CBSE affiliation and compliance information
8. **Contact Us** - Contact form, address, and map placeholder

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Steps to Run

1. **Navigate to the project directory:**
   ```bash
   cd school-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

The optimized files will be in the `build` folder.

## Tech Stack

- **React JS** - Frontend framework
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Create React App** - Project setup and build tools

## Project Structure

```
school-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── TopHeader.js
│   │   ├── Navigation.js
│   │   └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   ├── Admissions.js
│   │   ├── Academics.js
│   │   ├── Faculty.js
│   │   ├── Downloads.js
│   │   ├── MandatoryDisclosures.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
└── postcss.config.js
```

## Customization

### Colors
Edit `tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content
Update the content in the page components located in `src/pages/`

### School Information
Update school details in:
- `src/components/TopHeader.js`
- `src/components/Footer.js`
- Individual page components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for educational purposes.

## Contact

For any queries, please contact: info@abchighschool.edu
