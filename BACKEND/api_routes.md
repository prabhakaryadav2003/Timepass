# API Routes Documentation

This document outlines the API routes for managing resources such as restaurants, addresses, menus, bookings, and reviews. Each route follows RESTful principles.

---

## **Base URL**

```
http://<your-domain>/api/
```

---

# API Routes for the Application

## **Authentication**
| Method | Endpoint       | Description                  |
|--------|----------------|------------------------------|
| POST   | `/register/`   | Register a new user.         |
| POST   | `/login/`      | Login an existing user.      |

---

## **Restaurant Routes**

| HTTP Method | URL                  | Description                                    |
| ----------- | -------------------- | ---------------------------------------------- |
| `GET`       | `/restaurants/`      | List all restaurants.                          |
| `POST`      | `/restaurants/`      | Create a new restaurant (owner required).      |
| `GET`       | `/restaurants/<pk>/` | Retrieve a specific restaurant by its ID.      |
| `PUT`       | `/restaurants/<pk>/` | Update a specific restaurant (owner required). |
| `DELETE`    | `/restaurants/<pk>/` | Delete a specific restaurant (owner required). |

---

## **Address Routes**

| HTTP Method | URL                                       | Description                                   |
| ----------- | ----------------------------------------- | --------------------------------------------- |
| `GET`       | `/restaurants/<restaurant_pk>/addresses/` | List all addresses for a specific restaurant. |
| `POST`      | `/restaurants/<restaurant_pk>/addresses/` | Add a new address to a specific restaurant.   |

---

## **Menu Routes**

| HTTP Method | URL                                   | Description                               |
| ----------- | ------------------------------------- | ----------------------------------------- |
| `GET`       | `/restaurants/<restaurant_pk>/menus/` | List all menus for a specific restaurant. |
| `POST`      | `/restaurants/<restaurant_pk>/menus/` | Add a new menu to a specific restaurant.  |

---

## **Booking Routes**

| HTTP Method | URL               | Description                                      |
| ----------- | ----------------- | ------------------------------------------------ |
| `GET`       | `/bookings/`      | List all bookings for the authenticated user.    |
| `POST`      | `/bookings/`      | Create a new booking for the authenticated user. |
| `GET`       | `/bookings/<pk>/` | Retrieve a specific booking.                     |
| `PUT`       | `/bookings/<pk>/` | Update a specific booking.                       |
| `DELETE`    | `/bookings/<pk>/` | Delete a specific booking.                       |

---

## **Review Routes**

| HTTP Method | URL                                     | Description                                 |
| ----------- | --------------------------------------- | ------------------------------------------- |
| `GET`       | `/restaurants/<restaurant_pk>/reviews/` | List all reviews for a specific restaurant. |
| `POST`      | `/restaurants/<restaurant_pk>/reviews/` | Add a new review to a specific restaurant.  |

---

## **Authentication**

All routes require authentication unless specified otherwise. Use a valid token in the Authorization header:

```
Authorization: Bearer <your-token>
```

---

## **Error Responses**

Standard error responses include:

- **404 Not Found**: When the requested resource does not exist.
- **403 Forbidden**: When the user does not have permission.
- **400 Bad Request**: When the request data is invalid.
- **401 Unauthorized**: When the user is not authenticated.

---
