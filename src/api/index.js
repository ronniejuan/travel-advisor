import axios from "axios";

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

const options = {

  params: {
    bl_latitude: '11.847676',
    tr_latitude: '12.838442',
    bl_longitude: '109.095887',
    tr_longitude: '109.149359',
  },
  headers: {
    'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com',
    'X-RapidAPI-Key': '09c07c704amsh0ae8683e6bfeeb0p1e6e3djsn85ee0b0bb3e8'
  }
};


export const getPlacesData = async () =>{
    try {
        const { data : { data } } = await axios.get(URL, options);

        return data;

    }catch (error) {
        console.log(error)
        

    }

}