# Manufacturing Partners Configuration Guide

## Easy Logo and Partner Updates

### 📁 **Logo Files Location**
All partner logos are stored in the `public/` directory:
- `public/sanyasi-ayurveda-logo.svg` - Sanyasi Ayurveda logo
- `public/shri-sanatani-logo.svg` - Shri Sanatani Enterprises logo

### 🔧 **How to Update Logos**

#### Option 1: Replace Existing SVG Files
1. **Keep the same filename** and replace the content
2. **Update the SVG content** in the existing files
3. **No code changes needed** - logos will update automatically

#### Option 2: Use New Image Files
1. **Add your new logo files** to the `public/` directory
2. **Update the config file** at `src/config/partners.js`
3. **Change the logo paths** in the configuration

### 📝 **Configuration File: `src/config/partners.js`**

```javascript
export const manufacturingPartners = [
  {
    name: 'Sanyasi Ayurveda',
    description: 'Your description here...',
    logo: '/sanyasi-ayurveda-logo.svg' // ← Change this path
  },
  {
    name: 'Shri Sanatani Enterprises',
    description: 'Your description here...',
    logo: '/shri-sanatani-logo.svg' // ← Change this path
  }
];
```

### ➕ **Adding New Partners**

To add a new manufacturing partner:

1. **Add logo file** to `public/` directory
2. **Update the config** in `src/config/partners.js`:

```javascript
// Add this to the manufacturingPartners array
{
  name: 'New Partner Name',
  description: 'Description of the new partner...',
  logo: '/new-partner-logo.svg'
}
```

### 🗑️ **Removing Partners**

Simply **delete the partner object** from the `manufacturingPartners` array in `src/config/partners.js`.

### 🎨 **Logo Requirements**

- **Format**: SVG (recommended), PNG, or JPG
- **Size**: Recommended 200x100px or similar aspect ratio
- **Location**: Place in `public/` directory
- **Path**: Reference as `/filename.ext` in config

### 📱 **Responsive Design**

The logos automatically:
- Scale to fit the container
- Maintain aspect ratio
- Work on all device sizes
- Have hover effects

### 🚀 **Quick Updates**

1. **Change logo**: Replace file in `public/` directory
2. **Change text**: Edit `src/config/partners.js`
3. **Add partner**: Add object to config array
4. **Remove partner**: Delete object from config array

### 💡 **Pro Tips**

- **Keep SVG logos** for best quality and scalability
- **Use descriptive filenames** for easy management
- **Test on different screen sizes** after logo updates
- **Backup original logos** before making changes

---

**Need help?** The configuration is designed to be simple and intuitive. Just edit the `src/config/partners.js` file and your changes will appear immediately! 