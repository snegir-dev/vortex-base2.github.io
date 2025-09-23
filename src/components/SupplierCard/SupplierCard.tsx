import './SupplierCard.css';
import {Avatar, Button, Flex, Typography} from "antd";
import type {FC} from "react";

interface SupplierCardProps {
    className?: string;
    img?: string;
    name: string;
    link: string;
    description?: string;
    password?: string;
}

export const SupplierCard: FC<SupplierCardProps> = (
    {
        className,
        img,
        name,
        link,
        description,
        password
    }
) => {
    return (
        <Flex
            justify="space-between"
            className={`${className} supplier-card`}
        >
            <Flex
                gap={20}
            >
                <Avatar className="avatar" shape="square" src={img ?? 'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg'}>None</Avatar>
                <Flex
                    className="supplier-card-content"
                    vertical={true}
                >
                    <Typography.Text className="supplier-card-content-item">{name}</Typography.Text>
                    <Typography.Text className="supplier-card-content-item">{description}</Typography.Text>
                    {
                        password &&
                        <Typography.Text className="supplier-card-content-item">Пароль: {password}</Typography.Text>
                    }
                </Flex>
            </Flex>
            <Button
                type="primary"
                size="large"
                className="btn-open"
                onClick={() => {
                    window.open(link);
                }}
            >
                Открыть
            </Button>
        </Flex>
    );
}