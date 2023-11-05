import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Typography from '@mui/joy/Typography';

export default function ProductCard(props) {
    return (
        <Card sx={{ width: 300 }}>

            <CardOverflow>
                <AspectRatio minHeight="120px" maxHeight="200px">
                    <img
                        src={props.imgSrc}
                        loading="lazy"
                        alt="No Icon"
                    />
                </AspectRatio>
            </CardOverflow>
            
            <div>
                <Typography level="title-lg">{props.productName}</Typography>
            </div>

            <CardContent orientation="horizontal">
                
                <div>
                    <Typography level="body-xs">Qty Remaining:</Typography>
                    <Typography fontSize="lg" fontWeight="lg">
                    {props.quantity}
                    </Typography>
                </div>

                <Button
                    variant="solid"
                    size="md"
                    color="primary"
                    sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
                >
                    Add to Cart
                </Button>
            
            </CardContent>

        </Card>
    );
}