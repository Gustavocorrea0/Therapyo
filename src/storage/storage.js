import AsyncStorage from "@react-native-async-storage/async-storage";

export const storageHumor = async (key, value) => {
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(key, jsonValue)
    } catch (e) {
        console.log("Erro de cadastro de Humor em storageHumor: ", e);
    }
};

export const getData = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
        console.log("Erro ao ler dados em getData: ", e);
    }
};

export const addDailyHumor = async (date, humor) => {
    try {
        const key = `humor_${date}_${new Date().getTime()}`;
        await storageHumor(key, humor);
        console.log('Humor OK')
    } catch (e) {
        console.log("Erro ao adicionar humor diario:", e);
    }
};

export const getDailyHumor = async (date) => {
    try {
        const key = `humor_${date}`;
        return await getData(key);
    } catch (e) {
        console.log('Erro ao obter humor diario', e);
    }
};

export const getAllHumors = async () => {
    try {
        const keys = await AsyncStorage.getAllKeys();
        const humorKeys = keys.filter(key => key.startsWith('humor_'));
        const humors = await AsyncStorage.multiGet(humorKeys);
        return humors.map(([key, value]) => ({ date: key.split('_')[1], humor: JSON.parse(value) }));
    } catch (e) {
        console.log("Erro ao obter todos os humores:", e);
        return [];
    }
};