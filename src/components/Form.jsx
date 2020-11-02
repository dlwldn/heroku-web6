import React, {useState, useCallback, useContext, memo} from 'react';
import {TableContext, START_GAME} from './MineSearch';

const Form = memo(() => {
    const [row, setRow] = useState(8);
    const [cell, setCell] = useState(8);
    const [mine, setMine] = useState(20);

    //구조분해로 할당
    const { dispatch } = useContext(TableContext);

    //불필요한 렌더링을 막기 위해서 웬만하면 만든 이벤트 함수들은 useCallback으로 감싸준다.
    const onChangeRow = useCallback((e)=> {
        setRow(e.target.value);
    },[])

    const onChangeCell = useCallback((e)=> {
        setCell(e.target.value);
    },[])

    const onChangeMine = useCallback((e)=> {
        setMine(e.target.value);
    },[])

    const onClickBtn = useCallback(()=> {
        dispatch({type: START_GAME, row, cell, mine})
    },[row,cell,mine])

    return (
        <div className="input-form">
            <input type="number" placeholder="세로줄" value={row} onChange={onChangeRow}/>
            <input type="number" placeholder="가로줄" value={cell} onChange={onChangeCell}/>
            <input type="number" placeholder="지뢰개수 입력" value={mine} onChange={onChangeMine}/>
            <button onClick={onClickBtn}>시작</button>
        </div>
    );
})

export default Form;