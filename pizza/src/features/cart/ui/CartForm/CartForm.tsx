import styles from './CartForm.module.scss';

interface CartFormProps {
  title: string;
  description?: string;
  onClick?: () => void;
}

const CartForm = ({ title, description = 'Описание по умолчанию', onClick }: CartFormProps) => {
  return (
    <div className={styles.content}>
    </div>
  );
};

export default CartForm;