# RNA Pro Painting

A professional website for RNA Pro Painting services, built with Next.js 14, React, and Tailwind CSS.

## Features

- Modern, responsive design
- Service showcase with animations
- Testimonials section
- Online booking system
- Contact form
- Admin panel with:
  - Dashboard
  - Booking management
  - Customer management
  - Chat system

## Tech Stack

- **Framework:** Next.js 14
- **Styling:** Tailwind CSS
- **UI Components:** Custom components with Tailwind
- **Animations:** CSS transitions and animations
- **Form Handling:** React state management
- **Authentication:** Local storage (development only)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/RNA-Pro.git
```

2. Install dependencies:
```bash
cd RNA-Pro
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin Access

To access the admin panel:

1. Navigate to `/login`
2. Use the following credentials:
   - Email: admin@example.com
   - Password: password

Note: These are development credentials. Change them in production.

## Project Structure

```
src/
├── app/
│   ├── (admin)/      # Admin routes
│   ├── (auth)/       # Authentication routes
│   ├── (website)/    # Public website routes
│   └── layout.tsx    # Root layout
├── components/
│   ├── shared/       # Shared components
│   └── ...          # Feature-specific components
└── providers/        # React context providers
```

## Development Notes

- The project uses Next.js 14's app router
- Authentication is currently implemented using localStorage (not production-ready)
- Form submissions are mocked for development
- Images should be optimized before production

## TODO

- [ ] Implement backend API
- [ ] Add proper authentication system
- [ ] Set up database
- [ ] Add email notifications
- [ ] Implement file upload for images
- [ ] Add proper form validation
- [ ] Set up automated testing
- [ ] Add proper error handling
- [ ] Implement proper security measures

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is private and proprietary. All rights reserved.

## Contact

Your Name - your.email@example.com
Project Link: [https://github.com/yourusername/RNA-Pro](https://github.com/yourusername/RNA-Pro) 