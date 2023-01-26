TODO
//new parcel

1. user should be able to fill out the customs form and request addtional services when they click on the "request packing" button

//ready to send

1. user should be redirected to an external link when the tracking button is clicked
2. user should be able to edit address
3. user should be able to make a payment
4. the total cost will include the additional services and shipping costs
5. user should be able to select a only one of the listed carriers

//profile

1. user should be able to see past orders
2. user should be able to change password
3. user should be able to change username

//home

1. user should be shown the address to use when they shop in SA

//how the app will work between new parcel and ready to send
in new parcel when a user clicks submit form with services and declared goods and the items to be packed,
data is sent to the server to make a new parcel
this parcel is then made available in the ready to send where its state will then be shared from being packed, to being shipped

- a post request will be made with the following
  - ids of the items that were in new parcel
  - services requested
  - customs form
- the data in the post request will be used for creating a parcel in the database
- this data is then used in the ready to send menu
- the items sent should not appear in the received menu
