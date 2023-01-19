const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer ApbtQK07Zd6_pMsawGpvELiVvlLAyRCUE7GVFFXRfDca8rieDtJzUTbSwv_gQCzp7HLjeAJpxfRoszDKktNXaKeH8fYo7cQNYTHu6N_ZF6H9eRN1_PeHwssQPlGMY3Yx'}}

async function yelp(price,term='restaurants',limit='20',location='NYC', sort_by='best_match'){
        console.log('Term: ', term)
        var ans = await fetch(`https://api.yelp.com/v3/businesses/search?sort_by=${sort_by}&limit=${limit}&location=${location}&term=${term}&price=${price}`, options)
        const teste = await ans.json()

        return teste.businesses;
   
        
}

export default yelp;





