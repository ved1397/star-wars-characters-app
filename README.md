# How to Run the Project
git clone https://github.com/ved1397/star-wars-characters-app.git
cd star-wars-characters-app
npm install
npm run dev


Build for production:

npm run build


Run tests:

npm run cypress
# OR
npm run test:e2e

1. What I Implemented

=> Character list fetched from SWAPI

=> Pagination (next/previous pages)

=> Character cards showing:

=> Name

=> Random avatar (via Picsum)

=> Background color based on species

=> Modal on card click with:

=> Name

=> Height (converted to meters)

=> Mass

=> Birth year

=> Homeworld details (name, climate, terrain, population)

=> Number of films

=> Added date (formatted dd-MM-yyyy)

=> Loading & error states

=> Fully responsive UI (mobile/tablet/desktop)

=> Styled using Tailwind CSS

2. Bonus Features

=> Search by character name

=> Basic modal functionality tested using React Testing Library Cypress

3. Design Choices & Trade-offs

=> Used React hooks + functional components for simplicity and clean structure

=> Tailwind CSS chosen for fast, scalable UI and responsiveness

=> Species & homeworld fetched separately ➝ more API calls, but accurate data

=> Picsum used for character images to avoid Star Wars image licensing issues

=> Lightweight local state instead of Redux (fits project size; easier to maintain)

4. Vite Template Info

This project is based on the React + Vite starter, which includes HMR and ESLint.

Plugins used:

@vitejs/plugin-react (Fast Refresh with Babel)