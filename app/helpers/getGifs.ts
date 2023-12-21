"use client"
export const getGifs = async(category:string) => {
  try{
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=h9B9xq1hCyQF72Og60OdLjfsKJLrHS4n&q=${ encodeURI(category) }`)
    const {data} = await res.json();
    const gifts =data.map((img:any) =>{
      return{
        id:img.id,
        title:img.title,
        url:img.images.downsized_medium.url
      }
    })
    if(gifts.length >0){
      return gifts
    }
  }catch(e){
    console.log(e)
  }
}