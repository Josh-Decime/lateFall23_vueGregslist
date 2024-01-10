import { api } from "./AxiosService.js"
import { House } from "../models/House.js"
import { AppState } from "../AppState.js"


class HouseService {


    async getHouses() {
        const response = await api.get('api/houses')
        console.log('📡🏡', response.data);
        AppState.houses = response.data.map(house => new House(house))
        console.log('AppState houses', AppState.houses)
    }

}

export const houseService = new HouseService()