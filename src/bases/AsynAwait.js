const getImage = async()=>{
    const apiKey = 'dX5Yn5ChVPLM0t41qHKq3aCLCwDMXMQY';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await resp.json();
    const { url } = data.images.original;
    
    const img = document.createElement('img');
    img.src = url;

    document.body.append(img);

}


getImage();