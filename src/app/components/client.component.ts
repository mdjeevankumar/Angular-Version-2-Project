import { Component } from '@angular/core';
import { PostsService } from './services/posts.service';
@Component({
moduleId:module.id,
selector:'client',
templateUrl:'client.component.html',
providers:[PostsService]
})

export class ClientComponent{
version:string;
email:string;
address:address;
showproducts:boolean;
name:string;
products:string[];
productName:string;
posts:post[];


constructor(private PostsService : PostsService)
{
this.version="version 2.0",
this.productName="offer Details"
this.name="One Plus 3!!!!!75% OFFER"
this.email="mdjeevankumar@gmail.com",
this.address={
      street:"padikkuppam Road",
      city:"chennai",
      location:"Tamil Nadu"
}
this.showproducts=false;
this.products=["REDME Prime - $99 ","One Plus X - $199.5" ,"I Phone 6s - $479.5"];

this.PostsService.getPosts().subscribe(posts=>{
this.posts=posts;      
//console.log(posts);
});
}


toggleproducts(){
if(this.showproducts)
this.showproducts=false;
else
this.showproducts=true;
}

addHobby(product)
{
this.products.push(product);
}

deleteHobby(i)
{
this.products.splice(i,1);      
}

}

interface address
{
street:string;
city:string;
location:string;
}


interface post
{
userId:number;
id:number;
title:string;
body:string;
}
