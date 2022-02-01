
  export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category )}&limit=10&api_key=FSVstxam0etCEbEguJsFPdyc1pt5FH1d`;
    const resp = await fetch( url );
    const { data } = await resp.json();  
        
    const gifs = data.map( img => ({ 
        id: img.id,
        title: img.title,
        url: img.images?.original.url
      
    }))


    return gifs;

     } 

  
 