// create a an array of property objects 

const property :{
    image:string,
    Title:string,
    price:number,
    location:string,
    postcode:number,
    Country:string,
    contact:number
    


}[]=[
    {
        image:"https://www.bing.com/th?id=OIP.MzA5Mj",
        Title:"House for sale",
        price:100000,
        location:"New York",
        postcode:10001,
        Country:"USA",
        contact:1234567890

    }
]

// write a function to create and push into property array, making sure to assign the correct Types?

function createProperty(image:string,Title:string,price:number,location:string,postcode:number,Country:string,contact:number){  
    const newProperty={
        image:image,
        Title:Title,
        price:price,
        location:location,
        postcode:postcode,
        Country:Country,
        contact:contact
        }
        property.push(newProperty)
}