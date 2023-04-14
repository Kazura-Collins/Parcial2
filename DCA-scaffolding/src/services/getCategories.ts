export async function getCategories(){
    try{
        const data = await fetch('https://api.chucknorris.io/jokes/categories').then(res => res.json());
        console.log(data);
        return data.results;
    } catch(error){
        console.error(error);
    }
}