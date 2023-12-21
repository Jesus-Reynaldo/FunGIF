export const getGifs = async(category:string) => {
  try{
    const res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${process.env.NEXT_PUBLIC_YOUR_API_KEY}&q=${ encodeURI(category) }`)
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