import React from 'react';
import classes from './Messages.module.scss';
import { Dialogs } from './Dialogs/Dialogs';
import { CurrentDialog } from './CurrentDialog/CurrentDialog';

export const Messages = () => {
    return (
        <div className={classes.Messages}>
            <Dialogs />
            <CurrentDialog />
        </div>
    )
}