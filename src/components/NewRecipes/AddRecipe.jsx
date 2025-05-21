import { useContext, useState } from 'react';

import Card from '../UI/Card';
import styles from './AddRecipe.module.css';
import Button from '../UI/Button';
import RecipesContext from '../../store/recipes-context';

const AddRecipe = (props) => {
    const recipesCtx = useContext(RecipesContext);

    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const [ingredients, setIngredients] = useState([''])
    const [steps, setSteps] = useState(['']);

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    }

    const fieldChangeHandler = (event, field) => {
        const index = +event.target.getAttribute(`input-id`);
        let fieldArray, arraySetter;

        if (field === 'ingredients') {
            fieldArray = ingredients;
            arraySetter = setIngredients;
        } else {
            fieldArray = steps;
            arraySetter = setSteps;
        }

        if (event.target.value.length === 0) {
            return removeField(event, index, fieldArray, arraySetter);
        }

        addField(event, index, fieldArray, arraySetter);
    }

    const addField = (event, index, fieldArray, arraySetter) => {
        arraySetter((prevArray) => {
            const newArray = [...prevArray];

            if ((index === fieldArray.length - 1) && (event.target.value.length === 1)) {
                newArray[newArray.length] = '';
            }

            newArray[index] = event.target.value;
            return newArray;
        });
    }

    const removeField = (event, index, fieldArray, arraySetter) => {
        return arraySetter((prevArray) => {
            const newArray = [...prevArray];
            newArray.splice(index, 1);
            return newArray;
        });
    }

    const uploadFileHandler = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (!file.type.includes('image')) {
                event.target.value = '';
                return alert('Please upload an image');
            }

            const imageReader = new FileReader();
            imageReader.readAsDataURL(file);

            imageReader.onload = (event) => {
                setImage(event.target.result);
            }
        }
    }

    const addRecipeHandler = (event) => {
        event.preventDefault();

        const newRecipe = {
            name,
            ingredients,
            steps,
            image
        };

        setName('');
        setIngredients(['']);
        setSteps(['']);

        recipesCtx.addRecipe(newRecipe);

        event.target.reset();
    }

    return (
        <Card className={styles['add-recipe']}>
            <form onSubmit={addRecipeHandler}>
                <label htmlFor='name'>Recipe Name</label>
                <input autoComplete='off' id='name' required value={name} type="text" onChange={nameChangeHandler} />
                <label htmlFor='image'>Image</label>
                <input required id='image' type='file' onChange={uploadFileHandler} accept='image/*' />
                <div id='ingredients' className={styles.ingredients}>
                    <h4>Ingredients</h4>
                    {ingredients.map((ingredient, index) => (
                        <input
                            required={index === 0 ? true : false}
                            key={index}
                            input-id={index}
                            type="text"
                            onInput={(event) => {
                                fieldChangeHandler(event, 'ingredients');
                            }}
                            value={ingredient}
                        />
                    ))}
                </div>
                <div id='steps' className={styles.steps}>
                    <h4>Steps</h4>
                    {steps.map((step, index) => (
                        <input
                            required={index === 0 ? true : false}
                            key={index}
                            input-id={index}
                            type="text"
                            onInput={(event) => {
                                fieldChangeHandler(event, 'steps');
                            }}
                            value={step}
                        />
                    ))}
                </div>
                <div>
                    <Button type='submit'>Add Recipe</Button>
                </div>
            </form>
        </Card>
    );
}

export default AddRecipe;
