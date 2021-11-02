import React from 'react';
import {ListItem, ListItemText, BottomNavigation} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import propTypes from 'prop-types'

const useStyles=makeStyles((theme)=>({
    chatPosition :{
        display:'flex',
        justifyContent:'space-between',
        alignItems:"center",
        paddingLeft: theme.spacing(1),
        position:"fixed",
        bottom:0
    },


}));

export const Chat = ({name}) => {
    const classes=useStyles()
    return (
        <ListItem className={classes.chatPosition}>
            <ListItemText>{name}</ListItemText>

        </ListItem>
    );
};

Chat.propTypes={
    id:propTypes.string,
    name:propTypes.string,
}