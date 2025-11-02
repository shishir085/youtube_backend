# YouTube-Backend

A backend service built using Node.js and Express for a YouTube-style project.

## Table of Contents
- [About](#about)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running](#running)
- [Folder Structure](#folder-structure)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## About
This project serves as the backend component for a YouTube-style application.  
It provides RESTful APIs for managing users, videos, comments, and authentication.  
The project follows a clean and modular structure for scalability and ease of maintenance.

---

## Features
- Built with **Node.js** and **Express**
- Modular MVC architecture
- REST API for CRUD operations
- User authentication using **JWT**
- Middleware for validation and authorization
- Prettier for code formatting
- Environment-based configuration using **dotenv**

---

### Getting Started

### Prerequisites
Before running the project, ensure you have:
- **Node.js** v14 or newer
- **npm** v6 or newer
- A running **MongoDB** (or any supported database)

---

### Installation
Clone the repository and install dependencies:
```bash
git clone https://github.com/shishir085/youtube_backend.git
cd youtube_backend
npm install
```

---

### Configuration
Create a `.env` file in the project root and configure the following variables:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/youtube_backend
JWT_SECRET=your_jwt_secret_key
MONGODB_URI=mongo_db_uri
CORS_ORIGIN=*
ACCESS_TOKEN_SECRET=enter_your_token_here
ACCESS_TOKEN_EXPIRY=enter_your_token_here
REFRESH_TOKEN_SECRET=enter_your_token_here
REFRESH_TOKEN_EXPIRY=enter_your_token_here
CLOUDINARY_CLOUD_NAME=enter_your_name_here
CLOUDINARY_API_KEY=enter_your_api_here
CLOUDINARY_API_SECRET=enter_your_apiSecret_here

```

You can modify these values as per your setup.

---

### Running

#### Development mode
```bash
npm run dev
```

#### Production mode
```bash
npm start
```

Server runs on `http://localhost:8000` by default.

---

## Folder Structure
```
youtube_backend/
├── public/
│   └── temp/               # Temporary/static files
├── src/
│   ├── controllers/         # Request handlers
│   ├── models/              # Database schemas
│   ├── routes/              # Express route definitions
│   ├── services/            # Business logic and helpers
│   └── index.js             # Application entry point
├── .gitignore
├── .prettierrc
├── package.json
└── README.md
```

---

## API Endpoints
Below are example endpoints (replace with actual endpoints if they differ):

### Auth
| Method | Endpoint | Description |
|--------|-----------|-------------|
| POST | `/api/auth/register` | Register a new user |
| POST | `/api/auth/login` | Log in and get a JWT token |

### Videos
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/videos` | Fetch all videos |
| POST | `/api/videos` | Upload a new video |
| GET | `/api/videos/:id` | Get a single video |
| PUT | `/api/videos/:id` | Update video details |
| DELETE | `/api/videos/:id` | Delete a video |

### Comments
| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/api/videos/:id/comments` | Get all comments on a video |
| POST | `/api/videos/:id/comments` | Add a comment to a video |

---

## Technologies Used
- **Node.js** – JavaScript runtime
- **Express.js** – Web framework
- **MongoDB** – NoSQL database
- **JWT** – Authentication
- **dotenv** – Environment variables
- **Prettier** – Code formatter

---

## Contributing
Contributions are welcome!  
Follow these steps:
1. Fork the repository  
2. Create a new branch (`git checkout -b feature/YourFeatureName`)  
3. Commit your changes (`git commit -m 'Add feature'`)  
4. Push to your branch (`git push origin feature/YourFeatureName`)  
5. Create a Pull Request  

Please ensure your code is properly formatted and tested.

---

## License
This project is open-source and available under the [MIT License](LICENSE).

---

## Contact
**Author:** [shishir0x](https://github.com/shishir085)  
For questions or suggestions, feel free to reach out via GitHub.

---
