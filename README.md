# 2024 - Rick & Morty Character Explorer

## Project Overview
This was one of my first full-stack projects built in late 2024 as I was learning to combine Django and React. The application fetches and displays character information from the Rick and Morty, showcasing my initial steps into web development.

## Technical Stack
- **Frontend**: React.js with Vite
- **Backend**: Django REST Framework

## Learning Journey
This project represents my early exploration of full-stack development. Since building this, I've grown significantly in several areas:

## Project Structure
```

├── backend/           # Django backend
│   └── mysite_series/
│       ├── rick_and_morty/  # Django app
│       └── mysite_series/   # Project settings
└── frontend/         # React frontend
    └── src/          # React components and pages
```

## Running the Project
1. **Backend Setup**:
   ```bash
   cd backend
   python -m venv venv
   source venv/bin/activate  # On Windows: .\venv\Scripts\activate
   pip install -r requirements.txt
   python manage.py runserver
   ```

2. **Frontend Setup**:
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## Note
This project is preserved as a milestone in my development journey. While the code may not reflect my current standards, it serves as a valuable reminder of how far I've come.
