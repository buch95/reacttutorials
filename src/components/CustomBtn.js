import React from 'react';
import './CustomBtn.css';
import moment from 'moment';

let a = moment().format('DD MMMM YYYY hh:mm:ss');

let saySmth = function (e) {
  alert(a);
};

function CustomBtn() {
  return (
    <div>
    <button className="custom-btn"
      onClick={saySmth}>Get date!</button>
    <span>{a.toString()} </span>
    </div>
  );
}

export default CustomBtn;
