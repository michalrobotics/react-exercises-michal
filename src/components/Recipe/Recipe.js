import Card from "../UI/Card";
import styles from './Recipe.module.css';

const Recipe = (props) => {
    const recipe = {
        name: 'food',
        ingredients: ['avocade', 'tomato'],
        steps: ['mix', 'eat'],
        image: ''
    };
    return (
        <Card className={styles.recipe}>
            <h2>{props.recipe.name}</h2>
            <img src={props.recipe.image} alt='dish' />
            <ul>
                {props.recipe.ingredients.map((ingredient, index) => (
                    <li key={'i' + index}>{ingredient}</li>
                ))}
            </ul>
            <ol>
                {props.recipe.steps.map((step, index) => (
                    <li key={'s' + index}>{step}</li>
                ))}
            </ol>
        </Card>
    );
}

export default Recipe;
