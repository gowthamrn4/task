import React, { useEffect} from 'react';
import './index.css';

function Button({title,onClick,disable}) {
  return (
   <div>
       <input type="submit" onClick={onClick} disabled={disable} className="btn" value={title} />
   </div>
  );
}

export default Button;
