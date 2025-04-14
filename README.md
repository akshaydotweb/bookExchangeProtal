## Requirements for BookExchangeProtal

### Functional Requirements
1. **User Registration & Profile Management**
   - Users can register by providing the required details.
   - Store user profiles in-memory or in a flat file (JSON).
2. **Authentication**
   - Implement a mock login using email and password.
   - Redirect users to the appropriate dashboard:
     - **Owner Dashboard:** For users with the Owner role.
     - **Listings Page:** For users with the Seeker role.
3. **Book Listings**
   - **For Owners:**
     - Add new listings with title, author, genre (optional), location, and contact info.
     - (Optional) Edit or delete their own listings.
   - **For All Users:**
     - View all available book listings.
     - (Optional) Filter or search listings by title, genre, or location.
     - (Optional) Toggle listing status (Available, Rented, Exchanged).

### Non-Functional Requirements
- **Performance:** The system should respond quickly (within a few seconds) for user interactions.
- **Usability:** Ensure simple and clear user interfaces.
- **Maintainability:** Use a clean project structure and modular code.
- **Scalability:** Although built as a mini project, consider structuring the code for potential future enhancements.
- **Security:** Minimal security, as the authentication is basic and no encryption is applied.

## Task :

**Foundation Setup (Completed Today)**
   - Initialize the project repository.
   - Set up directory structure for frontend and backend.
   - Install required dependencies.

**User Authentication & Profile Management (in Process)**
   - Develop registration and login endpoints.
   - Create React pages for registration and login.
   - Test basic authentication flow.

## Design Patterns Utilized

This project incorporates several foundational software design patterns to promote a modular, maintainable, and scalable codebase:

*   **Model-View-Controller (MVC) Variant (Backend):** The backend architecture loosely follows the MVC pattern.
    *   **Models:** Represent the data structures for Users and Books (currently using in-memory arrays, conceptually similar to data models).
    *   **Controllers (`/controllers`):** Contain the core application logic, handling request processing and interactions with the data structures.
    *   **Routes (`/routes`):** Define the API endpoints and map incoming HTTP requests to the appropriate controller functions, acting as the interface layer.

*   **Component-Based Architecture (Frontend):** Leveraging React and Next.js, the frontend is built using a component-based approach. The user interface is broken down into reusable, self-contained components (e.g., `Header`, `BookCard`, `Form`), each managing its own state and presentation logic. This enhances modularity and simplifies UI development and maintenance.

*   **Client-Server Architecture:** The application employs a standard client-server model, clearly separating the presentation logic (frontend client running in the browser) from the business logic and data persistence (backend server). Communication between the two tiers occurs via stateless HTTP requests following a defined API contract.

*   **RESTful API Design (Backend):** The backend exposes its services through a RESTful API. Resources (Users, Books) are identified by unique URIs, and standard HTTP verbs (POST, GET, PUT, DELETE - though PUT/DELETE might be optional features) are used to manipulate these resources, adhering to REST principles.

*   **Middleware Pattern (Backend):** Express middleware (`cors`, `express.json`) is employed to handle cross-cutting concerns within the request-response pipeline. This allows for functionalities like CORS handling and JSON body parsing to be applied systematically without cluttering the primary route handlers.