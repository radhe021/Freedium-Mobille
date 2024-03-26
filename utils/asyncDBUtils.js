import AsyncStorage from '@react-native-async-storage/async-storage';

const saveData = async (key, value) => {
	try {
		await AsyncStorage.setItem(key, value);
	} catch (error) {
		console.error("Error saving count:", error);
	}
};

const getData = async (key) => {
	try {
		const value = await AsyncStorage.getItem(key);
		return value; // Handle non-numeric values
	} catch (error) {
		console.error("Error retrieving count:", error);
	}
};
const getCount = async () => {
	try {
		const value = await AsyncStorage.getAllKeys();
		return value?.length; // Handle non-numeric values
	} catch (error) {
		console.error("Error retrieving count:", error);
	}
};

const getAllData = async () => {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const result = await AsyncStorage.multiGet(keys);
    return result.map(req => JSON.parse(req[1]));
  } catch (error) {
    console.error("Error retrieving data:", error);
  }
};

export {saveData, getCount,getAllData,getData}