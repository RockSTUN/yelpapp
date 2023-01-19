const options = {method: 'GET', headers: {accept: 'application/json', Authorization: 'Bearer API KEY'}}

async function yelp(price,term='restaurants',limit='20',location='NYC', sort_by='best_match'){
        console.log('Term: ', term)
        var ans = await fetch(`https://api.yelp.com/v3/businesses/search?sort_by=${sort_by}&limit=${limit}&location=${location}&term=${term}&price=${price}`, options)
        const teste = await ans.json()

        return teste.businesses;
   
        
}

export default yelp;





