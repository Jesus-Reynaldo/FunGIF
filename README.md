# FunGIF 

![FunGIF Logo](https://i.ibb.co/qsw2jy0/FunGif.png)

Welcome to FunGIF - your go-to app for exploring and discovering fun GIFs! This lightweight Next.js application utilizes the Giphy API to search and display GIFs based on different categories. Spice up your day with a touch of humor and creativity.

## Features

- **Dynamic Categories:** Start with default categories or add your own to tailor the GIFs to your preferences.
- **Real-time Updates:** Instantly see GIFs related to your chosen categories without refreshing the page, thanks to the Giphy API integration.
- **User-Friendly Interface:** The sleek design ensures a pleasant browsing experience.

## Getting Started

Follow these simple steps to get FunGIF up and running:

1. Clone this repository to your local machine.
   ```bash
   git clone https://github.com/your-username/FunGIF.git
   ```

2. Navigate to the project directory.
   ```bash
   cd FunGIF
   ```

3. Install dependencies.
   ```bash
   npm install
   ```

4. Set up your Giphy API key.
   - Visit [Giphy Developers](https://developers.giphy.com/dashboard/) to create an account and obtain your API key.
   - Replace `'YOUR_API_KEY'` in the `getGifs.ts` file with your actual Giphy API key.

5. Start the local server to preview the static site.
   ```bash
   npm run dev
   ```

7. Open your browser and visit [http://localhost:3000](http://localhost:3000).

## Usage

1. Explore default GIFs from the initial category (e.g., "Rick and Morty").
2. Add your own categories using the "AddCategory" component.
3. Watch as GIFs dynamically update based on your selected categories, powered by the Giphy API.

## Tech Stack

- **Next.js:** React framework for building static websites.
- **React:** Front-end library for building user interfaces.
- **Tailwind CSS:** Utility-first CSS framework for rapid UI development.
- **Giphy API:** Integration for dynamic GIF content.
- **Fonts:** Utilizes the "Kavoon" font for a playful and engaging title.

## Contributing

Contributions are welcome! Feel free to submit issues, feature requests, or pull requests to help improve FunGIF.