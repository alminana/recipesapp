import axios from "axios"

export const getRecipesList =  async (tags = null, size) => {
    const options = {
        method: 'GET',
        url: 'https://tasty.p.rapidapi.com/recipes/list',
        params: {
          from: '0',
          size: '20',
          tags
        },
        headers: {
          'X-RapidAPI-Key': '11bc81d152mshde1f160df9de188p17369ejsn27fbf97af186',
          'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
        }
      };
      return await axios.request(options)
}