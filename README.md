# Angelcam Web App

This project is a fullstack web application built with React and Django. It integrates with the Angelcam API to provide live video streaming, camera listing, and video playback features.

## Project Structure

The project is divided into two main parts:

1. **Frontend:** React application for the user interface.
2. **Backend:** Django application for handling API requests and integration with the Angelcam API.

## Setup Instructions

### Frontend

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    ```

### Backend

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Create and activate the virtual environment:

    ```bash
    python -m venv env
    .\env\Scripts\Activate
    ```

3. Install dependencies:

    ```bash
    pip install -r requirements.txt
    ```

4. Run the development server:

    ```bash
    python manage.py runserver
    ```

## Project Goals

1. **Create an Account:**
   - Sign up at [Angelcam](https://my.angelcam.com/accounts/signup/).
   - Send us your account email to receive access to shared cameras.

2. **Web Application Requirements:**
   - Implement login functionality using the provided Personal Access Token.
   - List cameras shared with your account and display them.
   - Show live video from the selected camera.
   - Allow playback of recorded videos with individual segments and seeking functionality.

## Submission

- Ensure your application meets all the requirements.
- Share the link to this repository with us before the deadline on August 11th, 2024.

We look forward to reviewing your solution!

