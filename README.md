# The RedditMicro Client.

This project was complete as part of the Codecademy Full-Stack Engineer course. Specifically the project covers the Reddit Client Portfolio Project. The application has been given the name The RedditMicro Client.

The purpose of the project is to provide an application that exercises the Reddit REST API. The feature of the API are simple and intuitive to use:

> On the left a set of buttons are provided that navigate into a set of high level search areas. Once selected, the items from the selected areas appear on the right. Any images that are found in these items are show.
>
> Each item contains a speech bubble with a count of the number of comments for each items. Clicking on the speech button will reveal a list of the comments. Clicking again will hide the comments.
>
> There is a search dialogue that makes use of the search API call within the REST API. Once again all matching items will be shown.
>
> The application is responsive in design.

## Some implementation details

The interface make direct use of the API - undocumented JSON API: https://github.com/reddit-archive/reddit/wiki/JSON. This API does not require any form of OAuth flow.

The comment and search items are retrieved using the API after each request - there is no buffering or read ahead used as this would lead to an inefficient implementation.

## How to use

This is a react/redux application. No database is used. The application can be obtained via. a Github clone process and then by running the usual commands:

> npm install
> npm run start

This application will be deployed onto the web in the near future.

### License

The code in this project can be freely copied and distributed provided the copies bear an appropriate acknowledgement.
