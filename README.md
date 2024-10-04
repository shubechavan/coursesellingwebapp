For your README file, you can include the following sections to give an overview of your course-selling application:

---

# Course Selling Application

This is a basic course-selling web application with user authentication and basic CRUD (Create, Read, Update, Delete) operations implemented using MongoDB. The app allows users to sign up, purchase courses, and view available or purchased courses.

## Features

- **User Authentication**: Users can sign up and authenticate themselves to purchase and check courses .
- **Course Management**: Admins can add, edit, and delete courses.
- **Course Purchase**: Users can purchase courses and view the courses they have purchased.
- **MongoDB Integration**: The application uses MongoDB to store user and course data.

## Technologies Used

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Middleware**: Custom user and admin middleware for authentication and access control.

## How to Run the Application

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Configure MongoDB**:
   Update the MongoDB connection string in your `app.js` file.

4. **Run the Application**:
   ```bash
   npm start
   ```

5. **Access the Application**:
   Open your browser and go to `http://localhost:3000`.

## API Endpoints

### User Routes
- **POST** `/user/signup` - Sign up a new user.
- **GET** `/user/courses` - View available courses.
- **POST** `/user/courses/:courseId` - Purchase a course.
- **GET** `/user/purchasedCourses` - View purchased courses.

### Admin Routes
- **POST** `/admin/signup` - Sign up a new admin.
- **POST** `/admin/courses` - Add a new course.
- **GET** `/admin/courses` - View all courses.

## Project Structure

```
/db             # Mongoose models
/middleware     # User and Admin authentication middleware
/routes         # User and Admin routes
app.js          # Main application entry point
```

## License

This project is licensed under the MIT License.

---

You can modify this structure based on your specific needs or features.
