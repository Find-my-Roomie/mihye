import React,{useState} from 'react'
import Start from './Start';
import Test from '../components/Test/Test';

function Landing(){
    const [condition, setCondition] = useState('true');
    const toggle = () => setCondition(!condition);

    const renderCondition = condition
        ? <Start onClick={toggle}/>
        : <Test/>
    
    return(
        <div>{renderCondition}</div>
    );
}

export default Landing;