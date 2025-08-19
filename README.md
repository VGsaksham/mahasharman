# Mahasharman Healthcare

A modern, responsive website for Mahasharman Healthcare - showcasing authentic Ayurvedic medicines and wellness products.

## Features

- 🌿 Modern, wellness-focused design
- 📱 Fully responsive layout
- 🎨 Beautiful animations with Framer Motion
- 🛍️ Product showcase with load-more functionality
- 🎯 Smooth scrolling navigation
- 💊 Professional product cards with image handling
- 🔄 Progressive product loading (9 products per batch)

## Tech Stack

- **React** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Scroll** - Smooth scrolling navigation
- **React Icons** - Icon components

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VGsaksham/mahasharman.git
cd mahasharman
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Available Scripts

### `npm start`

Runs the app in the development mode.\
The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time.

## Project Structure

```
src/
├── components/
│   ├── Hero.js          # Hero section with gradient background
│   ├── Navbar.js        # Navigation with scroll effects
│   ├── Products.js      # Product showcase with load-more
│   ├── About.js         # About section
│   ├── Quality.js       # Quality assurance section
│   └── Contact.js       # Contact information
├── assets/              # Static assets
├── App.js              # Main app component
└── index.js            # App entry point
```

## Components Overview

- **Hero**: Eye-catching landing section with gradient background and call-to-action buttons
- **Navbar**: Responsive navigation with scroll-based styling changes
- **Products**: Product grid with progressive loading (9 products per batch)
- **About**: Company information and values
- **Quality**: Quality assurance and certifications
- **Contact**: Contact information and form

## Customization

### Adding Products

To add new products, edit the `products` array in `src/components/Products.js`:

```javascript
{
  name: 'Product Name',
  description: 'Product description',
  benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3'],
  image: '/products/product-image.jpg'
}
```

### Styling

The project uses Tailwind CSS for styling. Custom colors and configurations can be modified in `tailwind.config.js`.

## Deployment

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## License

This project is licensed under the MIT License.
