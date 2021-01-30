import ControlBox from '../control-box/control-box.js';
import ItemDisplay from '../item-display/item-display.js';
import './list-body.css';

function ListBody (){
    return(
        <div className='listBodyParent'>
            <ControlBox></ControlBox>
            <ItemDisplay></ItemDisplay>
        </div>
    );
}

export default ListBody;