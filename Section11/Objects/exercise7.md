# Exercise 7 - Objects
Create an object and an array which we will use in our facebook exercise. 

1. Create an object that has properties "username" and "password". Fill those values in with strings.

2. Create an array which contains the object you have made above and name the array "database".

3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

## Solution
1. ```
   var user1 = {
       username: "Donny",
       pasword: "123",
   }

   var user2 = {
       username: "Betty",
       password: "abc"
   }
    ```

2. ``` 
   var database = [user1, user2]; 
   ```

3. ```
   var newsfeed = [
       {
           username: user1.username,
           timeline: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio commodi facilis voluptatem. Labore, eius magnam praesentium tenetur harum alias odio quidem, nostrum reprehenderit, similique nemo ipsa distinctio illum in."
       },
       {
           username: user2.username,
           timeline: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio commodi facilis voluptatem. Labore, eius magnam praesentium tenetur harum alias odio quidem, nostrum reprehenderit, similique nemo ipsa distinctio illum in."
       },
       {
           username: user1.username,
           timelime: "Another Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex odio commodi facilis voluptatem. Labore, eius magnam praesentium tenetur harum alias odio quidem, nostrum reprehenderit, similique nemo ipsa distinctio illum in."
       }
   ];
   ```