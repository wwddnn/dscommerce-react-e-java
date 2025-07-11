import './styles.css';

/* o componente deve receber as Props como um objeto*/
type Props = {
    name: string;
}

export default function ProductCategory({ name }: Props) {
    return(
        <div className="dsc-category">
            { name }
        </div>
    );
}

