import { Component } from '@angular/core';

@Component({
selector:'client',
template:'
<h2>Angular Application {{version}} </h2>
<p><strong>Email:</strong>{{Email}}</p>
<p><strong>Address:</strong>{{address.street,address.City}}</p>',
})


export class ClientComponent()
{
version:string;
Email:string;
address:address;

constructor()
{
this.version="2.2",
this.Email="mdjeevankumar@gmail.com",
this.address={
      street:"padik",
      city:"chennai"
}
}
}

interface address()
{
street:string;
city:string;
}