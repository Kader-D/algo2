function triInsertion(arr) {
    // Parcourt le tableau à partir du deuxième élément
    for (let i = 1; i < arr.length; i++) {
        let clé = arr[i];
        let j = i - 1;
        
        // Déplace les éléments de arr[0..i-1] qui sont plus grands que la clé d'une position vers la droite
        while (j >= 0 && arr[j] > clé) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = clé;
    }
    return arr;
}

// Exemple d'utilisation
let tableau = [12, 11, 13, 5, 6];
console.log("Tableau original : ", tableau);
let tableauTrie = triInsertion(tableau);
console.log("Tableau trié : ", tableauTrie);
