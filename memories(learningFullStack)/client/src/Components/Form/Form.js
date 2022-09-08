import React from 'react'
import './styles.css'
import { TextField, Button, Typography, Paper} from '@mui/material'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createPost} from '../../actions/posts.js'

function Form() {
    const [postData, setPostData] = React.useState
    ({
        creator:'',
        title:'',
        message:'',
        tags:'',
        selectedFile:'',
    });

    const dispatch = useDispatch()

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(createPost(postData))
    }
    function clear() {}

    return(
        <Paper className ='paper'>
            <form autoComplete="off" noValidate className='form' onSubmit={handleSubmit}>
                <Typography variant='h6'>Creating a memory</Typography>
                <TextField name='creator' variant='outlined' label="Creator" fullWidth value={postData.creator}
                            onChange={(e) => setPostData({...postData, creator: e.target.value})} />

                <TextField name='Title' variant='outlined' label="Title" fullWidth value={postData.title}
                            onChange={(e) => setPostData({...postData, title: e.target.value})} />

                <TextField name='Message' variant='outlined' label="Message" fullWidth value={postData.message}
                            onChange={(e) => setPostData({...postData, message: e.target.value})} />

                <TextField name='Tags' variant='outlined' label="Tags" fullWidth value={postData.tags}
                            onChange={(e) => setPostData({...postData, tags: e.target.value})} />

                <div className='fileInput'>
                    <FileBase 
                        type='file'
                        multiple={false}
                        onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                    />

                    <Button className='buttonSubmit' variant='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                    <Button  variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
                    <Button onClick={()=>console.log(postData.selectedFile)}> check File</Button>
                </div>
            </form>
        </Paper>
    )
}

export default Form;