[# Car Parking API

This is a Car Parking API built using Express.js. It provides functionalities for user registration, vehicle registration, booking slots, and searching for slots by city and zone.

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [User Registration](#user-registration)
  - [Vehicle Registration](#vehicle-registration)
  - [Book Slot](#book-slot)
  - [Search by City](#search-by-city)
  - [Search by Slot](#search-by-slot)
- [Error Handling](#error-handling)

## Installation

To get started, clone the repository and install the necessary dependencies:

```bash
git clone <repository-url>
cd <project-directory>
npm install
Configuration
Create a .env file in the root directory of the project.
Add the following environment variables:](http://localhost:8080/api/park/user

markdown
Copy code

## API Endpoints

### 1. User Registration

- **Method**: `POST`
- **Endpoint**: `/register`
- **Description**: Registers a new user.
- **Request Body**:

```json
{
  "name": "John Doe",
  "number": "1234567890"
}
Responses:
Success (201 Created):
json
Copy code
{
  "success": true,
  "message": "Account created successfully.",
  "users": {
    "_id": "user_id",
    "name": "John Doe",
    "number": "1234567890"
  }
}
Error (400 Bad Request):
json
Copy code
{
  "success": false,
  "message": "All fields are required"
}
2. Vehicle Registration
Method: POST
Endpoint: /register-vehicle
Description: Registers a new vehicle for a user.
Request Body:
json
Copy code
{
  "userid": "user_id",
  "payment": "100",
  "licensePlate": "ABC-123",
  "vehicleType": "Car"
}
Responses:
Success (201 Created):
json
Copy code
{
  "success": true,
  "message": "Vehicle added successfully.",
  "vehicals": {
    "_id": "vehicle_id",
    "user": "user_id",
    "payment": "100",
    "licensePlate": "ABC-123",
    "vehicleType": "Car"
  }
}
Error (400 Bad Request):
json
Copy code
{
  "success": false,
  "message": "All fields are required"
}
3. Book Slot
Method: POST
Endpoint: /book
Description: Books a parking slot.
Request Body:
json
Copy code
{
  "slotId": "slot_id",
  "userId": "user_id",
  "vehicleId": "vehicle_id",
  "start": "2024-08-10T10:00:00Z",
  "end": "2024-08-10T12:00:00Z"
}
Responses:
Success (200 OK):
json
Copy code
{
  "success": true,
  "message": "Slot booked successfully",
  "slot": {
    "_id": "slot_id",
    "isOccupied": true,
    "bookedBy": "user_id",
    "vehicle": "vehicle_id",
    "bookedAt": "2024-08-10T10:00:00Z",
    "releaseAt": "2024-08-10T12:00:00Z"
  }
}
Error (404 Not Found):
json
Copy code
{
  "success": false,
  "message": "Slot not found"
}
4. Search by City
Method: GET

Endpoint: /search/city/:city

Description: Searches for a city and returns its details.

Parameters:

city (string): The name of the city to search for.
Responses:

Success (200 OK):
json
Copy code
{
  "success": true,
  "message": "Service available",
  "currentCity": {
    "_id": "city_id",
    "name": "New York",
    "zones": [ /* Array of zone objects */ ]
  }
}
Error (404 Not Found):
json
Copy code
{
  "success": false,
  "message": "Service not available"
}
5. Search by Slot
Method: GET

Endpoint: /search/slot/:zoneId

Description: Searches for slots in a specific zone.

Parameters:

zoneId (string): The ID of the zone to search for slots.
Responses:

Success (200 OK):
json
Copy code
{
  "success": true,
  "message": "Slots details",
  "slots": [
    {
      "_id": "slot_id",
      "isOccupied": false,
      "zone": "zone_id"
    }
    // more slot objects
  ]
}
Error (404 Not Found):
json
Copy code
{
  "success": false,
  "message": "Slots not found"
}
Error Handling
In case of an internal server error, the API will respond with a 500 status code and a message indicating the error:

json
Copy code
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details"
}
Running the Application
To run the application, execute:

bash
Copy code
npm start
The server will start and listen on the port specified in your .env file.
