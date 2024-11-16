# [Job Nebula](https://job-nebula.web.app)

Job Nebula is a full-stack web application designed for posting and applying for jobs. It allows users to search, filter, and browse jobs by category, apply directly, and manage job listings.

## ✨ Features

- **🔐 Authentication**: Secure login system using Firebase authentication.

- **📝 Full Job Management**:  Users can create, read, update, and delete job posts (CRUD).
  
- **🔖 Job Search and Filtering**: Browse jobs by categories like on-site, remote, part-time, and hybrid.
 
- **🔍 Search & Sort**: Search and Sort options to find what you need quickly.
  
- **👏 Apply for Jobs**: Apply directly to job listings by uploading your resume.
  
- **📱 Dark/Light Mode Toggle**: Switch between dark and light mode for a better viewing experience
  
## 🛠️ Tech Stack

### Frontend

- React
- react-router-dom
- Tailwind CSS
- Material Tailwind
- Firebase
- Axios
- SweetAlert2
- Swiper
- React Tabs
- React Modal

### Backend

- Express.js
- MongoDB
- CORS
- dotenv

## 🚀 Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/DeepsEffect/job-nebula.git
   ```

2. **Navigate to project directory**

   ```bash
   cd job-nebula
   ```

3. **Install dependencies**

   ```bash
   npm install
   ```

4. **Set up environment variables**
   Create a `.env.local` file in the root directory:

   ```bash
     VITE_APIKEY=<your-firebase-api-key>
     VITE_AUTHDOMAIN=<your-firebase-auth-domain>
     VITE_PROJECTID=<your-firebase-project-id>
     VITE_STORAGEBUCKET=<your-firebase-storage-bucket>
     VITE_MESSAGINGSENDERID=<your-firebase-sender-id>
     VITE_APPID=<your-firebase-app-id>
     VITE_SERVER_API_URL='https://job-nebula-server.vercel.app'
   ```

5. **Start development server**

```bash
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to see the app

## 📞 Contact

Have questions or suggestions? Reach out through:

- [GitHub](https://github.com/DeepsEffect)
- [Twitter](https://x.com/JalalAhmed7845)
- [LinkedIn](https://www.linkedin.com/in/jalal-ahmed-dev)
