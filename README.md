📦 Company Review Filter API
An Express.js API for retrieving and filtering company reviews from a local JSON file.

🛠 Features
🔍 Get all company data

🧾 Filter reviews by company name, date range, and source

📄 Reads from a local sample.json file

🔐 Environment-ready with dotenv


🚀 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/your-username/company-review-api.git
cd company-review-api
2. Install dependencies
bash
Copy
Edit
npm install
This will install:

express

dotenv

3. Create .env file
bash
Copy
Edit
touch .env
You can leave it empty or define future environment variables here.

📄 Create sample.json
In the root directory, create a sample.json file with this structure:

json
Copy
Edit
[
  {
    "company_name": "ExampleCorp",
    "Source": "Glassdoor",
    "Reviews": [
      {
        "date": "2023-10-01",
        "content": "Great work environment"
      },
      {
        "date": "2023-06-15",
        "content": "Good team culture"
      }
    ]
  }
]
🧾 API Endpoints
GET /company
Description: Get all companies and their reviews.

URL: http://localhost:3000/company

Response Example:

json
Copy
Edit
[
  {
    "company_name": "ExampleCorp",
    "Source": "Glassdoor",
    "Reviews": [...]
  }
]
POST /company/filter
Description: Filters reviews by company name, date range, and source.

URL: http://localhost:3000/company/filter

Request Body:

json
Copy
Edit
{
  "company_name": "ExampleCorp",
  "start_date": "2023-01-01",
  "end_date": "2023-12-31",
  "source": "Glassdoor"
}
Response Example:

json
Copy
Edit
[
  {
    "date": "2023-10-01",
    "content": "Great work environment"
  }
]
🚦 To Run the Server
Using Node:
bash
Copy
Edit
node server.js
Using Nodemon (for development):
bash
Copy
Edit
npx nodemon server.js
⚠️ Known Issue
The date filter in CompanyFilter uses itemDate >= startDate || itemDate <= endDate.
For correct filtering, replace with:

js
Copy
Edit
return itemDate >= startDate && itemDate <= endDate;
