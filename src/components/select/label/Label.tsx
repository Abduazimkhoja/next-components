import { FC, ReactNode } from 'react';
import './Label.scss';

export type TLabel = {
  label: string;
};

const Label: FC<TLabel> = ({ label }) => {
  return (
    <div className='label label-multiple'>
      <input type='text' readOnly placeholder='select' defaultValue={label} />
      <button onClick={() => {}}>&times;</button>
    </div>
    // <span data-placeholder={placeholder} className='label'>
    //   {multiple && Array.isArray(selectLabels)
    //     ? selectLabels.map((label) => (
    //         <button key={label} className={styles['multi__label']}>
    //           {label}
    //           <span
    //             onClick={() => handleOption()}
    //             className={styles['multi__label-remove']}
    //           ></span>
    //         </button>
    //       ))
    //     : selectLabels}
    // </span>
  );
};

export default Label;
