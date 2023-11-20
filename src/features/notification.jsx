import React from 'react'

import Icon from '@mdi/react';
import { mdiBellBadge } from '@mdi/js';

export default function Notification() {
    return (
        <div className='notifion-set'>
            <Icon path={mdiBellBadge} size={1} />
        </div>
    )
}
