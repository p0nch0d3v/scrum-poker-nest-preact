import { Box, Button, Card, CardContent, Typography, useTheme } from "@mui/material";
import { FunctionComponent } from "react";


type CardProps = {
    card: any,
    onClick?: any,
    disabled?: boolean,
    selected?: boolean,
    size?: 'small' | 'large'
}

const cardStyle = (disabled?: boolean, selected?: boolean) => {
    const themeOptions = useTheme();
    return {
        margin: '1em',
        width: '4em',
        cursor: disabled === true ? 'not-allowed' : 'pointer',
        opacity: disabled === true ? 0.5 : 1,
        border: `2px solid ${selected === true ? themeOptions.palette.primary.main : 'transparent'}`
    }
}

const cardSmallStyle = (disabled?: boolean, selected?: boolean) => {
    const themeOptions = useTheme();
    return {
        margin: '1em',
        width: '3em',
        cursor: disabled === true ? 'not-allowed' : 'pointer',
        opacity: disabled === true ? 0.5 : 1,
        border: `2px solid ${selected === true ? themeOptions.palette.primary.main : 'transparent'}`
    }
}

const CardComponent: FunctionComponent<CardProps> = ({ card, onClick, disabled, selected, size = 'large' }) => {

    const getCardStyle = () => size === 'small' ? cardSmallStyle(disabled, selected) : cardStyle(disabled, selected);

    return (
        card.value !== null ? (<Card sx={getCardStyle} onClick={disabled === true ? undefined : onClick}>
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignContent: 'center' }}>
                <Typography sx={{ fontSize: size === 'small' ? '1em' : '2em' }}>
                    {card.text && card.text.length > 0 ? card?.text : <>&nbsp;</>}
                </Typography>
            </CardContent>
        </Card>) : <></>

    );
}

export default CardComponent;