
# **Whitebird Forum**

The **Whitebird Forum** is a simple web application that provides a platform for users to interact with posts and comments. Users can log in, add posts, interact with other posts, and manage their profile. Admins have additional privileges to manage users.

---

## **Features**

### **For All Users**
- View posts and their comments.
- Log in to the forum.

### **For Authorized Users**
- Add new posts.
- Delete your own posts.
- Like and save posts.
- Leave comments.
- Edit personal information on the profile page.

### **For Admins**
- Access a page displaying all users.
- Edit user profiles.

---

## **Technical Details**
This project uses the API provided by [JSONPlaceholder](https://jsonplaceholder.typicode.com/) to fetch posts, comments, and users. 

- You can configure admins using a `.env` file (see below). 
- While storing admin credentials in the frontend is not ideal from a security standpoint, this approach is used here due to the task's constraints, as the focus is on the frontend.

### **Persistent Authorization**
The app supports persistent authorization by storing user information locally, allowing users to reload the page without losing their session.

---

## **Setup Guide**

### 1. **Clone the Repository**

```bash
git clone git@github.com:AlexeiVinchester/Whitebird-forum.git
cd Whitebird-forum
```

---

### 2. **Install Dependencies**

```bash
npm install
```

---

### 3. **Set Up Environment Variables**

Create a `.env` file in the root of the `Whitebird-forum` directory with the following variables:

```plaintext
VITE_BASE_URL=https://jsonplaceholder.typicode.com

VITE_ADMINS='[{"userName":"Bret", "email":"Sincere@april.biz"}]'
```

#### **Environment Variable Details**
- **`VITE_BASE_URL`**: Base URL for the API. Default: `https://jsonplaceholder.typicode.com`.
- **`VITE_ADMINS`**: A serialized JSON string defining admin users. Each admin object should include `userName` and `email`. 

Example with multiple admins:
```plaintext
VITE_ADMINS='[{"userName":"Bret", "email":"Sincere@april.biz"}, {"userName":"Delphine", "email":"Chaim_McDermott@dana.io"}]'
```

> Note: Admins must correspond to users from [JSONPlaceholder](https://jsonplaceholder.typicode.com/users).

---

### 4. **Run the Project**

Start the development server:

```bash
npm run dev
```

The app will now be available at `http://localhost:3000` (default).

---

## **How to Use the App**

1. Open the forum in your browser.
2. View posts and their comments as a guest.
3. Log in to access additional features:
   - Add, edit, or delete your posts.
   - Like, save, or comment on posts.
   - Edit your profile information.
4. If you're logged in as an admin, navigate to the users page to manage user profiles.

---

## **Project Notes**
- The project is frontend-only and relies on a mock API for data.
- Admin credentials are stored in the frontend via environment variables (`.env`).
