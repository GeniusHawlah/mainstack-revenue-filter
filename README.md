# A REVENUE FILTER DASHBOARD

## Major Tools Used
- **Next.js framework**
- **Tailwind CSS framework** for out-of-the-box styling
- **Zustand package** for easy, effective, and efficient state management
- Some other packages and dependencies like Flowbite

## Features Implemented
Based on the provided Figma link, API endpoints, and my discretion:
- The dashboard is responsive enough to give even mobile users a decent experience.
- This app can flawlessly fetch transactions, wallet details, and user data from the database to populate the frontend. Both Server Side and Client Side fetching and rendering were utilized where necessary, for security reasons and to avoid excess data on the browser.
- Only the first ten transactions are displayed (the endpoint has seven though.)
- A user can filter transactions by date tags (Today, Last Seven Days, etc.,) date range, transaction types, and transaction status.
- When any tag other than All Time is picked, the user is not permitted to use date range anymore until it is changed to All Time.
- There is a counter that shows the number of filters a user currently applies.
- I improvised for some icons and screens that were not provided but are in the prototype.
- The Line Chart responds to current filters and adjusts accordingly.
- The Nav Items are routed but are currently redirected back to revenue, since that is the only page to work on.
- For responsiveness sake, the top Nav Items are merged with the profile dropdown items on some screens.
- Tooltips are added to the info icons in front of wallet details.
- Hovering on the chart joints displays the data.

[Demo app link](https://mainstack-revenue-filter.vercel.app/revenue)
