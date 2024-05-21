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

/*
export const addDailyHumor = async (date, humor) => {
    try {
        const key = `humor_${date}_${new Date().getTime()}`;
        await storageHumor(key, humor);
        console.log('Humor OK')
    } catch (e) {
        console.log("Erro ao adicionar humor diario:", e);
    }
};
*/

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


// GARANTIR QUE PROXIMO HUMOR SEJA LANCADO EM 24 HORAS

export const setLastHumorDate = async (date) => {
    try {
        await AsyncStorage.setItem('lastHumorDate', date);
    } catch (e) {
        console.log("Erro setLastHumorDate tipo: ", e);
    }
};

export const getLastHumorDate = async () => {
    try {
        const lastHumorDate = await AsyncStorage.getItem('lastHumorDate');
        return lastHumorDate != null ? new Date(lastHumorDate) : null;
    } catch (e) {
        console.log("Erro getLastHumor tipo: ", e)
        return null;
    }
};

export const canAddDailyHumor = async () => {
    const lastHumorDate = await getLastHumorDate();
    if (lastHumorDate === null) {
        return true;
    }

    const currentTime = new Date();
    const diffInMs = currentTime - lastHumorDate;
    const diffInHours = diffInMs / (1000 * 60 * 60);

    return diffInHours >= 24;
};


export const addDailyHumor = async (date, humor) => {
    try {
        if (await canAddDailyHumor()) {
            const key = `humor_${date}_${new Date().getTime()}`;
            await storageHumor(key, humor);
            await setLastHumorDate(new Date().toISOString());
            console.log('Humor adicionado com sucesso');
            return true
        } else {
            return false
        }
    } catch (e) {
        console.log("Erro ao adicionar humor diario:", e);
    }
};


// LIMPAR MEMORIA
export const clearAsyncStorage = async () => {
    try {
        await AsyncStorage.clear();
        alert('O historico foi limpo')
    } catch (e) {
        console.log("Erro ao limpar memoria:", e);
    }
}