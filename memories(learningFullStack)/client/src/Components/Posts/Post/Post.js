import { formControlClasses } from '@mui/material';
import React from 'react'
import { Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteIcon from '@mui/icons-material/Delete'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'
import { ClassNames } from '@emotion/react';
import moment from 'moment'
const Post = ({post}) => {   

    return(
        <Card className='card'>
            <CardMedia className='media' component="img" image={post.selectedFile} title={post.title}/> 
            <div className='overlay'>
                <Typography variant='h6' >{post.creator} </Typography>
                <Typography variant='body2' >{moment(post.createdAt).fromNow()} </Typography>
            </div>
            <div className='overlay2'>
                <Button sx={{color: 'purple'}} size='small' onClick={() => {}} >
                    <MoreHorizIcon fontSize='default'  /> 
                    
                </Button>
            </div>
            <div className="details">
                <Typography variant='body2' color='textSecondary'>{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>
            <CardContent>
                <Typography className='title' variant='h5'  gutterBottom>{post.message} </Typography>
            </CardContent>
            <CardActions className='cardActions' >
                <Button size='small' color='primary' onClick={() => {}}>
                    <DeleteIcon fontSize='small'/> 
                    Delete
                </Button>
            </CardActions>
           
        </Card>
    )
}

export default Post;