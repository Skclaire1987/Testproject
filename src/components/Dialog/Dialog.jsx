import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (
<div className={s.dialogs}>
<div className={s.dialogItems}>
    Svetlana
<div className={s.dialog+ '' +s.active}>
    Svetlana
</div>
<div className={s.dialog}>
    Svetlana
</div>
<div className={s.dialog}>
    Svetlana
</div>
</div>
<div ClassName={s.messages}>
<div ClassName={s.message}>Message</div>
<div ClassName={s.message}>Message1</div>
<div ClassName={s.message}>Message2</div>
</div>
</div>

)
}



export default Dialog;