# Real Estate React Application

A modern real estate website built with React, Tailwind CSS, and React Router. This project was converted from a vanilla HTML/CSS/JavaScript application to a fully functional React application.

## Features

- **Modern React Architecture**: Built with React 19+ and modern hooks
- **Responsive Design**: Fully responsive design using Tailwind CSS
- **Multi-page Application**: Complete routing with React Router
- **Interactive Components**: Property listings, search functionality, and user authentication
- **Professional UI**: Clean, modern design with smooth animations
- **Page Loader**: Custom loading animation on page transitions

## Pages

- **Home**: Hero section, property types, features, listings preview, blog preview, map, and contact form
- **Blog**: Dedicated blog page with article cards
- **Listings**: Property listings with search and filter functionality
- **Property Details**: Individual property detail pages
- **Login/Signup**: User authentication pages

## Tech Stack

- **React 19+**: Modern React with hooks and functional components
- **Tailwind CSS**: Utility-first CSS framework for styling
- **React Router**: Client-side routing for single-page application
- **Vite**: Fast build tool and development server
- **Lucide React**: Modern icon library
- **shadcn/ui**: High-quality React components

## Installation

1. **Clone or extract the project**
   ```bash
   cd real-estate-react
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   pnpm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Project Structure

```
real-estate-react/
├── public/                 # Static assets
├── src/
│   ├── assets/            # Images and static files
│   ├── components/        # Reusable React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Navbar.jsx    # Navigation component
│   │   ├── HeroSection.jsx
│   │   ├── PropertyCard.jsx
│   │   └── ...           # Other components
│   ├── pages/            # Page components
│   │   ├── BlogPage.jsx
│   │   ├── ListingPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.jsx           # Main App component
│   ├── App.css           # Global styles and custom CSS
│   └── main.jsx          # Entry point
├── package.json
└── README.md
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Key Components

### Navbar
- Fixed navigation with transparent background
- User authentication state management
- Responsive mobile menu

### HeroSection
- Full-screen hero with background image
- Property search form
- Call-to-action elements

### PropertyCard
- Reusable component for property listings
- Star ratings and property details
- Click-through to property details

### ContactSection
- Contact form with validation
- Real estate inquiry form
- Form state management

## Styling

The project uses Tailwind CSS for styling with custom CSS variables for theme colors:

- Primary Color: `#01aaff`
- Header Color: `#1a365d`
- Accent Color: `#facc15`
- Error Color: `#e63946`

Custom styles are defined in `src/App.css` including:
- Page loader animations
- Custom color variables
- Font imports (Montserrat, Font Awesome)

## Routing

The application uses React Router for navigation:

- `/` - Home page
- `/blog` - Blog listing page
- `/listing` - Property listings page
- `/desc` - Property detail page
- `/login` - User login page
- `/signup` - User registration page

## State Management

- **Local Storage**: User authentication state
- **React Hooks**: Component state management (useState, useEffect)
- **Form State**: Controlled components for forms

## Authentication

Basic authentication system using localStorage:
- Login/logout functionality
- User session persistence
- Protected routes (ready for backend integration)

## Future Enhancements

1. **Backend Integration**: Connect to a real estate API
2. **Database**: Add property and user data persistence
3. **Image Upload**: Property image management
4. **Advanced Search**: Filters, sorting, and pagination
5. **User Profiles**: User dashboard and saved properties
6. **Real-time Features**: Chat, notifications
7. **Payment Integration**: Property booking/purchasing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

For support or questions, please open an issue in the project repository.

---

**Note**: This project was successfully converted from a vanilla HTML/CSS/JavaScript application to React while preserving all original functionality and enhancing it with modern React patterns.

#   R e a l E s t a t e  
 