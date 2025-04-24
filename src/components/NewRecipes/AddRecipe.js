import { useState } from 'react';

import Card from '../UI/Card';
import styles from './AddRecipe.module.css';

const AddRecipe = (props) => {
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);

    const [ingredients, setIngredients] = useState([''])
    const [steps, setSteps] = useState(['']);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    // const addIngredientHandler = (event) => {
    //     setIngredients((prevIngredients) => {
    //         return [...prevIngredients, event.target.value];
    //     })
    // }
    const uploadFileHandler = (event) => {
        const file = event.target.files[0];
        if (!file.type.includes('image')) {
            return alert('Please upload an image');
        }
        setSelectedFile(URL.createObjectURL(event.target.files[0]));
    }

    const addRecipeHandler = (event) => {
        event.preventDefault();
        
        const newRecipe = {
            name,
            ingredients,
            steps,
            image: selectedFile
        };

        props.onAddRecipe(newRecipe);
    }

    return (
        <Card className={styles['add-recipe']}>
            <form>
                <label>Recipe Name</label>
                <input type="text" onChange={nameChangeHandler} />
                <label>Image</label>
                <input type='file' onChange={uploadFileHandler} />
                {/* <div className={styles.ingredients}>

                <label>ingredients</label>
                {ingredients.map((ingredient, index) => (
                    <input key={'i' + index} type="text" onChange={addIngredientHandler} />
                ))}
                </div> */}
                <div>
                    <button onClick={addRecipeHandler}>Add Recipe</button>
                </div>
            </form>
        </Card>
    );
}

export default AddRecipe;
