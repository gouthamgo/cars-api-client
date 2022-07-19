# Building of the front-end for the application

- We need building a search tool where it can query the backend and give the respective data as per the key - name field 

- Used proxy to connect both front-end and back-end

- Fetched the data from the API that was built 


# Search Functionality

- Pulled all the data from the backend to frontend using axios.
- Since the data is an array, used map function to loop through each object in the array and display it using JSX.

- We track the changes whenever the user types into the input field.
- We use `useState` hook and set the state , whenever there is a change in the input field.

- Next thing to think about was to see the entered query matches any of the data available 
- The approach was to support both partial and identical matching 

## if the user enters a single letter --> function would return all the available names and linked data that will inculde the letter 
## if the user enters a vaild word --> the search function will return an array containing the cars titles that have the word in it

### using filter method 

```
cars.filter(item => {
  if (query === "") {
    //if query is empty
    return cars;
  } else if (item.title.toLowerCase().includes(query.toLowerCase())) {
    // to avoid any errors caused by the capitaliztion of letters --> so we convert both user query and the name of the data to lowercase
    //returns filtered array
    return cars;
  }
});
```
```
array.filter() --> outputs  a new array which satisfies the expression
arrar.map()--> Loops through the array and displays a JSX element 

We use ---> array.filter.map()
```