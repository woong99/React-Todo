import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodoFB } from '../../redux/modules/todos';
import styles from './AddTodo.module.scss';
const AddTodo = (props) => {
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.user);
  const category = useRef();
  const todo = useRef();
  const significant = useRef();
  const [color, setColor] = useState({ color: 'rgb(85, 95, 77)', index: 7 });
  const onConfirm = () => {
    if (todo.current.value !== '') {
      dispatch(
        addTodoFB(uid, {
          category: category.current.value,
          color: category.current.value === '' ? { color: 'rgb(85, 95, 77)', index: 7 } : color,
          title: todo.current.value,
          significant: significant.current.checked,
          isDone: false,
        }),
      );
      category.current.value = '';
      todo.current.value = '';
      setColor('gray');
      significant.current.checked = false;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.category}>
        <label>Category |</label>
        <input type="text" placeholder="ex) Linux" ref={category} />
        <button onClick={props.false}>X</button>
      </div>
      <div className={styles.color}>
        <label>Color |</label>
        <button
          style={{ borderRadius: color.color === 'rgb(230,75,66)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(230,75,66)', index: 0 });
          }}
        >
          {color.color === 'rgb(230,75,66)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(233,138,75)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(233,138,75)', index: 1 });
          }}
        >
          {color.color === 'rgb(233,138,75)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(230,181,90)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(230,181,90)', index: 2 });
          }}
        >
          {color.color === 'rgb(230,181,90)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(129,199,141)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(129,199,141)', index: 3 });
          }}
        >
          {color.color === 'rgb(129,199,141)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(159,198,244)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(159,198,244)', index: 4 });
          }}
        >
          {color.color === 'rgb(159,198,244)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(44,77,118)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(44,77,118)', index: 5 });
          }}
        >
          {color.color === 'rgb(44,77,118)' ? '✔' : ''}
        </button>
        <button
          style={{ borderRadius: color.color === 'rgb(138,119,176)' ? '10px' : '0px' }}
          onClick={() => {
            setColor({ color: 'rgb(138,119,176)', index: 6 });
          }}
        >
          {color.color === 'rgb(138,119,176)' ? '✔' : ''}
        </button>
      </div>
      <div className={styles.todo}>
        <textarea placeholder="Write to-do list" ref={todo}></textarea>
      </div>
      <div className={styles.confirm}>
        <label>
          Significant
          <input type="checkbox" ref={significant} />
        </label>
        <button onClick={onConfirm}>Confirm</button>
      </div>
    </div>
  );
};

export default AddTodo;
