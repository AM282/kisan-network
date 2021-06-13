import React from 'react';
import { formatDate} from '../../services/formatDate';
import {formatTime} from '../../services/formatTime';

const DisplayMessageListItem = (props) => {
    const createdAt=[formatTime(props.createdAt),formatDate(props.createdAt)].join(' ');

    return (
        <tr>
            <td>{props.contactname}</td>
            <td>{props.otp}</td>
            <td>{createdAt}</td>
        </tr>
    );
}

export default DisplayMessageListItem;
