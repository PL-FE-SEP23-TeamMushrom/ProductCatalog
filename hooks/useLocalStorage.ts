import { LOCAL_STORAGE_KEYS } from "@/constants/localStorageKeys";

type LocalStorageKeys = keyof typeof LOCAL_STORAGE_KEYS

const useLocalStorage = ((key: LocalStorageKeys) => {
    if (typeof window === 'undefined') {
        return
      }

    if (!Object.values(LOCAL_STORAGE_KEYS).includes(key)) {
        throw new Error("Invalid local storage key");
    }
      
    const getItem = () => JSON.parse(localStorage.getItem(key) || "[]");
    const setItem = (itemValue: Record<string, number>[]) => localStorage.setItem(key, JSON.stringify(itemValue));
    const addItemToCart = (itemName: string) => {
        const storedItems: Record<string, number>[] = getItem();

        const itemIndex = storedItems.findIndex(item => Object.keys(item)[0] === itemName);
        
        if (itemIndex === -1) {
            const newItem: Record<string, number> = {};
            newItem[itemName] = 1;
            storedItems.push(newItem);
        } else {
            storedItems[itemIndex][itemName] = (storedItems[itemIndex][itemName] || 0) + 1;
        }

        setItem(storedItems);
    };

    const reduceItemFromCart = (itemName: string) => {
        const storedItems: Record<string, number>[] = getItem();
        const itemIndex = storedItems.findIndex(item => Object.keys(item)[0] === itemName);

        if (itemIndex !== -1) {
            if (storedItems[itemIndex][itemName] <= 1) {
                storedItems.splice(itemIndex, 1);
            } else {
                storedItems[itemIndex][itemName] = (storedItems[itemIndex][itemName] || 0) - 1;
            }

            setItem(storedItems);
        }
    };

    const removeItemFromCart = (itemName: string) => {
        const storedItems: Record<string, number>[] = getItem();
        const itemIndex = storedItems.findIndex(item => Object.keys(item)[0] === itemName);

        storedItems.splice(itemIndex, 1);

        setItem(storedItems);
    }

    const addFavoriteToStorage = (itemName: string) => {
        const storedItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES);
        const storedItems = storedItemsJSON ? JSON.parse(storedItemsJSON) : [];
    
        const isItemInFavorites = storedItems.includes(itemName);
    
        if (!isItemInFavorites) {
            storedItems.push(itemName);
    
            localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(storedItems));
        } 

        setItem(storedItems);
    };

    const removeFavoriteFromStorage = (itemName: string) => {
        const storedItemsJSON = localStorage.getItem(LOCAL_STORAGE_KEYS.FAVORITES);
        const storedItems = storedItemsJSON ? JSON.parse(storedItemsJSON) : [];
    
        const itemIndex = storedItems.indexOf(itemName);
    
        if (itemIndex !== -1) {
            storedItems.splice(itemIndex, 1);
    
            localStorage.setItem(LOCAL_STORAGE_KEYS.FAVORITES, JSON.stringify(storedItems));
        } 
    
        setItem(storedItems);
    };

    return {getItem, setItem, addItemToCart, reduceItemFromCart, removeItemFromCart, addFavoriteToStorage, removeFavoriteFromStorage};
})

export default useLocalStorage

