import Card from "../UI/Card";
import trashImg from '../../assets/trashcan.png';
import styles from './Recipe.module.css';

const Recipe = (props) => {
    return (
        <li>
            <Card className={styles.recipe}>
                <h2>{props.name}</h2>
                <img src={props.image} alt='dish' />
                <h3>Ingredients</h3>
                <ul>
                    {props.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
                <h3>Steps</h3>
                <ol>
                    {props.steps.map((step, index) => (
                        <li key={index}>{step}</li>
                    ))}
                </ol>
                <img
                    src={trashImg}
                    alt="trash"
                    className={styles.trash}
                    onClick={props.removeRecipe.bind(null, props.id)}
                />
            </Card>
        </li>
    );
}

export default Recipe;
