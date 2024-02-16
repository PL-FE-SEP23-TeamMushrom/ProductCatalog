const useLocalStorage = ((key: string) => {
    const getItem = () => JSON.parse(localStorage.getItem(key) || "[]");
    const setItem = (itemValue: Record<string, number>[]) => localStorage.setItem(key, JSON.stringify(itemValue));
    const addItem = (itemName: string) => {
        const storedItems: Record<string, number>[] = getItem();

        const itemIndex = storedItems.findIndex(item => Object.keys(item)[0] === itemName);
        
        if (itemIndex === -1) {
            // If the item doesn't exist, add it to the array with a quantity of 1
            const newItem: Record<string, number> = {};
            newItem[itemName] = 1;
            storedItems.push(newItem);
        } else {
            // If the item exists, increment its quantity by 1
            storedItems[itemIndex][itemName] = (storedItems[itemIndex][itemName] || 0) + 1;
        }

        console.log(storedItems);
        setItem(storedItems);
    };

    const reduceItem = (itemName: string) => {
        const storedItems: Record<string, number>[] = getItem();
        const itemIndex = storedItems.findIndex(item => Object.keys(item)[0] === itemName);

        if (itemIndex !== -1) {
            if (storedItems[itemIndex][itemName] === 1) {
                // If the item exists and its quantity is 1, remove it from the list
                storedItems.splice(itemIndex, 1);
            } else {
                // If the item exists and its quantity is more than 1, reduce its quantity by 1
                storedItems[itemIndex][itemName] = (storedItems[itemIndex][itemName] || 0) - 1;
            }

            setItem(storedItems);
        }
    };

    return {getItem, setItem, addItem, reduceItem};
})

export default useLocalStorage


// const setItem = (itemValue: string) => localStorage.setItem(key, JSON.stringify(itemValue));


// import { useState, useEffect } from 'react';
// function useLocalStorage(key: string, initialValue: []) {
//   // Sprawdzanie, czy localStorage ma wartość przypisaną do danego klucza
//   console.log(localStorage);
//   const storedValue = localStorage.getItem(key);

//   console.log(storedValue)
//   // Parsowanie przechowywanej wartości lub ustawianie jej na initialValue
//   const initial = storedValue ? JSON.parse(storedValue) : initialValue;
//   // Użycie useState do zarządzania stanem
//   const [value, setValue] = useState(initial);
//   // Ustawianie wartości w localStorage za każdym razem, gdy wartość się zmienia
//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(value));
//   }, [key, value]);
//   return [value, setValue];
// }
// export default useLocalStorage;