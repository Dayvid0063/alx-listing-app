export interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    className?: string;
}

export interface CardProps {
    title: string;
    description: string;
    price: number;
    image: string;
    location: string;
    rating?: number;
    onClick?: () => void;
}
